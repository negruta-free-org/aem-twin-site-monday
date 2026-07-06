export default function decorate(block) {
  const rows = [...block.children];
  const [headerRow, ...bodyRows] = rows;

  const table = document.createElement('table');

  const thead = document.createElement('thead');
  const headTr = document.createElement('tr');
  [...headerRow.children].forEach((cell) => {
    const th = document.createElement('th');
    th.textContent = cell.textContent.trim();
    headTr.append(th);
  });
  thead.append(headTr);

  const tbody = document.createElement('tbody');
  bodyRows.forEach((row) => {
    const tr = document.createElement('tr');
    [...row.children].forEach((cell) => {
      const td = document.createElement('td');
      td.innerHTML = cell.innerHTML;
      tr.append(td);
    });
    tbody.append(tr);
  });

  table.append(thead, tbody);
  block.replaceChildren(table);
}
