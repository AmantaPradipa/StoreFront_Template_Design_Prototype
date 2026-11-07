(() => {
  "use strict";
  const DATA = JSON.parse(document.getElementById("catalogue").textContent),
    $ = (s) => document.querySelector(s),
    $$ = (s) => [...document.querySelectorAll(s)];
  const money = (n) =>
      new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }).format(n),
    esc = (s) =>
      String(s).replace(
        /[&<>"']/g,
        (c) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          })[c],
      );
  const iso = (d) =>
      new Date(d.getTime() - d.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10),
    today = iso(new Date()),
    day = 86400000;
  let mode = "hotels",
    filter = "all",
    priced = false,
    busy = false,
    trip = [],
    lastFocus = null,
    currentItem = null,
    revision = 0;
  const fields = {
      rooms: $("#rooms"),
      adults: $("#adults"),
      children: $("#qChildren"),
    },
    limits = { rooms: [1, 9], adults: [1, 20], children: [0, 20] };
  const count = (k) => Number(fields[k].value),
    nights = () =>
      Math.round(
        (Date.parse($("#checkOut").value) - Date.parse($("#checkIn").value)) /
          day,
      );
  $("#checkIn").min = today;
  $("#checkOut").min = today;
  $("#actDate").min = today;
  function updateParty() {
    const old = new Map(
      $$("[data-age]").map((s) => [s.dataset.ageKey, s.value]),
    );
    const children = Math.min(20, Math.max(0, count("children") || 0));
    const units =
      mode === "hotels" ? Math.min(9, Math.max(1, count("rooms") || 1)) : 1;
    $("#childAges").innerHTML = Array.from({ length: units }, (_, room) =>
      Array.from({ length: children }, (_, child) => {
        const key = room + "-" + child;
        const label =
          (mode === "hotels" ? "Kamar " + (room + 1) + " · " : "") +
          "Usia anak " +
          (child + 1);
        return (
          '<label class="age-label">' +
          label +
          '<select data-age data-age-key="' +
          key +
          '" required aria-label="' +
          label +
          '"><option value="">Pilih usia</option>' +
          Array.from(
            { length: 18 },
            (_, age) =>
              '<option value="' +
              age +
              '"' +
              (old.get(key) === String(age) ? " selected" : "") +
              ">" +
              age +
              " tahun</option>",
          ).join("") +
          "</select></label>"
        );
      }).join(""),
    ).join("");
    $("#guestSummary").textContent =
      (mode === "hotels" ? count("rooms") + " kamar · " : "") +
      count("adults") +
      " dewasa · " +
      count("children") +
      " anak" +
      (mode === "hotels" ? " / kamar" : "");
  }
  function errors() {
    const e = [];
    if (!$("#dest").value.trim()) e.push("Pilih kawasan atau nama penginapan.");
    if (mode === "hotels") {
      if (!$("#checkIn").value || !$("#checkOut").value)
        e.push("Lengkapi tanggal check-in dan check-out.");
      else if (
        $("#checkIn").value < today ||
        !Number.isFinite(nights()) ||
        nights() < 1 ||
        nights() > 30
      )
        e.push("Pilih masa inap 1–30 malam, mulai hari ini atau setelahnya.");
    } else if (!$("#actDate").value || $("#actDate").value < today)
      e.push("Pilih tanggal pengalaman mulai hari ini atau setelahnya.");
    for (const k of Object.keys(limits)) {
      const n = count(k),
        [lo, hi] = limits[k];
      if (!Number.isInteger(n) || n < lo || n > hi)
        e.push(
          k === "rooms"
            ? "Kamar harus 1–9."
            : k === "adults"
              ? "Dewasa per kamar harus 1–20."
              : "Anak per kamar harus 0–20.",
        );
    }
    if ($$("[data-age]").some((s) => s.value === ""))
      e.push("Pilih usia setiap anak (0–17 tahun).");
    return e;
  }
  function showErrors(e) {
    $("#formErrors").textContent = e.join(" ");
    if (e.length && $$("[data-age]").some((s) => s.value === ""))
      openPanel("guests");
  }
  function summary() {
    return mode === "hotels"
      ? Math.max(0, nights() || 0) +
          " malam · " +
          count("rooms") +
          " kamar · " +
          count("adults") +
          " dewasa/kamar"
      : $("#actDate").value + " · " + count("adults") + " dewasa";
  }
  function total(it) {
    return it.nightly
      ? it.nightly * Math.max(1, nights() || 1) * count("rooms")
      : it.perPerson * (count("adults") + count("children"));
  }
  function list() {
    const q = $("#dest").value.trim().toLocaleLowerCase("id");
    return (mode === "hotels" ? DATA.STAYS : DATA.ACTIVITIES).filter(
      (it) =>
        (filter === "all" || it.filter === filter) &&
        (!q ||
          q === "semua kawasan" ||
          [it.name, it.area, it.keys]
            .join(" ")
            .toLocaleLowerCase("id")
            .includes(q)),
    );
  }
  function resultCard(it, i) {
    return (
      '<article class="stay-card ' +
      (i === 0 ? "spotlight" : "") +
      '"><button type="button" class="stay-photo" data-detail="' +
      it.id +
      '" aria-label="Lihat ' +
      esc(it.name) +
      '"><img src="' +
      it.img +
      '" alt="' +
      esc(it.alt) +
      '" loading="lazy"><span class="image-caption">' +
      (i === 0
        ? "Pilihan untuk perjalanan Anda"
        : "Catatan perjalanan " + String(i + 1).padStart(2, "0")) +
      '</span></button><div class="stay-copy"><span class="eyebrow">' +
      esc(it.area) +
      "</span><h3>" +
      esc(it.name) +
      "</h3><p>" +
      esc(it.desc) +
      "</p><dl><div><dt>" +
      (it.nightly ? "Kamar" : "Durasi") +
      "</dt><dd>" +
      esc(it.room || it.duration) +
      "</dd></div><div><dt>" +
      (it.nightly ? "Termasuk" : "Perjalanan") +
      "</dt><dd>" +
      esc(it.meal || "Contoh pengalaman agen") +
      '</dd></div></dl><div class="stay-action"><div><small>' +
      (priced ? "Estimasi contoh · " + esc(summary()) : "Contoh harga mulai") +
      "</small><strong>" +
      money(priced ? total(it) : it.nightly || it.perPerson) +
      "</strong><small>" +
      (priced
        ? "Bukan penawaran atau ketersediaan nyata"
        : it.nightly
          ? "per kamar / malam"
          : "per orang") +
      '</small></div><button type="button" class="button" data-detail="' +
      it.id +
      '">Lihat ' +
      (it.nightly ? "kamar" : "rincian") +
      ' <span aria-hidden="true">↗</span></button></div></div></article>'
    );
  }
  function render() {
    const items = list();
    $("#resultCount").textContent =
      items.length +
      " " +
      (mode === "hotels" ? "penginapan" : "pengalaman") +
      " contoh";
    $("#results").setAttribute("aria-busy", String(busy));
    $("#results").innerHTML = busy
      ? '<div class="loading" role="status">Menyiapkan hasil contoh untuk perjalanan Anda…</div>'
      : items.length
        ? items.map(resultCard).join("")
        : '<div class="empty"><h3>Belum menemukan yang cocok.</h3><p>Coba kawasan lain atau tampilkan semua pilihan contoh.</p><button type="button" class="button" data-reset>Tampilkan semua</button></div>';
  }
  function invalidate() {
    revision++;
    priced = false;
    $("#formErrors").textContent = "";
    $("#searchStatus").textContent =
      "Prototipe interaktif · katalog dan harga contoh";
    render();
  }
  function positionPanel(panel) {
    const trigger = $('[data-panel-toggle="' + panel.dataset.panel + '"]');
    if (!trigger) return;
    const viewport = window.visualViewport;
    const width = viewport?.width || innerWidth;
    const height = viewport?.height || innerHeight;
    const top = viewport?.offsetTop || 0;
    const left = viewport?.offsetLeft || 0;
    const rect = trigger.getBoundingClientRect();
    panel.style.width =
      Math.min(panel.dataset.panel === "dates" ? 410 : 350, width - 32) + "px";
    panel.style.left =
      Math.max(
        left + 16,
        Math.min(rect.left, left + width - panel.offsetWidth - 16),
      ) + "px";
    panel.style.right = "auto";
    if (width <= 600) {
      panel.style.top = "auto";
      panel.style.bottom = Math.max(16, innerHeight - top - height + 16) + "px";
      panel.style.maxHeight = Math.max(120, height - 112) + "px";
      return;
    }
    const below = Math.max(80, top + height - rect.bottom - 24);
    const above = Math.max(80, rect.top - top - 24);
    const opensBelow =
      below >= Math.min(panel.scrollHeight, 360) || below >= above;
    panel.style.maxHeight = Math.min(560, opensBelow ? below : above) + "px";
    panel.style.top = opensBelow ? rect.bottom + 8 + "px" : "auto";
    panel.style.bottom = opensBelow
      ? "auto"
      : innerHeight - rect.top + 8 + "px";
  }
  function openPanel(name) {
    closePanels();
    const panel = $('[data-panel="' + name + '"]');
    if (!panel) return;
    panel.hidden = false;
    if (typeof panel.showPopover === "function") {
      panel.setAttribute("popover", "manual");
      panel.showPopover();
      positionPanel(panel);
    }
    $('[data-panel-toggle="' + name + '"]')?.setAttribute(
      "aria-expanded",
      "true",
    );
    panel.querySelector("input,select,button")?.focus({ preventScroll: true });
  }
  function closePanels() {
    $$("[data-panel]").forEach((panel) => {
      if (
        typeof panel.hidePopover === "function" &&
        panel.matches(":popover-open")
      )
        panel.hidePopover();
      panel.hidden = true;
    });
    $$("[data-panel-toggle]").forEach((button) =>
      button.setAttribute("aria-expanded", "false"),
    );
  }
  const repositionPanels = () =>
    $$("[data-panel]:not([hidden])").forEach(positionPanel);
  window.addEventListener("resize", repositionPanels);
  window.visualViewport?.addEventListener("resize", repositionPanels);
  document.addEventListener("scroll", repositionPanels, true);
  $$("[data-panel]").forEach((panel) =>
    panel.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        event.preventDefault();
        closePanels();
        $('[data-panel-toggle="' + panel.dataset.panel + '"]')?.focus();
      }
    }),
  );
  $$("[data-panel-toggle]").forEach((b) =>
    b.addEventListener("click", () => {
      const n = b.dataset.panelToggle,
        p = $('[data-panel="' + n + '"]');
      if (!p.hidden) {
        closePanels();
        b.focus();
      } else openPanel(n);
    }),
  );
  $$("[data-panel-close]").forEach((b) =>
    b.addEventListener("click", () => {
      const panel = b.closest("[data-panel]");
      closePanels();
      $('[data-panel-toggle="' + panel.dataset.panel + '"]')?.focus();
    }),
  );
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-console")) closePanels();
  });
  $$("[data-mode]").forEach((b) =>
    b.addEventListener("click", () => {
      if (b.dataset.mode === mode) return;
      mode = b.dataset.mode;
      filter = "all";
      $("#dest").value = "";
      $$("[data-mode]").forEach((x) => {
        x.setAttribute("aria-selected", String(x === b));
      });
      $$("[data-hotel-only]").forEach((x) => (x.hidden = mode !== "hotels"));
      $$("[data-activity-only]").forEach((x) => (x.hidden = mode === "hotels"));
      $("#destinationLabel").textContent =
        mode === "hotels"
          ? "Kawasan atau penginapan"
          : "Kawasan atau pengalaman";
      $("#dest").placeholder =
        mode === "hotels" ? DATA.destinationHint : "Semua kawasan";
      updateParty();
      invalidate();
    }),
  );
  $$("[data-step]").forEach((b) =>
    b.addEventListener("click", () => {
      const k = b.dataset.step,
        [lo, hi] = limits[k];
      fields[k].value = Math.min(
        hi,
        Math.max(lo, (count(k) || lo) + Number(b.dataset.dir)),
      );
      updateParty();
      invalidate();
    }),
  );
  Object.entries(fields).forEach(([k, f]) =>
    f.addEventListener("input", () => {
      updateParty();
      invalidate();
    }),
  );
  $("#childAges").addEventListener("change", invalidate);
  ["dest", "checkIn", "checkOut", "actDate"].forEach((id) =>
    $("#" + id).addEventListener("input", () => {
      if (id === "checkIn" && $("#checkIn").value) {
        const start = new Date($("#checkIn").value + "T12:00:00");
        $("#checkOut").min = iso(new Date(start.getTime() + day));
        $("#checkOut").max = iso(new Date(start.getTime() + 30 * day));
      }
      $("#dateSummary").textContent =
        $("#checkIn").value && $("#checkOut").value
          ? $("#checkIn").value + " — " + $("#checkOut").value
          : "Pilih tanggal menginap";
      invalidate();
    }),
  );
  $$("[data-filter]").forEach((b) =>
    b.addEventListener("click", () => {
      filter = b.dataset.filter;
      $("#dest").value = "";
      $$("[data-filter]").forEach((x) =>
        x.setAttribute("aria-pressed", String(x === b)),
      );
      invalidate();
    }),
  );
  $("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (busy) return;
    const errs = errors();
    showErrors(errs);
    if (errs.length) {
      $("#formErrors").focus();
      return;
    }
    closePanels();
    const version = revision;
    busy = true;
    $("#checkBtn").disabled = true;
    $("#searchStatus").textContent = "Mencari dalam katalog contoh…";
    render();
    setTimeout(() => {
      busy = false;
      $("#checkBtn").disabled = false;
      priced = version === revision;
      $("#searchStatus").textContent = priced
        ? "Hasil simulasi · " + summary()
        : "Parameter berubah. Silakan cari kembali.";
      render();
      $("#hotels").scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }, 500);
  });
  function modalOpen(id) {
    lastFocus = document.activeElement;
    const d = $("#" + id);
    d.showModal();
    d.querySelector("button,input")?.focus();
  }
  function modalClose(id) {
    $("#" + id).close();
    lastFocus?.focus();
  }
  $$("[data-close-dialog]").forEach((b) =>
    b.addEventListener("click", () => modalClose(b.closest("dialog").id)),
  );
  $$("dialog").forEach((d) => {
    d.addEventListener("click", (e) => {
      if (e.target === d) {
        const r = d.getBoundingClientRect();
        if (
          e.clientX < r.left ||
          e.clientX > r.right ||
          e.clientY < r.top ||
          e.clientY > r.bottom
        )
          modalClose(d.id);
      }
    });
    d.addEventListener("cancel", () => lastFocus?.focus());
  });
  function openDetail(id) {
    currentItem = [...DATA.STAYS, ...DATA.ACTIVITIES].find((x) => x.id === id);
    const it = currentItem;
    if (!it) return;
    $("#detailBody").innerHTML =
      '<div class="detail-gallery"><img id="detailImg" src="' +
      it.img +
      '" alt="' +
      esc(it.alt) +
      '"><div>' +
      [
        it.img,
        "./assets/stay-2.webp",
        "./assets/stay-3.webp",
        "./assets/dest-1.webp",
      ]
        .map(
          (src, i) =>
            '<button type="button" data-gallery="' +
            src +
            '" aria-label="Foto contoh ' +
            (i + 1) +
            '"><img src="' +
            src +
            '" alt=""></button>',
        )
        .join("") +
      '</div></div><span class="eyebrow">Contoh konten agen · ' +
      esc(it.area) +
      '</span><h2 id="detailTitle">' +
      esc(it.name) +
      "</h2><p>" +
      esc(it.desc) +
      "</p><ul>" +
      (it.amenities || []).map((x) => "<li>" + esc(x) + "</li>").join("") +
      "</ul><h3>Kebijakan contoh</h3><p>" +
      esc(it.policy) +
      '</p><p class="notice">Pilihan kamar: ' +
      esc(it.room || it.duration) +
      ". " +
      (it.meal ? esc(it.meal) + ". " : "") +
      'Seluruh informasi pada prototipe ini bersifat ilustratif.</p><strong class="detail-price">' +
      money(priced ? total(it) : it.nightly || it.perPerson) +
      "</strong>";
    modalOpen("detailDialog");
  }
  function renderTrip() {
    $$("[data-trip-count]").forEach((x) => (x.textContent = trip.length));
    $("#tripBody").innerHTML = trip.length
      ? trip
          .map(
            (t, i) =>
              '<article class="trip-item"><div><h3>' +
              esc(t.name) +
              "</h3><p>" +
              esc(t.summary) +
              "</p><strong>" +
              money(t.total) +
              '</strong></div><button type="button" data-remove="' +
              i +
              '" class="text-button">Hapus</button></article>',
          )
          .join("")
      : "<p>Belum ada pilihan. Cari tanggal, lalu tambahkan penginapan atau pengalaman.</p>";
    $("#tripTotal").textContent = money(trip.reduce((s, t) => s + t.total, 0));
    $("#checkoutBtn").disabled = !trip.length;
  }
  $$("[data-open-trip]").forEach((b) =>
    b.addEventListener("click", () => {
      renderTrip();
      modalOpen("tripDialog");
    }),
  );
  $("#addTripBtn").addEventListener("click", () => {
    const errs = errors();
    if (errs.length) {
      modalClose("detailDialog");
      showErrors(errs);
      $("#searchSection").scrollIntoView();
      return;
    }
    trip.push({
      name: currentItem.name,
      total: total(currentItem),
      summary: summary(),
    });
    modalClose("detailDialog");
    renderTrip();
    modalOpen("tripDialog");
  });
  $("#checkoutBtn").addEventListener("click", () => {
    modalClose("tripDialog");
    $("#checkoutForm").reset();
    $("#checkoutGuest").hidden = false;
    $("#paymentStep").hidden = true;
    $("#confirmation").hidden = true;
    $("#checkoutTotal").textContent = money(
      trip.reduce((s, t) => s + t.total, 0),
    );
    modalOpen("checkoutDialog");
  });
  $("#checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!$("#checkoutForm").reportValidity()) return;
    $("#checkoutGuest").hidden = true;
    $("#paymentStep").hidden = false;
    $("#paymentStep").focus();
  });
  $("#guestBack").addEventListener("click", () => {
    $("#checkoutGuest").hidden = false;
    $("#paymentStep").hidden = true;
    $("#guestName").focus();
  });
  $("#saveDraft").addEventListener("click", () => {
    $("#paymentStep").hidden = true;
    $("#confirmation").hidden = false;
    $("#draftRef").textContent =
      "CONTOH-" + new Date().getTime().toString(36).toUpperCase();
    $("#confirmation").focus();
  });
  $("#downloadSummary").addEventListener("click", () => {
    const txt =
      DATA.brand +
      " — RINGKASAN CONTOH, BUKAN VOUCHER RESMI\n" +
      $("#draftRef").textContent +
      "\n" +
      $("#guestName").value +
      "\n" +
      trip
        .map((t) => t.name + " | " + t.summary + " | " + money(t.total))
        .join("\n") +
      "\nTidak ada pembayaran atau reservasi nyata.";
    const u = URL.createObjectURL(
        new Blob([txt], { type: "text/plain;charset=utf-8" }),
      ),
      a = document.createElement("a");
    a.href = u;
    a.download = "ringkasan-contoh.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 0);
  });
  document.addEventListener("click", (e) => {
    const d = e.target.closest("[data-detail]");
    if (d) openDetail(d.dataset.detail);
    const g = e.target.closest("[data-gallery]");
    if (g) $("#detailImg").src = g.dataset.gallery;
    const r = e.target.closest("[data-remove]");
    if (r) {
      trip.splice(Number(r.dataset.remove), 1);
      renderTrip();
    }
    if (e.target.closest("[data-reset]")) {
      $("#dest").value = "";
      filter = "all";
      invalidate();
    }
    const q = e.target.closest("[data-quick-region]");
    if (q) {
      $("#dest").value = q.dataset.quickRegion;
      filter = "all";
      invalidate();
      $("#searchSection").scrollIntoView();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const b = $$("[data-panel-toggle]").find(
        (x) => x.getAttribute("aria-expanded") === "true",
      );
      closePanels();
      b?.focus();
    }
  });
  $("#menuBtn").addEventListener("click", () => {
    const n = $("#mobileNav");
    n.hidden = !n.hidden;
    $("#menuBtn").setAttribute("aria-expanded", String(!n.hidden));
  });
  $("#mobileNav").addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      $("#mobileNav").hidden = true;
      $("#menuBtn").setAttribute("aria-expanded", "false");
    }
  });
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#contactStatus").textContent =
      "Contoh pesan siap. Formulir ini belum terhubung ke layanan pengiriman.";
  });
  $("#year").textContent = new Date().getFullYear();
  updateParty();
  render();
  renderTrip();
})();
