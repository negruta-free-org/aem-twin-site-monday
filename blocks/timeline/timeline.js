export default function decorate(block) {
  const rows = [...block.children];
  const ol = document.createElement('ol');
  ol.className = 'tl-list';

  rows.forEach((row) => {
    const [status, label, detail] = [...row.children].map((c) => c.textContent.trim());
    const isPass = status === '✓' || /^(true|yes|pass)$/i.test(status);
    const li = document.createElement('li');
    li.className = `tl-item ${isPass ? 'tl-pass' : 'tl-fail'}`;
    li.innerHTML = `<span class="tl-dot"></span><span class="tl-label">${label}</span><span class="tl-detail">${detail}</span>`;
    ol.append(li);
  });

  block.replaceChildren(ol);
}
