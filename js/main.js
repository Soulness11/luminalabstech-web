// ============================================================
// LUMINA LABSTECH — Main JS
// ============================================================

/* ── Theme toggle ─────────────────────────────────────────── */
const THEME_KEY = 'lumina-theme';

function getTheme() {
  return localStorage.getItem(THEME_KEY) ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem(THEME_KEY, t);
  document.querySelectorAll('.theme-icon-light').forEach(el => {
    el.style.display = t === 'dark' ? 'block' : 'none';
  });
  document.querySelectorAll('.theme-icon-dark').forEach(el => {
    el.style.display = t === 'light' ? 'block' : 'none';
  });
}
function toggleTheme() { applyTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

/* ── Mobile menu ──────────────────────────────────────────── */
function openMobileMenu() {
  document.getElementById('mobileMenu')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('mobileMenu')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Scroll reveal ────────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

/* ── Active nav link ──────────────────────────────────────── */
function setActiveNav() {
  const path = location.pathname;
  document.querySelectorAll('.nav__links a, .mobile-menu__links a').forEach(a => {
    a.classList.toggle('active',
      a.getAttribute('href') === path ||
      (path.includes(a.getAttribute('href')) && a.getAttribute('href') !== '/' && a.getAttribute('href') !== 'index.html')
    );
  });
}

/* ── Filter pills ─────────────────────────────────────────── */
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group || 'default';
      document.querySelectorAll(`.filter-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('[data-category]').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
        card.style.animation = show ? 'fadeIn .3s ease' : '';
      });
    });
  });
}

/* ── Search ───────────────────────────────────────────────── */
function initSearch(inputSelector, cardSelector) {
  const input = document.querySelector(inputSelector);
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll(cardSelector).forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = !q || text.includes(q) ? '' : 'none';
    });
  });
}

/* ── Render helpers ───────────────────────────────────────── */
function tagColor(tag) {
  const map = { teal: 'tag--teal', warm: 'tag--warm', purple: 'tag--purple', blue: 'tag--blue' };
  return map[tag] || 'tag--teal';
}

function avatarHtml(a) {
  return a.avatar
    ? `<img src="${a.avatar}" alt="${a.name}">`
    : a.initials;
}

function renderArticleCards(containerId, articles, limit) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const list = limit ? articles.slice(0, limit) : articles;
  el.innerHTML = list.map((a, i) => {
    if (a.featured) return `
      <article class="article-card article-card--featured reveal reveal-delay-${Math.min(i+1,3)}"
               data-category="${a.category}"
               onclick="location.href='${a.url}'">
        <div class="article-card__body">
          <div class="article-card__meta">
            <span class="tag ${tagColor(a.tag)}">${a.category}</span>
            <span class="article-card__read-time">${a.readTime}</span>
          </div>
          <h3 class="article-card__title">${a.title}</h3>
          <p class="article-card__excerpt">${a.excerpt}</p>
          <div class="article-card__footer">
            <div class="author-chip">
              <div class="author-chip__avatar">${avatarHtml(a.author)}</div>
              <span class="author-chip__name">${a.author.name}</span>
            </div>
            <span style="font-size:.8rem;color:var(--text-light)">${a.dateLabel}</span>
          </div>
        </div>
        <div class="article-card__sidebar">
          <div class="sidebar-label">Fragmento clave</div>
          <p class="sidebar-quote">${a.featuredQuote}</p>
        </div>
      </article>`;
    return `
      <article class="article-card reveal reveal-delay-${Math.min(i+1,3)}"
               data-category="${a.category}"
               onclick="location.href='${a.url}'">
        <div class="article-card__meta">
          <span class="tag ${tagColor(a.tag)}">${a.category}</span>
          <span class="article-card__read-time">${a.readTime}</span>
        </div>
        <h3 class="article-card__title">${a.title}</h3>
        <p class="article-card__excerpt">${a.excerpt}</p>
        <div class="article-card__footer">
          <div class="author-chip">
            <div class="author-chip__avatar">${avatarHtml(a.author)}</div>
            <span class="author-chip__name">${a.author.name}</span>
          </div>
          <div class="article-card__arrow">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      </article>`;
  }).join('');
  initReveal();
}

function renderCollabCards(containerId, collabs) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = collabs.map((c, i) => `
    <div class="collab-card reveal reveal-delay-${Math.min(i+1,3)}">
      <div class="collab-card__top">
        <div class="collab-avatar">${c.avatar ? `<img src="${c.avatar}" alt="${c.name}">` : c.initials}</div>
        ${c.badge === 'editor' ? `<span class="collab-badge collab-badge--editor">Editor</span>` : c.badge ? `<span class="collab-badge">${c.badge}</span>` : ''}
      </div>
      <div class="collab-card__name">${c.name}</div>
      <div class="collab-card__role">${c.role}</div>
      <div class="collab-card__inst">
        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        ${c.institution} · ${c.country}
      </div>
      <div class="collab-card__tags">
        ${c.fields.map(f => `<span class="tag tag--teal">${f}</span>`).join('')}
      </div>
      <div class="collab-card__footer">
        <div class="collab-card__count">
          <strong>${c.articles}</strong> artículos &nbsp;·&nbsp; <strong>${c.papers}</strong> publicaciones
        </div>
        <div class="social-links">
          ${c.email ? `<a href="mailto:${c.email}" class="social-link" title="Email">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>` : ''}
          ${c.github ? `<a href="https://github.com/${c.github}" target="_blank" class="social-link" title="GitHub">
            <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
          </a>` : ''}
          ${c.orcid ? `<a href="https://orcid.org/${c.orcid}" target="_blank" class="social-link" title="ORCID">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="9" y1="8" x2="15" y2="8"/></svg>
          </a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  initReveal();
}

function renderPaperList(containerId, papers) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const statusLabel = { review: 'En revisión', prep: 'En preparación', published: 'Publicado' };
  el.innerHTML = papers.map((p, i) => `
    <div class="paper-item reveal reveal-delay-${Math.min(i+1,3)}">
      <div class="paper-item__num">${String(i+1).padStart(2,'0')}</div>
      <div class="paper-item__body">
        <div class="paper-item__title">${p.title}</div>
        <div class="paper-item__meta">${p.authors} · <em>${p.journal}</em></div>
        <div class="paper-item__tags">
          ${p.tags.map(t => `<span class="tag tag--teal">${t}</span>`).join('')}
          <span class="tag ${p.status === 'published' ? 'tag--blue' : 'tag--warm'}">${statusLabel[p.status] || p.status}</span>
        </div>
      </div>
      <div class="paper-item__actions">
        <span class="paper-item__year">${p.year}</span>
        ${p.doi ? `<a href="https://doi.org/${p.doi}" target="_blank" class="btn-doi">
          <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          DOI
        </a>` : ''}
      </div>
    </div>
  `).join('');
  initReveal();
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(getTheme());
  setActiveNav();
  initReveal();
  initFilters();

  // Bind theme toggle
  document.querySelectorAll('[data-action="toggle-theme"]').forEach(el =>
    el.addEventListener('click', toggleTheme)
  );
  // Bind mobile menu
  document.querySelector('[data-action="open-menu"]')?.addEventListener('click', openMobileMenu);
  document.querySelector('[data-action="close-menu"]')?.addEventListener('click', closeMobileMenu);

  // Render dynamic content if data.js is loaded
  if (typeof DATA !== 'undefined') {
    renderArticleCards('articles-grid', DATA.articles, 5);
    renderArticleCards('articles-grid-full', DATA.articles);
    renderCollabCards('collabs-grid', DATA.collaborators);
    renderCollabCards('collabs-grid-home', DATA.collaborators.slice(0, 3));
    renderPaperList('papers-list', DATA.papers);
    initSearch('#searchArticles', '.article-card');
    initSearch('#searchPapers', '.paper-item');
    initSearch('#searchCollabs', '.collab-card');
  }
});
