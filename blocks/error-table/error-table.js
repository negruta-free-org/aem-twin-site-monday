export default function decorate(block) {
  const table = document.createElement('div');
  table.className = 'error-table-rows';

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    const [categoryCell, descriptionCell, fixCell] = cells;

    const category = (categoryCell?.textContent || '').trim();
    const categorySlug = category.toLowerCase().replace(/\s+/g, '_');

    const rowEl = document.createElement('div');
    rowEl.className = 'error-table-row';

    const categoryEl = document.createElement('div');
    categoryEl.className = 'error-table-cell error-table-category';
    const pill = document.createElement('span');
    pill.className = `error-table-pill error-table-pill-${categorySlug}`;
    pill.textContent = category;
    categoryEl.append(pill);

    const descriptionEl = document.createElement('div');
    descriptionEl.className = 'error-table-cell error-table-description';
    descriptionEl.textContent = descriptionCell?.textContent.trim() || '';

    const fixEl = document.createElement('div');
    fixEl.className = 'error-table-cell error-table-fix';
    fixEl.textContent = fixCell?.textContent.trim() || '';

    rowEl.append(categoryEl, descriptionEl, fixEl);
    table.append(rowEl);
  });

  block.replaceChildren(table);
}
