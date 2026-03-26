// ===== MEDICIJNEN DATABASE (fase 1: 30-50 medicijnen) =====
const medicijnen = [
  // Pijnstillers
  { naam: 'Paracetamol', merken: 'Dafalgan, Perdolan, Panadol', cat: 'Pijnstiller', url: 'medicijnen/paracetamol.html' },
  { naam: 'Ibuprofen', merken: 'Brufen, Advil, Nurofen', cat: 'Pijnstiller / NSAID', url: 'medicijnen/ibuprofen.html' },
  { naam: 'Naproxen', merken: 'Aleve, Naprosyn', cat: 'NSAID', url: 'medicijnen/naproxen.html' },
  { naam: 'Aspirine', merken: 'Cardioaspirine, Aspégic', cat: 'Pijnstiller / Bloedverdunner', url: 'medicijnen/aspirine.html' },
  { naam: 'Diclofenac', merken: 'Voltaren, Cataflam', cat: 'NSAID', url: 'medicijnen/diclofenac.html' },
  { naam: 'Codeïne', merken: 'Dafalgan Codeïne', cat: 'Opiaat / Pijnstiller', url: 'medicijnen/codeine.html' },

  // Antibiotica
  { naam: 'Amoxicilline', merken: 'Clamoxyl, Flemoxin', cat: 'Antibioticum', url: 'medicijnen/amoxicilline.html' },
  { naam: 'Azitromycine', merken: 'Zithromax', cat: 'Antibioticum', url: 'medicijnen/azitromycine.html' },
  { naam: 'Doxycycline', merken: 'Vibramycin, Doxylin', cat: 'Antibioticum', url: 'medicijnen/doxycycline.html' },
  { naam: 'Flucloxacilline', merken: 'Staphcillin', cat: 'Antibioticum', url: 'medicijnen/flucloxacilline.html' },
  { naam: 'Ciprofloxacine', merken: 'Ciproxine', cat: 'Antibioticum', url: 'medicijnen/ciprofloxacine.html' },
  { naam: 'Trimethoprim', merken: 'Monotrim', cat: 'Antibioticum', url: 'medicijnen/trimethoprim.html' },

  // Allergie
  { naam: 'Cetirizine', merken: 'Zyrtec, Reactine', cat: 'Antihistaminicum', url: 'medicijnen/cetirizine.html' },
  { naam: 'Loratadine', merken: 'Claritine', cat: 'Antihistaminicum', url: 'medicijnen/loratadine.html' },
  { naam: 'Fexofenadine', merken: 'Telfast', cat: 'Antihistaminicum', url: 'medicijnen/fexofenadine.html' },
  { naam: 'Desloratadine', merken: 'Aerius', cat: 'Antihistaminicum', url: 'medicijnen/desloratadine.html' },

  // Maag & Darm
  { naam: 'Omeprazol', merken: 'Losec', cat: 'Maagzuurremmer', url: 'medicijnen/omeprazol.html' },
  { naam: 'Pantoprazol', merken: 'Pantomed, Controloc', cat: 'Maagzuurremmer', url: 'medicijnen/pantoprazol.html' },
  { naam: 'Esomeprazol', merken: 'Nexium', cat: 'Maagzuurremmer', url: 'medicijnen/esomeprazol.html' },
  { naam: 'Domperidon', merken: 'Motilium', cat: 'Maagmiddel', url: 'medicijnen/domperidon.html' },
  { naam: 'Metoclopramide', merken: 'Primperan', cat: 'Anti-misselijkheid', url: 'medicijnen/metoclopramide.html' },
  { naam: 'Loperamide', merken: 'Imodium', cat: 'Anti-diarree', url: 'medicijnen/loperamide.html' },

  // Hart & Bloedvaten
  { naam: 'Metoprolol', merken: 'Selokeen, Lopresor', cat: 'Bètablokker', url: 'medicijnen/metoprolol.html' },
  { naam: 'Atenolol', merken: 'Tenormin', cat: 'Bètablokker', url: 'medicijnen/atenolol.html' },
  { naam: 'Amlodipine', merken: 'Norvasc, Amlor', cat: 'Calciumantagonist', url: 'medicijnen/amlodipine.html' },
  { naam: 'Lisinopril', merken: 'Zestril, Prinivil', cat: 'ACE-remmer', url: 'medicijnen/lisinopril.html' },
  { naam: 'Atorvastatine', merken: 'Lipitor', cat: 'Cholesterolverlager', url: 'medicijnen/atorvastatine.html' },

  // Luchtwegen
  { naam: 'Salbutamol', merken: 'Ventolin', cat: 'Luchtwegverwijder', url: 'medicijnen/salbutamol.html' },
  { naam: 'Fluticason', merken: 'Flixotide, Flonase', cat: 'Corticosteroïd inhalatie', url: 'medicijnen/fluticason.html' },
  { naam: 'Montelukast', merken: 'Singulair', cat: 'Astmamiddel', url: 'medicijnen/montelukast.html' },

  // Huid
  { naam: 'Hydrocortison', merken: 'Cortisone crème', cat: 'Corticosteroïd huid', url: 'medicijnen/hydrocortison.html' },
  { naam: 'Clotrimazol', merken: 'Canesten', cat: 'Schimmelwerend', url: 'medicijnen/clotrimazol.html' },
];

// ===== ZOEKFUNCTIE =====
const input       = document.getElementById('searchInput');
const suggestions = document.getElementById('searchSuggestions');

if (input) {
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { closeSuggestions(); return; }

    const matches = medicijnen.filter(m =>
      m.naam.toLowerCase().includes(q) ||
      m.merken.toLowerCase().includes(q) ||
      m.cat.toLowerCase().includes(q)
    ).slice(0, 6);

    if (!matches.length) { closeSuggestions(); return; }

    suggestions.innerHTML = matches.map(m => `
      <li><a href="${m.url}">
        <strong>${highlight(m.naam, q)}</strong>
        <small style="color:#94a3b8;margin-left:6px">${m.merken}</small>
      </a></li>
    `).join('');
    suggestions.classList.add('open');
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSuggestions();
    if (e.key === 'Enter')  doSearch();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) closeSuggestions();
  });
}

function highlight(text, query) {
  const re = new RegExp(`(${query})`, 'gi');
  return text.replace(re, '<mark style="background:#dcfce7;border-radius:2px">$1</mark>');
}

function closeSuggestions() {
  suggestions.classList.remove('open');
  suggestions.innerHTML = '';
}

function doSearch() {
  const q = input.value.trim().toLowerCase();
  if (!q) return;
  const match = medicijnen.find(m => m.naam.toLowerCase() === q);
  if (match) {
    window.location.href = match.url;
  } else {
    window.location.href = `medicijnen/?zoek=${encodeURIComponent(q)}`;
  }
}

// ===== HAMBURGER MENU =====
(function () {
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('mainNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  });

  // Sluit bij klikken op een link
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Sluit bij klikken buiten de header
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-header')) {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ===== TOON MEER (mobiel medicijnen-grid) =====
(function () {
  const grid = document.getElementById('medGrid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.med-card'));
  const LIMIT = 6;
  if (cards.length <= LIMIT) return;

  cards.slice(LIMIT).forEach(c => c.classList.add('is-hidden'));

  const btn = document.createElement('button');
  btn.className = 'med-show-more';
  btn.textContent = `Toon alle ${cards.length} medicijnen`;

  btn.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('is-hidden'));
    btn.remove();
  });

  grid.insertAdjacentElement('afterend', btn);
})();

// ── Scroll-spy for medicine page section tabs ────────────────────────────────────────────────────
(function () {
  const tabs = document.querySelectorAll('.med-tab');
  if (!tabs.length) return;

  const sections = Array.from(tabs)
    .map(t => document.querySelector(t.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          tabs.forEach(t => {
            t.classList.toggle('active', t.getAttribute('href') === id);
          });
        }
      });
    },
    { rootMargin: '-20% 0px -75% 0px', threshold: 0 }
  );

  sections.forEach(s => observer.observe(s));

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(tab.getAttribute('href'));
      if (target) {
        const offset = 57 + 46; // header + tabs bar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();
