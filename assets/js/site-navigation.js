(() => {
  const initialize = () => {
    const button = document.getElementById('site-menu-toggle');
    const menu = document.getElementById('nav-menu');
    if (!button || !menu) return;
    const desktop = window.matchMedia('(min-width: 1024px)');
    const legacyToggle = document.getElementById('nav-toggle');
    const sidebarOverlay = document.querySelector('.hb-sidebar-mobile-menu');
    const setOpen = (open, returnFocus = false, syncSidebar = true) => {
      const changed = button.getAttribute('aria-expanded') !== String(open);
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      if (changed && sidebarOverlay && syncSidebar) legacyToggle?.click();
      if (returnFocus) button.focus();
    };
    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    sidebarOverlay?.addEventListener('click', () => setOpen(false, true, false));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        setOpen(false, true);
      }
    });
    menu.addEventListener('click', event => {
      if (event.target.closest('a') && !desktop.matches) setOpen(false);
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('#site-header') && button.getAttribute('aria-expanded') === 'true') setOpen(false);
    });
    desktop.addEventListener('change', () => {
      const focusInside = menu.contains(document.activeElement);
      setOpen(false, !desktop.matches && focusInside);
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
})();

(() => {
  const initialize = () => {
    const header = document.querySelector('body > .page-header');
    const contents = document.querySelector('.local-contents');
    const details = contents?.querySelector('details');
    const dropdownHeight = () => {
      if (details?.open) {
        const available = window.innerHeight - details.querySelector('summary').getBoundingClientRect().bottom - 16;
        contents.style.setProperty('--contents-available-height', `${Math.max(0, available)}px`);
      }
    };
    const offsets = () => {
      const height = header?.getBoundingClientRect().height || 0;
      const contentsHeight = contents?.getBoundingClientRect().height || 0;
      document.documentElement.style.setProperty('--site-contents-height', `${contentsHeight}px`);
      document.documentElement.style.setProperty('--site-header-height', `${height}px`);
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      document.documentElement.style.scrollPaddingTop = `${height}px`;
      dropdownHeight();
    };
    if (details) {
      details.addEventListener('toggle', dropdownHeight);
      window.addEventListener('resize', dropdownHeight);
      window.addEventListener('scroll', dropdownHeight, { passive: true });
      contents.addEventListener('click', event => {
        if (event.target.closest('a')) details.open = false;
      });
      contents.addEventListener('keydown', event => {
        if (event.key === 'Escape' && details.open) {
          details.open = false;
          details.querySelector('summary').focus();
        }
      });
      document.addEventListener('click', event => {
        if (!contents.contains(event.target)) details.open = false;
      });
      contents.addEventListener('focusout', event => {
        if (!contents.contains(event.relatedTarget)) details.open = false;
      });
    }
    const observer = new ResizeObserver(offsets);
    if (header) observer.observe(header);
    if (contents) observer.observe(contents);
    offsets();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
})();
