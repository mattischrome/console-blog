/*
  grid-lanes-polyfill.js — masonry for .card-grid in browsers without CSS
  Grid Lanes (`display: grid-lanes`). Browsers that support it never run
  this: it returns on the first line.

  How it works: the grid keeps its normal columns, but rows become thin
  4px strips (the .lanes-polyfill class in main.css). Each card, in order,
  goes into the shortest column, as Grid Lanes does (a column within 1em of
  the shortest counts as tied, and the leftmost tied one wins, like Grid
  Lanes' default flow-tolerance). It's given an explicit column and a row
  span matching its height plus the gap. Cards keep their tilt, shadow and
  hover, because they're still ordinary grid items.

  It's inlined after the page content (see baseof.html), so the first
  layout happens before the page is painted: no visible jump. It re-runs
  when the grid's width or any card's height changes (ResizeObserver), and
  when cards are added later, as on the search page (MutationObserver).
  Without JavaScript, the plain grid from main.css is the fallback.
*/
(() => {
  if (!window.CSS || CSS.supports("display", "grid-lanes")) return;
  if (!("ResizeObserver" in window)) return;
  const grids = document.querySelectorAll(".card-grid");
  if (!grids.length) return;

  const ROW = 4; // must match grid-auto-rows in .lanes-polyfill

  const layout = (grid) => {
    const items = [...grid.children];
    const cs = getComputedStyle(grid);
    const cols = cs.gridTemplateColumns.split(" ").filter(Boolean).length || 1;
    const gap = parseFloat(cs.columnGap) || 0;
    const tolerance = parseFloat(cs.fontSize) || 16;
    const heights = new Array(cols).fill(0);
    for (const item of items) {
      const min = Math.min(...heights);
      const col = heights.findIndex((h) => h <= min + tolerance);
      // offsetHeight ignores the cards' rotate() transform
      const span = Math.max(1, Math.ceil((item.offsetHeight + gap) / ROW));
      item.style.gridColumn = String(col + 1);
      item.style.gridRow = `${heights[col] / ROW + 1} / span ${span}`;
      heights[col] += span * ROW;
    }
  };

  for (const grid of grids) {
    grid.classList.add("lanes-polyfill");
    layout(grid);

    let queued = false;
    const relayout = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; layout(grid); });
    };
    const ro = new ResizeObserver(relayout);
    ro.observe(grid);
    for (const item of grid.children) ro.observe(item);
    new MutationObserver((changes) => {
      for (const c of changes) for (const n of c.addedNodes) if (n.nodeType === 1) ro.observe(n);
      relayout();
    }).observe(grid, { childList: true });
  }
})();
