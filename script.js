// Quick Bite: viser om det er åpent nå (norsk tid) og markerer dagens åpningstid.
(function () {
  // Minutter etter midnatt. Over 1440 betyr etter midnatt neste dag.
  var hours = { 0: [720, 1410], 1: [660, 1410], 2: [660, 1410], 3: [660, 1410], 4: [660, 1410], 5: [660, 1410], 6: [780, 1530] };
  var parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Oslo", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
  var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  var min = +get("hour") * 60 + +get("minute");
  var fmt = function (m) { m %= 1440; return ("0" + Math.floor(m / 60)).slice(-2) + ":" + ("0" + (m % 60)).slice(-2); };
  var today = hours[day], yesterday = hours[(day + 6) % 7], open = false, closes;
  if (min >= today[0] && min < today[1]) { open = true; closes = today[1]; }
  else if (yesterday[1] > 1440 && min < yesterday[1] - 1440) { open = true; closes = yesterday[1]; }
  var text = open ? "Åpent nå, til " + fmt(closes) : (min < today[0] ? "Stengt nå, åpner " + fmt(today[0]) : "Stengt nå");
  document.querySelectorAll("[data-status]").forEach(function (el) {
    var d = el.querySelector(".dot"); if (d) d.classList.toggle("open", open);
    var t = el.querySelector(".status-text"); if (t) t.textContent = text;
  });
  document.querySelectorAll(".hours tr[data-days]").forEach(function (tr) {
    if (tr.getAttribute("data-days").split(",").indexOf(String(day)) > -1) tr.classList.add("is-today");
  });
})();
