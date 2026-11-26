// Quick Bite – felles skript
(function () {
  // Mobilmeny
  var top = document.querySelector(".top");
  var btn = document.querySelector(".menu-btn");
  if (top && btn) {
    btn.addEventListener("click", function () {
      var open = top.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "Lukk meny" : "Åpne meny");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && top.classList.contains("open")) { top.classList.remove("open"); btn.setAttribute("aria-expanded", false); btn.focus(); }
    });
  }

  // Åpningstider (norsk tid). Minutter etter midnatt; over 1440 = etter midnatt neste dag.
  var hours = { 0: [720, 1410], 1: [660, 1410], 2: [660, 1410], 3: [660, 1410], 4: [660, 1410], 5: [660, 1410], 6: [780, 1530] };
  var parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Oslo", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
  var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  var min = +get("hour") * 60 + +get("minute");
  var fmt = function (m) { m %= 1440; return ("0" + Math.floor(m / 60)).slice(-2) + ":" + ("0" + (m % 60)).slice(-2); };
  var today = hours[day], yesterday = hours[(day + 6) % 7], open = false, closes;
  if (min >= today[0] && min < today[1]) { open = true; closes = today[1]; }
  else if (yesterday[1] > 1440 && min < yesterday[1] - 1440) { open = true; closes = yesterday[1]; }
  var text = open ? "Åpent nå, til " + fmt(closes) : (min < today[0] ? "Stengt nå, åpner kl. " + fmt(today[0]) : "Stengt nå");
  document.querySelectorAll("[data-status]").forEach(function (el) {
    var d = el.querySelector(".dot"); if (d) d.classList.toggle("open", open);
    var t = el.querySelector(".status-text"); if (t) t.textContent = text;
  });
  document.querySelectorAll(".hours li[data-days]").forEach(function (li) {
    if (li.getAttribute("data-days").split(",").indexOf(String(day)) > -1) li.classList.add("today");
  });

  // Menyside: marker kategorien man er i
  var links = document.querySelectorAll(".jump a");
  if (links.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll(".menu-sec").forEach(function (s) { io.observe(s); });
  }
})();
