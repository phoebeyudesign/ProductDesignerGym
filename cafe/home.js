const tabs = [...document.querySelectorAll('[role="tab"]')];
const frames = {takeaway: document.getElementById('takeaway-view'), table: document.getElementById('table-view')};
const params = new URLSearchParams(location.search);
function selectMode(mode, updateURL = true) {
  if (!Object.hasOwn(frames, mode)) return;
  if (mode === 'table' && !frames.table.hasAttribute('src')) {
    const query = new URLSearchParams({home:'1'});
    if (params.has('spot')) query.set('spot', params.get('spot'));
    frames.table.src = `order/?${query}`;
  }
  document.body.dataset.mode = mode;
  for (const tab of tabs) {
    const selected = tab.dataset.mode === mode;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  }
  document.getElementById('mode-hint').textContent = mode === 'table' ? 'Settle in. We’ll bring it over.' : 'Made for your next stop.';
  document.title = `${mode === 'table' ? 'Order to table' : 'Take away'} · Product Designer Gym Cafe`;
  if (updateURL) {
    const url = new URL(location.href);
    url.searchParams.set('mode', mode);
    history.replaceState(null, '', url);
  }
  // Keep both orders mounted so switching doesn't discard a bag or selected spot.
  const inactive = mode === 'table' ? frames.takeaway : frames.table;
  if (inactive.hasAttribute('src')) inactive.contentWindow.postMessage({type:'cafe:pause'}, location.origin);
}
for (const tab of tabs) {
  tab.addEventListener('click', () => selectMode(tab.dataset.mode));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? tabs[0] : event.key === 'End' ? tabs.at(-1) : tabs[(tabs.indexOf(tab) + 1) % tabs.length];
    selectMode(next.dataset.mode);
    next.focus();
  });
}
window.addEventListener('message', event => {
  if (event.origin !== location.origin || !Object.values(frames).some(frame => frame.contentWindow === event.source)) return;
  if (event.data?.type === 'cafe:mode') selectMode(event.data.mode);
});
const initialMode = params.get('mode') === 'table' || params.has('spot') ? 'table' : 'takeaway';
selectMode(initialMode, false);
