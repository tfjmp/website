(() => {
  const initialize = () => {
    const list = document.querySelector('.publication-list');
    const form = list?.querySelector('.publication-filters');
    if (!form) return;
    const query = form.elements.namedItem('q');
    const year = form.elements.namedItem('year');
    const type = form.elements.namedItem('type');
    const normalize = value => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLocaleLowerCase();
    const entries = [...list.querySelectorAll('.publication-entry')].map(element => ({
      element,
      year: element.dataset.year,
      types: JSON.parse(element.dataset.types || '[]') || [],
      text: normalize(`${element.textContent} ${element.dataset.search || ''}`)
    }));
    const groups = [...list.querySelectorAll('.publication-year')];
    const apply = (save = true) => {
      const words = normalize(query.value.trim()).split(/\s+/).filter(Boolean);
      let count = 0;
      for (const entry of entries) {
        const visible = (!year.value || entry.year === year.value)
          && (!type.value || entry.types.includes(type.value))
          && words.every(word => entry.text.includes(word));
        entry.element.hidden = !visible;
        if (visible) count++;
      }
      for (const group of groups) {
        group.hidden = !group.querySelector('.publication-entry:not([hidden])');
        for (const link of document.querySelectorAll(`a[href="#publications-${group.dataset.year}"]`)) link.hidden = group.hidden;
      }
      list.querySelector('.publication-empty').hidden = count !== 0;
      form.querySelector('.publication-count').textContent = `${count} of ${entries.length} publications`;
      if (save) {
        const url = new URL(window.location.href);
        for (const field of [query, year, type]) {
          if (field.value.trim()) url.searchParams.set(field.name, field.value.trim());
          else url.searchParams.delete(field.name);
        }
        window.history.replaceState(window.history.state, '', url);
      }
    };
    const restore = () => {
      const params = new URLSearchParams(window.location.search);
      for (const field of [query, year, type]) field.value = params.get(field.name) || '';
      apply(false);
    };
    form.addEventListener('input', () => apply());
    form.addEventListener('change', () => apply());
    form.addEventListener('submit', event => { event.preventDefault(); apply(); });
    form.addEventListener('reset', event => {
      event.preventDefault();
      for (const field of [query, year, type]) field.value = '';
      apply();
      query.focus({ preventScroll: true });
    });
    window.addEventListener('popstate', restore);
    restore();
    form.hidden = false;
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
})();
