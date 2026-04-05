/**
 * Must load before any js/games/*.js project file and before main.js.
 * Each project file pushes one object onto this array.
 *
 * Display order: use getGamesSorted() (main.js / projects-strip.js).
 * Optional per-entry `order` (number): lower values appear first. Entries
 * without `order` keep their relative script order and sort after any
 * entry that has `order` set.
 */
window.GAMES = [];

window.getGamesSorted = function () {
  var raw = window.GAMES || [];
  var decorated = raw.map(function (g, i) {
    return { g: g, i: i };
  });
  decorated.sort(function (a, b) {
    var ao =
      typeof a.g.order === "number" && !isNaN(a.g.order)
        ? a.g.order
        : Number.POSITIVE_INFINITY;
    var bo =
      typeof b.g.order === "number" && !isNaN(b.g.order)
        ? b.g.order
        : Number.POSITIVE_INFINITY;
    if (ao !== bo) return ao - bo;
    return a.i - b.i;
  });
  return decorated.map(function (x) {
    return x.g;
  });
};
