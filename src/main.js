import { SERVICES, CATEGORIES, searchServices, filterByCategory } from './services.js';
import { t, I18N } from './i18n.js';

// ── State ─────────────────────────────────────────────────────────────────────
let lang = 'en';
let theme = 'dark';
let activeCategory = 'all';
let searchQuery = '';
let expandedId = null;

// ── DOM references ────────────────────────────────────────────────────────────
const searchInput    = document.getElementById('search');
const serviceCount   = document.getElementById('service-count');
const categoryNav    = document.getElementById('category-nav');
const resultsSection = document.getElementById('results-section');
const noResults      = document.getElementById('no-results');
const langToggle     = document.getElementById('lang-toggle');
const themeToggle    = document.getElementById('theme-toggle');
const siteTitle      = document.getElementById('site-title');
const siteSubtitle   = document.getElementById('site-subtitle');

// ── Category color map ────────────────────────────────────────────────────────
const CATEGORY_ICONS = {
  compute:    '⚙️',
  storage:    '🗄️',
  database:   '🗃️',
  networking: '🌐',
  security:   '🔒',
  analytics:  '📊',
  ml:         '🤖',
  devops:     '🔧',
  messaging:  '📨',
  serverless: '⚡',
};

// ── Rendering helpers ─────────────────────────────────────────────────────────

function getCategoryName(catId) {
  const cat = CATEGORIES.find((c) => c.id === catId);
  return cat ? cat.name[lang] : catId;
}

function renderCategoryNav() {
  const allBtn = `
    <button
      class="cat-chip${activeCategory === 'all' ? ' active' : ''}"
      data-category="all"
      aria-pressed="${activeCategory === 'all'}"
    >${t(lang, 'all')}</button>`;

  const chips = CATEGORIES.map((cat) => {
    const icon = CATEGORY_ICONS[cat.id] || '';
    return `
      <button
        class="cat-chip${activeCategory === cat.id ? ' active' : ''}"
        data-category="${cat.id}"
        aria-pressed="${activeCategory === cat.id}"
      >${icon} ${cat.name[lang]}</button>`;
  });

  categoryNav.innerHTML = allBtn + chips.join('');
}

function renderServiceCard(service, expanded) {
  const desc = service.description[lang];
  const useCases = service.useCases[lang];
  const relatedHtml = service.related && service.related.length
    ? `<div class="card-related">
        <span class="meta-label">${t(lang, 'related')}: </span>
        ${service.related.map((r) => {
          const rel = SERVICES.find((s) => s.id === r);
          return rel
            ? `<span class="related-tag" data-id="${r}">${rel.abbrev}</span>`
            : '';
        }).join('')}
       </div>`
    : '';

  const useCasesHtml = useCases && useCases.length
    ? `<div class="card-use-cases">
        <span class="meta-label">${t(lang, 'useCases')}: </span>
        <span class="use-cases-list">${useCases.join(', ')}</span>
       </div>`
    : '';

  const launchedHtml = service.launched
    ? `<span class="card-launched">${t(lang, 'launched')}: ${service.launched}</span>`
    : '';

  return `
    <article
      class="service-card${expanded ? ' expanded' : ''}"
      data-id="${service.id}"
      tabindex="0"
      role="button"
      aria-expanded="${expanded}"
      aria-label="${service.name}"
    >
      <div class="card-header">
        <div class="card-abbrev-wrap">
          <span class="card-abbrev">${service.abbrev}</span>
          <span class="card-category-badge">${CATEGORY_ICONS[service.category] || ''} ${getCategoryName(service.category)}</span>
        </div>
        ${launchedHtml}
      </div>
      <h3 class="card-name">${service.name}</h3>
      <p class="card-desc">${desc}</p>
      <div class="card-details${expanded ? '' : ' hidden'}">
        ${useCasesHtml}
        ${relatedHtml}
      </div>
      <button class="card-expand-btn" aria-label="${expanded ? t(lang, 'closeCard') : '詳細を表示'}" tabindex="-1">
        ${expanded ? '▲' : '▼'}
      </button>
    </article>`;
}

function getFilteredServices() {
  let results = activeCategory === 'all'
    ? SERVICES
    : filterByCategory(activeCategory);

  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    results = results.filter((s) => {
      const fields = [
        s.name.toLowerCase(),
        s.abbrev.toLowerCase(),
        s.description[lang].toLowerCase(),
        ...(s.useCases[lang] || []).map((u) => u.toLowerCase()),
        s.category.toLowerCase(),
      ];
      return fields.some((f) => f.includes(q));
    });
  }

  return results;
}

function renderResults() {
  const filtered = getFilteredServices();
  serviceCount.textContent = t(lang, 'serviceCount', filtered.length);

  if (filtered.length === 0) {
    noResults.hidden = false;
    resultsSection.innerHTML = '';
    document.getElementById('no-results-title').textContent = t(lang, 'noResults');
    document.getElementById('no-results-hint').textContent  = t(lang, 'noResultsHint');
    return;
  }

  noResults.hidden = true;
  resultsSection.innerHTML = `
    <div class="cards-grid">
      ${filtered.map((s) => renderServiceCard(s, s.id === expandedId)).join('')}
    </div>`;

  // Attach card click handlers
  resultsSection.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('click', handleCardClick);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardClick({ currentTarget: card });
      }
    });
  });

  // Attach related tag click handlers
  resultsSection.querySelectorAll('.related-tag').forEach((tag) => {
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = tag.dataset.id;
      const service = SERVICES.find((s) => s.id === id);
      if (service) {
        searchInput.value = service.abbrev;
        searchQuery = service.abbrev;
        activeCategory = 'all';
        expandedId = id;
        renderCategoryNav();
        renderResults();
      }
    });
  });
}

function updateStaticText() {
  siteTitle.textContent      = t(lang, 'title');
  siteSubtitle.textContent   = t(lang, 'subtitle');
  searchInput.placeholder    = t(lang, 'searchPlaceholder');
  searchInput.setAttribute('aria-label', t(lang, 'searchLabel'));
  langToggle.textContent     = t(lang, 'langToggle');
  themeToggle.textContent    = theme === 'dark' ? t(lang, 'themeLight') : t(lang, 'themeDark');
  document.getElementById('no-results-title').textContent = t(lang, 'noResults');
  document.getElementById('no-results-hint').textContent  = t(lang, 'noResultsHint');
  document.documentElement.lang = lang;
}

// ── Event handlers ────────────────────────────────────────────────────────────

function handleCardClick(e) {
  const card = e.currentTarget;
  const id = card.dataset.id;
  expandedId = expandedId === id ? null : id;
  renderResults();
  // Scroll expanded card into view
  if (expandedId) {
    setTimeout(() => {
      const el = document.querySelector(`.service-card[data-id="${expandedId}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  }
}

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value;
  expandedId  = null;
  renderResults();
});

categoryNav.addEventListener('click', (e) => {
  const chip = e.target.closest('.cat-chip');
  if (!chip) return;
  activeCategory = chip.dataset.category;
  expandedId = null;
  renderCategoryNav();
  renderResults();
});

langToggle.addEventListener('click', () => {
  lang = lang === 'en' ? 'ja' : 'en';
  updateStaticText();
  renderCategoryNav();
  renderResults();
});

themeToggle.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? t(lang, 'themeLight') : t(lang, 'themeDark');
  localStorage.setItem('theme', theme);
});

// ── Init ──────────────────────────────────────────────────────────────────────

function init() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme = savedTheme;
    document.documentElement.setAttribute('data-theme', theme);
  }
  updateStaticText();
  renderCategoryNav();
  renderResults();
}

init();
