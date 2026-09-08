(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  var onScroll = function () {
    header.style.boxShadow = window.scrollY > 8
      ? '0 4px 20px rgba(60,36,21,0.08)'
      : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
