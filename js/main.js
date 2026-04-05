(function () {
  var grid = document.getElementById("games-grid");
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var games = window.GAMES || [];
  if (!grid || !games.length) return;

  games.forEach(function (g) {
    var isCollection =
      g.isCollection &&
      Array.isArray(g.collectionItems) &&
      g.collectionItems.length > 0;

    var card = document.createElement("article");
    card.className = "game-card" + (isCollection ? " game-card--collection" : "");
    card.setAttribute("role", "listitem");
    card.tabIndex = 0;

    var media = document.createElement("div");
    media.className = "game-card-media";

    var img = document.createElement("img");
    img.src = g.image;
    img.alt = g.title + (isCollection ? " — project collection" : " screenshot or key art");
    img.loading = "lazy";
    img.decoding = "async";
    if (/^https?:\/\//i.test(g.image)) {
      img.referrerPolicy = "no-referrer";
    }
    media.appendChild(img);

    var body = document.createElement("div");
    body.className = "game-card-body";

    var titleBar = document.createElement("div");
    titleBar.className = "game-card-title-bar";

    var title = document.createElement("h3");
    title.className = "game-title";
    title.textContent = g.title;
    titleBar.appendChild(title);

    var expanded = document.createElement("div");
    expanded.className = "game-card-expanded";

    var expandedInner = document.createElement("div");
    expandedInner.className = "game-card-expanded-inner";

    var header = document.createElement("div");
    header.className = "game-card-header";

    if (g.published && g.playUrl) {
      var play = document.createElement("a");
      play.className = "game-play";
      play.href = g.playUrl;
      play.target = "_blank";
      play.rel = "noopener noreferrer";
      play.textContent = g.linkLabel || "Play";
      header.appendChild(play);
    } else if (isCollection) {
      var offBadge = document.createElement("span");
      offBadge.className = "game-badge game-badge--offline";
      offBadge.textContent = "Offline";
      header.appendChild(offBadge);
    } else {
      var badge = document.createElement("span");
      badge.className = "game-badge";
      badge.textContent = "In development";
      header.appendChild(badge);
    }

    expandedInner.appendChild(header);

    if (g.description) {
      var desc = document.createElement("p");
      desc.className = "game-desc";
      desc.textContent = g.description;
      expandedInner.appendChild(desc);
    }

    if (isCollection) {
      var listLabel = document.createElement("p");
      listLabel.className = "game-collection-label";
      listLabel.textContent = "Projects in this collection";
      expandedInner.appendChild(listLabel);

      var collList = document.createElement("ul");
      collList.className = "game-collection-list";
      g.collectionItems.forEach(function (name) {
        var item = document.createElement("li");
        item.textContent = name;
        collList.appendChild(item);
      });
      expandedInner.appendChild(collList);
    }

    var metaParts = [];
    if (g.role) metaParts.push(g.role);
    if (g.tech) metaParts.push(g.tech);
    if (metaParts.length) {
      var ul = document.createElement("ul");
      ul.className = "game-meta";
      metaParts.forEach(function (part) {
        var li = document.createElement("li");
        li.textContent = part;
        ul.appendChild(li);
      });
      expandedInner.appendChild(ul);
    }

    expanded.appendChild(expandedInner);
    body.appendChild(titleBar);
    body.appendChild(expanded);
    media.appendChild(body);
    card.appendChild(media);
    grid.appendChild(card);
  });
})();
