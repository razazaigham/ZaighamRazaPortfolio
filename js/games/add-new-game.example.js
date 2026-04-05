/**
 * ADDING A PROJECT
 * 1. Copy this file to js/games/your-game-slug.js (remove .example from the name).
 * 2. Fill in title, description, image, playUrl, linkLabel, role, tech.
 * 3. Add <script src="js/games/your-game-slug.js"></script> in index.html
 *    after js/games/init.js and with other game scripts (order = display order).
 *
 * linkLabel: "Google Play" or "App Store" (or "Play" for web builds).
 * published: true with a real playUrl shows the store link; false shows "In development".
 */
(function () {
  window.GAMES = window.GAMES || [];
  window.GAMES.push({
    title: "Your Game Title",
    description:
      "Short pitch: genre, your contribution, and what players get. Keep it scannable.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    published: true,
    playUrl: "https://",
    linkLabel: "Google Play",
    role: "Game developer",
    tech: "Unity",
  });
})();
