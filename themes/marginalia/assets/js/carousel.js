/* carousel.js — previous/next buttons, a counter and arrow keys for the
   carousel shortcode. Wraps around: next on the last image goes to the
   first, previous on the first goes to the last. Without this script the
   carousel is still a scroll-snap strip you can swipe or scroll. */
(function () {
  function init() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.carousel').forEach(function (c) {
      var track = c.querySelector('.carousel-track');
      var slides = track ? track.children : [];
      var n = slides.length;
      if (n < 2) return;
      var count = c.querySelector('.carousel-count');
      var prev = c.querySelector('.carousel-prev');
      var next = c.querySelector('.carousel-next');

      function current() {
        return Math.min(n - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth)));
      }
      function go(i) {
        i = (i + n) % n;
        track.scrollTo({ left: slides[i].offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
      }
      var queued = false;
      function update() {
        queued = false;
        if (count) count.textContent = (current() + 1) + ' / ' + n;
      }

      prev.addEventListener('click', function () { go(current() - 1); });
      next.addEventListener('click', function () { go(current() + 1); });
      track.addEventListener('scroll', function () {
        if (!queued) { queued = true; requestAnimationFrame(update); }
      }, { passive: true });
      track.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(current() - 1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); go(current() + 1); }
      });

      prev.hidden = false;
      next.hidden = false;
      c.classList.add('carousel-ready');
      update();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
