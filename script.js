document.addEventListener('DOMContentLoaded', () => {
  const links = [...document.querySelectorAll('.sectionnav a')];
  const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const sections = links
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);

  if (!sections.length) return;

  let current = null;

  function setCurrent(id) {
    if (id === current) return;
    current = id;
    links.forEach(a => a.removeAttribute('aria-current'));
    const link = byId.get(id);
    if (link) link.setAttribute('aria-current', 'true');
    history.replaceState(null, '', '#' + id);
  }

  // Highlight whichever section occupies the upper third of the viewport.
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible.length) setCurrent(visible[0].target.id);
  }, { rootMargin: '-72px 0px -66% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
});
