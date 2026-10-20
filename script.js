tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tavern-timber": "#2d1b10",
        "tavern-oak": "#3e2716",
        "tavern-rust": "#a44a22",
        "tavern-amber": "#c2641a",
        "tavern-copper": "#b45309",
        "tavern-brass": "#d97706",
        "parchment": "#fbf6ee",
        "parchment-warm": "#f4ede1",
        "parchment-card": "#fffbf5",
        "parchment-dark": "#ede3d2",
        "parchment-border": "#dfceb7",
        "slate-blackboard": "#1e2221",
        "primary": "#451a03",
        "primary-container": "#78350f",
        "secondary": "#a44a22",
        "on-surface": "#2d1b10",
        "on-surface-variant": "#5a4536"
      },
      fontFamily: {
        "tavern-display": ["Playfair Display", "Vollkorn", "serif"],
        "tavern-title": ["Rokkitt", "Vollkorn", "serif"],
        "headline-lg": ["Vollkorn", "serif"],
        "headline-md": ["Vollkorn", "serif"],
        "body-md": ["Work Sans", "sans-serif"],
        "body-serif": ["Vollkorn", "Georgia", "serif"]
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('#mobile-menu-toggle');
  const mobileNavigation = document.querySelector('#mobile-navigation');

  if (menuToggle && mobileNavigation) {
    const setMenuOpen = open => {
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      menuToggle.querySelector('.material-symbols-outlined').textContent = open ? 'close' : 'menu';
      mobileNavigation.classList.toggle('hidden', !open);
    };

    menuToggle.addEventListener('click', () => {
      setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    mobileNavigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });

    window.matchMedia('(min-width: 1024px)').addEventListener('change', event => {
      if (event.matches) setMenuOpen(false);
    });
  }

  const reveals = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }
});
