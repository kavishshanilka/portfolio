/**
 * Application Controller - Kavish Shanilka Personal Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderFocusChips();
  initProjectFilters();
  initModals();
  initCopyActions();
  initScrollSpy();
});

function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  const progressBar = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollY / docHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
      } else {
        drawer.classList.add('open');
      }
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }
}

function renderFocusChips() {
  const container = document.getElementById('focusChipsContainer');
  if (!container || !PORTFOLIO_DATA || !PORTFOLIO_DATA.profile.areasOfInterest) return;

  container.innerHTML = PORTFOLIO_DATA.profile.areasOfInterest.map(item => `
    <span class="focus-chip">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-bright)" stroke-width="2.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
      ${item}
    </span>
  `).join('');
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const catStr = card.getAttribute('data-category') || '';
        const cats = catStr.split(' ');
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initModals() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalDynamicContent');
  const closeBtn = document.querySelector('.modal-close-btn');

  function openProjectModal(projectId) {
    let project = null;
    if (PORTFOLIO_DATA.featuredProject.id === projectId) {
      project = PORTFOLIO_DATA.featuredProject;
    } else {
      project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    }

    if (!project || !modalBackdrop || !modalBody) return;

    modalBody.innerHTML = `
      <div class="modal-header-tag">${project.subtitle || project.categoryLabel || 'Engineering Case Study'}</div>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-tagline">${project.tagline || project.overview}</p>

      ${project.image ? `
      <div style="border-radius: var(--radius-md); overflow: hidden; margin: 20px 0; border: 1px solid var(--border-medium); max-height: 320px; box-shadow: var(--shadow-card);">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 320px; object-fit: cover; display: block;">
      </div>
      ` : ''}

      ${project.simulatorUrl ? `
      <div style="background: rgba(124, 58, 237, 0.12); border: 1px solid var(--border-bright); border-radius: var(--radius-md); padding: 18px 22px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
        <div>
          <div style="font-weight: 700; color: #FFFFFF; font-size: 1.05rem;">Live Web Simulator Available</div>
          <div style="font-size: 0.92rem; color: var(--text-secondary);">Interact with the real-time load profile scheduling engine in your browser</div>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="${project.simulatorUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            Launch Simulator ↗
          </a>
          <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            GitHub Repo ↗
          </a>
        </div>
      </div>
      ` : ''}

      <div class="modal-section">
        <div class="modal-section-title">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Problem Statement
        </div>
        <div class="modal-section-content">${project.modalDetails.problem}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Engineered Solution
        </div>
        <div class="modal-section-content">${project.modalDetails.solution}</div>
      </div>

      ${project.architectureDiagram ? `
      <div class="modal-section">
        <div class="modal-section-title">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
          System Architecture & Hardware Schematics
        </div>
        <div class="modal-diagram-container">
          <div class="modal-diagram-caption">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            ${project.architectureCaption || 'HARDWARE & SIGNAL FLOW SCHEMATIC'}
          </div>
          ${project.architectureDiagram}
        </div>
      </div>
      ` : ''}

      <div class="modal-section">
        <div class="modal-section-title">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
          Engineering Contributions & Concepts
        </div>
        <ul class="modal-contributions-list">
          ${project.modalDetails.engineeringContribution.map(item => `
            <li class="modal-contribution-item">
              <svg width="18" height="18" class="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
          </svg>
          Impact & Key Outcomes
        </div>
        <div class="modal-section-content">${project.modalDetails.impact}</div>
      </div>

      <div style="margin-top: 26px;">
        <div class="modal-section-title">Applied Technology Stack</div>
        <div class="tech-pills-row">
          ${(project.technologies || project.techStack).map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
      </div>

      ${project.linkedinUrl ? `
      <div style="margin-top: 26px; padding-top: 20px; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
        <div>
          <div style="font-weight: 700; color: var(--text-primary); font-size: 1.05rem;">Verified Demonstration Available</div>
          <div style="font-size: 0.92rem; color: var(--text-secondary);">View interactive video demo & technical discussion on LinkedIn</div>
        </div>
        <a href="${project.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn-linkedin-link" style="padding: 10px 18px; font-size: 0.95rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.5a1.63 1.63 0 1 0 0 3.25 1.63 1.63 0 0 0 0-3.25z"/></svg>
          Open LinkedIn Demonstration
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      </div>
      ` : ''}
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = trigger.getAttribute('data-open-modal');
      openProjectModal(id);
    });
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-project-id');
      if (id) openProjectModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function initCopyActions() {
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMessage');

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(() => {
        showToast(`Copied: ${textToCopy}`);
      });
    });
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}
