function scoreClass(score) {
  if (score >= 90) return 'sc-great';
  if (score >= 50) return 'sc-ok';
  return 'sc-poor';
}

export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'score-card-grid';

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    const [metricCell, scoreCell, deltaCell] = cells;

    const score = parseFloat((scoreCell?.textContent || '').trim());
    const delta = (deltaCell?.textContent || '').trim();

    const cardEl = document.createElement('div');
    cardEl.className = 'score-card-item';

    const metricEl = document.createElement('div');
    metricEl.className = 'score-card-metric';
    metricEl.textContent = metricCell?.textContent.trim() || '';

    const scoreRow = document.createElement('div');
    scoreRow.className = 'score-card-score-row';

    const scoreEl = document.createElement('span');
    scoreEl.className = `score-card-score ${scoreClass(Number.isNaN(score) ? 0 : score)}`;
    scoreEl.textContent = Number.isNaN(score) ? scoreCell?.textContent.trim() || '' : String(score);

    const deltaEl = document.createElement('span');
    deltaEl.className = 'score-card-delta';
    deltaEl.textContent = delta;

    scoreRow.append(scoreEl, deltaEl);
    cardEl.append(metricEl, scoreRow);
    wrapper.append(cardEl);
  });

  block.replaceChildren(wrapper);
}
