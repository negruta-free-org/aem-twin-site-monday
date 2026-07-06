export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'friction-map-grid';

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    const [stepCell, roleCell, statusCell, issueCountCell] = cells;

    const rowEl = document.createElement('div');
    rowEl.className = 'friction-map-row';

    const statusText = (statusCell?.textContent || '').trim();
    const isPass = statusText === '✓' || /^(true|yes|pass)$/i.test(statusText);
    rowEl.classList.add(isPass ? 'friction-map-pass' : 'friction-map-fail');

    const stepEl = document.createElement('div');
    stepEl.className = 'friction-map-cell friction-map-step';
    stepEl.textContent = stepCell?.textContent.trim() || '';

    const roleEl = document.createElement('div');
    roleEl.className = 'friction-map-cell friction-map-role';
    roleEl.textContent = roleCell?.textContent.trim() || '';

    const statusEl = document.createElement('div');
    statusEl.className = 'friction-map-cell friction-map-status';
    statusEl.textContent = isPass ? '✓' : '✗';

    const issueEl = document.createElement('div');
    issueEl.className = 'friction-map-cell friction-map-issues';
    issueEl.textContent = issueCountCell?.textContent.trim() || '0';

    rowEl.append(stepEl, roleEl, statusEl, issueEl);
    wrapper.append(rowEl);
  });

  block.replaceChildren(wrapper);
}
