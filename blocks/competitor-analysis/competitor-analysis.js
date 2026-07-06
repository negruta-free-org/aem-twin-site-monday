const STATUS_LABELS = {
  eds_has: 'EDS Has It',
  eds_partial: 'Partial',
  eds_gap: 'EDS Gap',
  eds_architectural: 'Architectural',
};

export default function decorate(block) {
  const rows = [...block.children];
  const wrapper = document.createElement('div');
  wrapper.className = 'competitor-analysis-rows';

  rows.forEach((row) => {
    const cells = [...row.children];
    const [featureCell, sourcesCell, statusCell, implCell, frictionCell, docCell] = cells;

    const status = (statusCell?.textContent || '').trim();
    const implemented = (implCell?.textContent || '').trim() === '✓';

    const rowEl = document.createElement('div');
    rowEl.className = 'competitor-analysis-row';

    const featureEl = document.createElement('div');
    featureEl.className = 'ca-feature';
    featureEl.textContent = featureCell?.textContent.trim() || '';

    const sourcesEl = document.createElement('div');
    sourcesEl.className = 'ca-sources';
    sourcesEl.textContent = sourcesCell?.textContent.trim() || '';

    const statusEl = document.createElement('div');
    statusEl.className = `ca-status ca-status-${status}`;
    statusEl.textContent = STATUS_LABELS[status] || status;

    const implEl = document.createElement('div');
    implEl.className = `ca-implemented ${implemented ? 'ca-pass' : 'ca-fail'}`;
    implEl.textContent = implemented ? '✓ Implemented' : '✗ Not implemented';

    const frictionEl = document.createElement('div');
    frictionEl.className = 'ca-friction';
    frictionEl.innerHTML = frictionCell?.innerHTML || '';

    const docEl = document.createElement('div');
    docEl.className = 'ca-doc';
    docEl.innerHTML = docCell?.innerHTML || '';

    rowEl.append(featureEl, sourcesEl, statusEl, implEl, frictionEl, docEl);
    wrapper.append(rowEl);
  });

  block.replaceChildren(wrapper);
}
