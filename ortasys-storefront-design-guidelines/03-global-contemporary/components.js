(() => {
  "use strict";
  if (!("showPopover" in HTMLElement.prototype)) return;
  const controls = new Map();
  let active = null,
    serial = 0,
    syncQueued = false;
  const style = document.createElement("style");
  style.textContent =
    ".ui-select{position:relative;min-width:0;width:100%}.ui-select>select.ui-native-select{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;border:0!important;clip-path:inset(50%)!important;opacity:0;pointer-events:none}.ui-select-menu{box-sizing:border-box;position:fixed;inset:auto;margin:0;overflow-y:auto;overscroll-behavior:contain;z-index:1000}.ui-select-menu[hidden]{display:none!important}.ui-select-chevron{width:16px;height:16px;flex:none;pointer-events:none}.ui-select-value{min-width:0;overflow-wrap:anywhere;white-space:normal}.ui-select-option{width:100%;text-align:left;white-space:normal;overflow-wrap:anywhere}.ui-select-trigger{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;text-align:left}.ui-select-trigger:disabled{cursor:not-allowed}.ui-select-menu:popover-open{display:block}";
  document.head.append(style);
  const normalized = (text) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("id");
  function labelFor(source) {
    if (source.getAttribute("aria-label"))
      return source.getAttribute("aria-label");
    const labels = [...(source.labels || [])];
    const text = labels
      .map((label) =>
        [...label.childNodes]
          .filter(
            (node) =>
              node.nodeType === Node.TEXT_NODE ||
              (node.nodeType === Node.ELEMENT_NODE &&
                !node.contains(source) &&
                !node.classList.contains("ui-select")),
          )
          .map((node) => node.textContent)
          .join(" "),
      )
      .join(" ")
      .trim();
    return text || source.name || source.id || "Pilihan";
  }
  function close() {
    if (!active) return;
    const control = active;
    active = null;
    if (control.menu.matches(":popover-open")) control.menu.hidePopover();
    control.menu.hidden = true;
    control.trigger.setAttribute("aria-expanded", "false");
    control.trigger.removeAttribute("aria-activedescendant");
  }
  function position(control) {
    const rect = (
      control.calendar ? control.source : control.trigger
    ).getBoundingClientRect();
    const viewport = window.visualViewport;
    const leftEdge = (viewport?.offsetLeft || 0) + 12;
    const topEdge = (viewport?.offsetTop || 0) + 12;
    const rightEdge = leftEdge + (viewport?.width || innerWidth) - 24;
    const bottomEdge = topEdge + (viewport?.height || innerHeight) - 24;
    if (
      rect.bottom <= topEdge ||
      rect.top >= bottomEdge ||
      control.source.closest("[hidden]") ||
      (control.source.closest("dialog") &&
        !control.source.closest("dialog").open)
    ) {
      close();
      return;
    }
    const width = Math.min(
      control.calendar ? 336 : Math.max(rect.width, 180),
      rightEdge - leftEdge,
    );
    control.menu.style.width = width + "px";
    const natural = control.menu.scrollHeight + 2;
    const below = Math.max(0, bottomEdge - rect.bottom - 6);
    const above = Math.max(0, rect.top - topEdge - 6);
    const opensBelow = below >= Math.min(natural, 180) || below >= above;
    const maxHeight = Math.min(
      control.calendar ? 440 : 320,
      opensBelow ? below : above,
    );
    control.menu.style.maxHeight = maxHeight + "px";
    const height = Math.min(natural, maxHeight);
    control.menu.style.left =
      Math.max(leftEdge, Math.min(rect.left, rightEdge - width)) + "px";
    control.menu.style.top =
      (opensBelow ? rect.bottom + 6 : rect.top - 6 - height) + "px";
  }
  function mark(control, index) {
    control.index = index;
    control.buttons.forEach((button, i) => {
      button.dataset.active = String(i === index);
    });
    const button = control.buttons[index];
    if (button) {
      control.trigger.setAttribute("aria-activedescendant", button.id);
      button.scrollIntoView({ block: "nearest" });
    } else control.trigger.removeAttribute("aria-activedescendant");
  }
  function available(control) {
    if (control.suggest) {
      const query = normalized(control.source.value.trim());
      return [...control.list.options].filter(
        (option) =>
          !option.disabled &&
          normalized(option.value + " " + option.label).includes(query),
      );
    }
    return [...control.source.options].filter(
      (option) =>
        !option.hidden &&
        !option.disabled &&
        !option.closest("optgroup[disabled]"),
    );
  }
  function choose(control, option) {
    control.source.value = option.value;
    close();
    control.source.dispatchEvent(new Event("input", { bubbles: true }));
    control.source.dispatchEvent(new Event("change", { bubbles: true }));
    syncAll();
    if (control.trigger.isConnected)
      control.trigger.focus({ preventScroll: true });
  }
  function render(control) {
    const options = available(control);
    control.menu.replaceChildren();
    control.buttons = options.map((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ui-select-option";
      button.id = control.menu.id + "-option-" + index;
      button.tabIndex = -1;
      button.setAttribute("role", "option");
      button.setAttribute(
        "aria-selected",
        String(option.value === control.source.value),
      );
      button.textContent = control.suggest ? option.value : option.label;
      button.addEventListener("pointerdown", (event) => event.preventDefault());
      button.addEventListener("click", (event) => {
        event.preventDefault();
        choose(control, option);
      });
      control.menu.append(button);
      return button;
    });
    return options;
  }
  function open(control, direction = 1) {
    if (control.source.disabled) return;
    if (active && active !== control) close();
    const options = render(control);
    if (!options.length) {
      close();
      return;
    }
    active = control;
    control.menu.hidden = false;
    control.menu.showPopover();
    control.trigger.setAttribute("aria-expanded", "true");
    position(control);
    if (active !== control) return;
    const selected = options.findIndex(
      (option) => option.value === control.source.value,
    );
    mark(
      control,
      selected >= 0 ? selected : direction < 0 ? options.length - 1 : 0,
    );
  }
  function keydown(control, event) {
    const opened = active === control;
    const key = event.key;
    if (key === "Escape" && opened) {
      event.preventDefault();
      event.stopPropagation();
      close();
      return;
    }
    if (key === "Tab") {
      if (opened) close();
      return;
    }
    if (key === "ArrowDown" || key === "ArrowUp") {
      event.preventDefault();
      const direction = key === "ArrowDown" ? 1 : -1;
      if (!opened) open(control, direction);
      else
        mark(
          control,
          (control.index + direction + control.buttons.length) %
            control.buttons.length,
        );
      return;
    }
    if (opened && (key === "Enter" || (!control.suggest && key === " "))) {
      event.preventDefault();
      control.buttons[control.index]?.click();
      return;
    }
    if (!control.suggest && (key === "Home" || key === "End")) {
      event.preventDefault();
      if (!opened) open(control);
      if (active === control)
        mark(control, key === "Home" ? 0 : control.buttons.length - 1);
      return;
    }
    if (
      !control.suggest &&
      key.length === 1 &&
      key !== " " &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      event.preventDefault();
      const now = performance.now();
      control.query =
        now - (control.typedAt || 0) < 700 ? (control.query || "") + key : key;
      control.typedAt = now;
      if (!opened) open(control);
      const match = control.buttons.findIndex((button) =>
        normalized(button.textContent).startsWith(normalized(control.query)),
      );
      if (match >= 0) mark(control, match);
    }
  }
  function enhance(source) {
    if (
      controls.has(source) ||
      (source.tagName === "SELECT" && (source.multiple || source.size > 1))
    )
      return;
    if (source.type === "date") {
      enhanceDate(source);
      return;
    }
    const suggest = source.tagName === "INPUT";
    const list = suggest ? source.list : null;
    if (suggest && !list) return;
    const wrapper = document.createElement("span");
    wrapper.className = "ui-select";
    let trigger = source;
    if (!suggest) {
      source.before(wrapper);
      wrapper.append(source);
      trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "ui-select-trigger";
      trigger.innerHTML =
        '<span class="ui-select-value"></span><svg class="ui-select-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      wrapper.append(trigger);
      source.classList.add("ui-native-select");
      source.tabIndex = -1;
      source.setAttribute("aria-hidden", "true");
      source.addEventListener("focus", () => trigger.focus());
      source.addEventListener("invalid", (event) => {
        event.preventDefault();
        trigger.setAttribute("aria-invalid", "true");
        trigger.focus();
      });
    } else {
      source.removeAttribute("list");
      source.dataset.uiList = list.id;
    }
    const menu = document.createElement("div");
    menu.className = "ui-select-menu";
    menu.id = "brand-options-" + ++serial;
    menu.setAttribute("popover", "manual");
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-label", labelFor(source));
    menu.hidden = true;
    (suggest ? source.parentElement : wrapper).append(menu);
    trigger.setAttribute("role", "combobox");
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-controls", menu.id);
    trigger.setAttribute("aria-expanded", "false");
    if (suggest) trigger.setAttribute("aria-autocomplete", "list");
    const control = {
      source,
      trigger,
      menu,
      suggest,
      list,
      buttons: [],
      index: 0,
    };
    controls.set(source, control);
    trigger.addEventListener("keydown", (event) => keydown(control, event));
    trigger.addEventListener("click", () => {
      if (active === control && !suggest) close();
      else open(control);
    });
    if (suggest) {
      trigger.addEventListener("focus", () => open(control));
      trigger.addEventListener("input", () => open(control));
      trigger.addEventListener("blur", () => {
        if (active === control) close();
      });
    }
    sync(control);
  }
  function sync(control) {
    if (control.suggest) return;
    const source = control.source;
    if (control.calendar) {
      control.trigger.disabled = source.disabled || source.readOnly;
      control.trigger.setAttribute(
        "aria-label",
        "Pilih tanggal · " +
          labelFor(source) +
          (source.value ? ": " + source.value : ""),
      );
      return;
    }
    const value = source.selectedOptions[0]?.label || "Pilih opsi";
    const label = source.getAttribute("aria-label") || labelFor(source);
    const valueNode = control.trigger.querySelector(".ui-select-value");
    if (valueNode.textContent !== value) valueNode.textContent = value;
    control.trigger.setAttribute("aria-label", label + ": " + value);
    control.trigger.disabled = source.disabled;
    control.trigger.setAttribute("aria-required", String(source.required));
    control.trigger.setAttribute(
      "aria-invalid",
      source.getAttribute("aria-invalid") || "false",
    );
    if (source.getAttribute("aria-describedby"))
      control.trigger.setAttribute(
        "aria-describedby",
        source.getAttribute("aria-describedby"),
      );
  }
  function syncAll() {
    for (const [source, control] of controls) {
      if (!source.isConnected) {
        if (active === control) close();
        control.menu.remove();
        controls.delete(source);
      } else sync(control);
    }
  }
  const dateString = (date) =>
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0");
  const dateFrom = (text) => {
    const [year, month, day] = text.split("-").map(Number);
    return new Date(year, month - 1, day, 12);
  };
  const monthLabel = new Intl.DateTimeFormat("id-ID", {
    month: "long",
    year: "numeric",
  });
  const dayLabel = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  function dateAllowed(source, value) {
    return (
      (!source.min || value >= source.min) &&
      (!source.max || value <= source.max)
    );
  }
  function setDate(control, value) {
    control.source.value = value;
    close();
    control.source.dispatchEvent(new Event("input", { bubbles: true }));
    control.source.dispatchEvent(new Event("change", { bubbles: true }));
    control.trigger.focus({ preventScroll: true });
  }
  function calendarButton(text, label, callback, className = "") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ui-select-option " + className;
    button.textContent = text;
    button.setAttribute("aria-label", label);
    button.addEventListener("click", (event) => {
      event.preventDefault();
      callback();
    });
    return button;
  }
  function renderCalendar(control, focusDate = null, focusNav = null) {
    const menu = control.menu,
      source = control.source;
    menu.replaceChildren();
    const first = new Date(control.year, control.month, 1, 12);
    const last = new Date(control.year, control.month + 1, 0, 12);
    const head = document.createElement("div");
    head.className = "ui-calendar-head";
    const title = document.createElement("span");
    title.id = menu.id + "-month";
    title.className = "ui-calendar-month";
    title.textContent = monthLabel.format(first);
    title.setAttribute("aria-live", "polite");
    const moveMonth = (amount, nav) => {
      const next = new Date(control.year, control.month + amount, 1, 12);
      control.year = next.getFullYear();
      control.month = next.getMonth();
      renderCalendar(control, null, nav);
      position(control);
    };
    const previous = calendarButton(
      "‹",
      "Bulan sebelumnya",
      () => moveMonth(-1, "previous"),
      "ui-calendar-nav",
    );
    const next = calendarButton(
      "›",
      "Bulan berikutnya",
      () => moveMonth(1, "next"),
      "ui-calendar-nav",
    );
    previous.disabled =
      !!source.min &&
      dateString(new Date(control.year, control.month, 0, 12)) < source.min;
    next.disabled =
      !!source.max &&
      dateString(new Date(control.year, control.month + 1, 1, 12)) > source.max;
    head.append(previous, title, next);
    menu.append(head);
    const grid = document.createElement("div");
    grid.className = "ui-calendar-grid";
    grid.setAttribute("role", "group");
    grid.setAttribute("aria-labelledby", title.id);
    for (const day of ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"]) {
      const label = document.createElement("span");
      label.className = "ui-calendar-weekday";
      label.textContent = day;
      grid.append(label);
    }
    const offset = (first.getDay() + 6) % 7;
    for (let index = 0; index < offset; index++) {
      const blank = document.createElement("span");
      blank.setAttribute("aria-hidden", "true");
      grid.append(blank);
    }
    const today = dateString(new Date());
    const dateButtons = [];
    for (let day = 1; day <= last.getDate(); day++) {
      const date = new Date(control.year, control.month, day, 12),
        value = dateString(date);
      const button = calendarButton(
        String(day),
        dayLabel.format(date),
        () => setDate(control, value),
        "ui-calendar-day",
      );
      button.dataset.date = value;
      button.disabled = !dateAllowed(source, value);
      button.tabIndex = -1;
      button.setAttribute("aria-pressed", String(value === source.value));
      if (value === today) button.setAttribute("aria-current", "date");
      button.addEventListener("keydown", (event) => {
        let target = new Date(date);
        if (event.key === "ArrowLeft") target.setDate(day - 1);
        else if (event.key === "ArrowRight") target.setDate(day + 1);
        else if (event.key === "ArrowUp") target.setDate(day - 7);
        else if (event.key === "ArrowDown") target.setDate(day + 7);
        else if (event.key === "Home")
          target.setDate(day - ((date.getDay() + 6) % 7));
        else if (event.key === "End")
          target.setDate(day + 6 - ((date.getDay() + 6) % 7));
        else if (event.key === "PageUp" || event.key === "PageDown") {
          target = new Date(
            control.year,
            control.month + (event.key === "PageUp" ? -1 : 1),
            1,
            12,
          );
          target.setDate(
            Math.min(
              day,
              new Date(
                target.getFullYear(),
                target.getMonth() + 1,
                0,
                12,
              ).getDate(),
            ),
          );
        } else return;
        event.preventDefault();
        const value = dateString(target);
        if (!dateAllowed(source, value)) return;
        control.year = target.getFullYear();
        control.month = target.getMonth();
        renderCalendar(control, value);
        position(control);
      });
      dateButtons.push(button);
      grid.append(button);
    }
    const focused =
      dateButtons.find(
        (button) =>
          !button.disabled &&
          button.dataset.date === (focusDate || source.value || today),
      ) || dateButtons.find((button) => !button.disabled);
    if (focused) focused.tabIndex = 0;
    menu.append(grid);
    const footer = document.createElement("div");
    footer.className = "ui-calendar-footer";
    const clear = calendarButton("Hapus", "Hapus tanggal", () =>
      setDate(control, ""),
    );
    const todayButton = calendarButton("Hari ini", "Pilih hari ini", () =>
      setDate(control, today),
    );
    todayButton.disabled = !dateAllowed(source, today);
    footer.append(clear, todayButton);
    menu.append(footer);
    if (focusNav) {
      const navigation = focusNav === "previous" ? previous : next;
      (navigation.disabled ? focused : navigation)?.focus({
        preventScroll: true,
      });
    } else if (focusDate) {
      focused?.focus({ preventScroll: true });
      focused?.scrollIntoView({ block: "nearest" });
    }
    return focused;
  }
  function openCalendar(control) {
    if (control.source.disabled || control.source.readOnly) return;
    if (active) close();
    const start = dateFrom(
      control.source.value || control.source.min || dateString(new Date()),
    );
    control.year = start.getFullYear();
    control.month = start.getMonth();
    const focused = renderCalendar(control);
    active = control;
    control.menu.hidden = false;
    control.menu.showPopover();
    control.trigger.setAttribute("aria-expanded", "true");
    position(control);
    focused?.focus({ preventScroll: true });
    focused?.scrollIntoView({ block: "nearest" });
  }
  function enhanceDate(source) {
    const wrapper = document.createElement("span");
    wrapper.className = "ui-date-control";
    source.before(wrapper);
    wrapper.append(source);
    source.classList.add("ui-date-input");
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "ui-select-option ui-calendar-toggle";
    trigger.innerHTML =
      '<svg class="ui-select-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2.5" y="3.5" width="11" height="10" rx="1" stroke="currentColor"/><path d="M5 2v3m6-3v3M3 7h10" stroke="currentColor" stroke-linecap="round"/></svg>';
    const menu = document.createElement("div");
    menu.className = "ui-select-menu ui-calendar";
    menu.id = "brand-calendar-" + ++serial;
    menu.hidden = true;
    menu.setAttribute("popover", "manual");
    menu.setAttribute("role", "dialog");
    menu.setAttribute("aria-label", "Kalender: " + labelFor(source));
    trigger.setAttribute("aria-controls", menu.id);
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-expanded", "false");
    wrapper.append(trigger, menu);
    const control = { source, trigger, menu, calendar: true };
    controls.set(source, control);
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      if (active === control) close();
      else openCalendar(control);
    });
    source.addEventListener("keydown", (event) => {
      if (event.key === " " || (event.altKey && event.key === "ArrowDown")) {
        event.preventDefault();
        openCalendar(control);
      }
    });
    menu.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        close();
        trigger.focus({ preventScroll: true });
      }
    });
    menu.addEventListener("focusout", () =>
      queueMicrotask(() => {
        if (
          active === control &&
          !menu.contains(document.activeElement) &&
          document.activeElement !== trigger
        )
          close();
      }),
    );
    sync(control);
  }
  const calendarStyle = document.createElement("style");
  calendarStyle.textContent =
    ".ui-date-control{position:relative;display:block;min-width:0;width:100%}input[type=date].ui-date-input{padding-right:52px}.ui-date-input::-webkit-calendar-picker-indicator{display:none}.ui-date-control .ui-calendar-toggle{position:absolute;right:2px;top:50%;transform:translateY(-50%);width:44px;height:44px;min-height:44px;padding:0;display:grid;place-items:center;background:transparent;border:0;color:inherit}.ui-calendar .ui-select-option{margin:0}.ui-calendar-head{display:grid;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;gap:4px}.ui-calendar-month{text-align:center;font-weight:600;text-transform:capitalize}.ui-calendar .ui-calendar-nav{justify-content:center;padding:0;font-size:24px;min-height:44px}.ui-calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:2px}.ui-calendar-weekday{padding:10px 0;text-align:center;font-size:11px}.ui-calendar .ui-calendar-day{justify-content:center;padding:0;text-align:center;min-width:0;min-height:44px;font-variant-numeric:tabular-nums}.ui-calendar-day[aria-current=date]{text-decoration:underline;text-underline-offset:4px}.ui-calendar-footer{display:flex;gap:8px;border-top:1px solid currentColor;margin-top:8px;padding-top:6px}.ui-calendar-footer .ui-select-option{justify-content:center}.ui-calendar button:disabled{cursor:not-allowed;opacity:.35}";
  document.head.append(calendarStyle);
  function scan() {
    document
      .querySelectorAll("select,input[list],input[type=date]")
      .forEach(enhance);
    syncAll();
  }
  function schedule() {
    if (syncQueued) return;
    syncQueued = true;
    queueMicrotask(() => {
      syncQueued = false;
      scan();
      if (active) position(active);
    });
  }
  document.addEventListener(
    "pointerdown",
    (event) => {
      if (
        active &&
        event.target !== active.trigger &&
        !active.trigger.contains(event.target) &&
        !active.menu.contains(event.target)
      )
        close();
    },
    true,
  );
  document.addEventListener("focusin", (event) => {
    if (
      active &&
      event.target !== active.trigger &&
      !active.menu.contains(event.target)
    )
      close();
  });
  ["input", "change", "click", "reset"].forEach((type) =>
    document.addEventListener(type, schedule, true),
  );
  document.addEventListener(
    "scroll",
    () => {
      if (active) position(active);
    },
    true,
  );
  window.addEventListener("resize", () => {
    if (active) position(active);
  });
  window.visualViewport?.addEventListener("resize", () => {
    if (active) position(active);
  });
  new MutationObserver((records) => {
    if (
      records.some((record) =>
        record.type === "attributes"
          ? ["SELECT", "OPTION", "OPTGROUP"].includes(record.target.tagName)
          : [...record.addedNodes, ...record.removedNodes].some(
              (node) =>
                node.nodeType === 1 &&
                (node.matches("select,option,optgroup,datalist") ||
                  node.querySelector("select,option,optgroup,datalist")),
            ),
      )
    )
      schedule();
  }).observe(document.body, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: [
      "disabled",
      "selected",
      "required",
      "aria-invalid",
      "aria-label",
    ],
  });
  scan();
})();
