// Shared ordering pages remain usable directly and also live inside the homepage.
if (window.parent !== window && new URLSearchParams(location.search).get('home') === '1') {
  document.documentElement.classList.add('in-home');
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href);
    const cafe = new URL('../', location.href);
    if (url.origin === cafe.origin && url.pathname === cafe.pathname) {
      event.preventDefault();
      window.parent.postMessage({type:'cafe:mode', mode:url.searchParams.get('mode') === 'table' ? 'table' : 'takeaway'}, location.origin);
    }
  });
  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== window.parent || event.data?.type !== 'cafe:pause') return;
    // A camera preview should never keep capturing in the hidden ordering mode.
    document.querySelectorAll('video').forEach(video => {
      if (video.srcObject instanceof MediaStream) video.srcObject.getTracks().forEach(track => track.stop());
    });
  });
}
