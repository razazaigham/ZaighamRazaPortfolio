(function () {
  var track = document.getElementById("project-strip-track");
  var section = document.querySelector(".project-strip-section");
  var games =
    typeof window.getGamesSorted === "function"
      ? window.getGamesSorted()
      : window.GAMES || [];
  if (!track || !section) return;

  var count = 0;
  games.forEach(function (g) {
    if (!g.published || !g.playUrl) return;

    var item = document.createElement("div");
    item.className = "project-strip-item";

    var a = document.createElement("a");
    a.className = "project-strip-link";
    a.href = g.playUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute(
      "aria-label",
      g.title + " — opens store listing in a new tab"
    );
    a.title = g.title;

    var img = document.createElement("img");
    img.className = "project-strip-img";
    img.src = g.image;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    if (/^https?:\/\//i.test(g.image)) {
      img.referrerPolicy = "no-referrer";
    }

    var cap = document.createElement("span");
    cap.className = "project-strip-caption";
    cap.setAttribute("aria-hidden", "true");
    cap.textContent = g.title;

    a.appendChild(img);
    a.appendChild(cap);
    item.appendChild(a);
    track.appendChild(item);
    count += 1;
  });

  if (!count) section.classList.add("is-empty");
})();
