
document.addEventListener('DOMContentLoaded', function () {
  const GA_MEASUREMENT_ID = 'G-0LY0HY7L01';
  const OLD_GA_ID = 'G-YTP08B4056';

  function initGA4(measurementId, oldIdToRemove) {
    if (!measurementId) return;
    window.dataLayer = window.dataLayer || [];

    if (typeof window.gtag !== 'function') {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }

    if (oldIdToRemove && Array.isArray(window.dataLayer)) {
      window.dataLayer = window.dataLayer.filter(function (item) {
        return !(Array.isArray(item) && item[0] === 'config' && item[1] === oldIdToRemove);
      });
    }

    const scriptSrc =
      'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const s = document.createElement('script');
      s.async = true;
      s.src = scriptSrc;
      document.head.appendChild(s);
    }

    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: true });
  }

  initGA4(GA_MEASUREMENT_ID, OLD_GA_ID);
});

window.jckcall = "1-844-950-0800";