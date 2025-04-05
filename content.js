function removeShorts() {
  const shortsSelectors = [
    'ytd-rich-shelf-renderer[is-shorts]',
    'ytd-reel-shelf-renderer',
    'ytd-reel-video-renderer',
    'ytd-reel-item-renderer',
    'ytd-thumbnail-overlay-time-status-renderer[overlay-style="SHORTS"]',
    'ytd-thumbnail-overlay-time-status-renderer span[aria-label="Shorts"]',

    'ytd-grid-video-renderer a[href^="/shorts"]',
    'ytd-video-renderer a[href^="/shorts"]',
    'ytd-playlist-video-renderer a[href^="/shorts"]',
  ];

  shortsSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      const block = el.closest(
        'ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer',
      );
      if (block) {
        block.remove();
      } else {
        el.remove();
      }
    });
  });

  // Remove sidebar "Shorts" link by title
  document
    .querySelectorAll('ytd-guide-entry-renderer a[title="Shorts"]')
    .forEach(el => {
      const container = el.closest('ytd-guide-entry-renderer');
      if (container) container.remove();
    });

  // Redirect if opened directly
  if (location.pathname.startsWith('/shorts')) {
    window.location.href = '/';
  }
}

function removeAds() {
  const adSelectors = [
    '.video-ads',
    '.ytp-ad-module',
    'ytd-promoted-video-renderer',
    '#player-ads',
  ];
  adSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.remove());
  });
}

const observer = new MutationObserver(() => {
  removeShorts();
  removeAds();
});

observer.observe(document.body, { childList: true, subtree: true });

removeShorts();
removeAds();
