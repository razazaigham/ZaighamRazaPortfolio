/**
 * OFFLINE COLLECTION CARD
 * Copy to collection-your-name.js, add <script src="js/collections/collection-your-name.js"></script>
 * in index.html after other games/collections (before projects-strip.js).
 * Optional `order` (number): lower = earlier (see init.js).
 *
 * isCollection: true + collectionItems[] shows list on hover; no store link.
 */
(function () {
  window.GAMES = window.GAMES || [];
  window.GAMES.push({
    isCollection: true,
    title: "Studio — Collection name",
    description: "Short note: why offline, what you did.",
    image: "images/games/your-cover.png",
    published: false,
    playUrl: "",
    collectionItems: ["Game One", "Game Two"],
    role: "Optional",
    tech: "Optional",
    // order: 20,
  });
})();
