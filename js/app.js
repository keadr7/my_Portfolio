/**
 * KAIVALYA VIJAY KUBADE - PORTFOLIO INTERACTIVE CONTROLLER
 */

// --- 1. Project Detailed Data Store for Modals ---
const projectDataStore = {
  'car-rental': {
    title: 'Online Car Rental System',
    category: 'Full-Stack Web & Database',
    badge: 'Web App & Inventory System',
    tech: ['PHP', 'HTML5', 'CSS3', 'MySQL', 'JavaScript', 'Bootstrap'],
    image: 'assets/images/car-rental.jpg',
    github: 'https://github.com/keadr7/car-rental-system',
    live: '#',
    summary: 'A robust, full-stack car rental booking and fleet management system built with PHP and MySQL.',
    description: 'Designed and implemented an end-to-end web portal enabling customers to search, compare, and reserve vehicles seamlessly. Built a comprehensive administrative control panel for real-time fleet inventory tracking, reservation approvals, customer billing, and vehicle maintenance status management.',
    problem: 'Traditional car rental operations suffered from manual paper-based logs, double-booking risks, and delayed availability verification.',
    solution: 'Engineered an automated relational database model with transactional safety in MySQL, dynamic vehicle status filters in PHP, and an intuitive responsive user interface.',
    metrics: [
      { label: 'Booking Friction', value: '-40%', sub: 'Optimized 3-step checkout' },
      { label: 'Fleet Capacity', value: '150+ Cars', sub: 'Multi-category tracking' },
      { label: 'DB Query Speed', value: '< 45ms', sub: 'Indexed relational tables' }
    ],
    architecture: [
      'Frontend: Responsive UI with HTML5, CSS3, and dynamic AJAX validation',
      'Backend Logic: PHP 8.x MVC structure with prepared PDO statements for SQL injection prevention',
      'Database: Normalized 3NF MySQL schema with foreign key constraints & cascading triggers'
    ]
  },

  'sales-dashboard': {
    title: 'Sales Performance Dashboard',
    category: 'Business Intelligence & Analytics',
    badge: 'Power BI & Python ETL',
    tech: ['Python', 'Pandas', 'Power BI', 'DAX', 'Matplotlib', 'Seaborn', 'Excel'],
    image: 'assets/images/sales-dashboard.jpg',
    github: 'https://github.com/keadr7/sales-performance-dashboard',
    live: '#',
    summary: 'An interactive executive Business Intelligence dashboard analyzing retail sales trends, profit margins, and predictive revenue.',
    description: 'Developed an end-to-end data analytics workflow ingesting multi-year retail transactions. Cleaned and transformed raw CSV/Excel dumps using Python Pandas, calculated custom DAX metrics in Power BI, and constructed interactive visual dashboards for executive decision-makers.',
    problem: 'Retail managers lacked consolidated visibility across regional sales territories, unable to quickly identify underperforming product lines or seasonal revenue peaks.',
    solution: 'Designed an interactive multi-page Power BI dashboard featuring dynamic slicers, regional revenue heatmaps, profit margin waterfalls, and 3-month rolling forecasts.',
    metrics: [
      { label: 'High-Margin Insights', value: '+22%', sub: 'Identified untapped SKU lines' },
      { label: 'Reporting Latency', value: 'Instant', sub: 'Replaced manual weekly Excel' },
      { label: 'Data Points Cleaned', value: '250k+', sub: 'Automated Pandas pipeline' }
    ],
    architecture: [
      'Data Ingestion: Python Pandas script for schema validation, null value imputation, and date parsing',
      'Data Modeling: Star-schema relationship model in Power BI with calendar & product dimension tables',
      'Advanced Metrics: DAX expressions for Year-over-Year (YoY), Month-over-Month (MoM), and dynamic target pacing'
    ]
  },

  'churn-prediction': {
    title: 'Customer Churn Prediction',
    category: 'Machine Learning & Predictive Modeling',
    badge: 'Python & Scikit-Learn',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'XGBoost'],
    image: 'assets/images/churn-prediction.jpg',
    github: 'https://github.com/keadr7/customer-churn-prediction',
    live: '#',
    summary: 'Supervised machine learning model identifying at-risk telecom subscribers before contract expiration.',
    description: 'Conducted rigorous exploratory data analysis (EDA), feature engineering, collinearity detection, and hyperparameter tuning across multiple ML classification algorithms (Logistic Regression, Random Forest, XGBoost) on customer demographic and usage data.',
    problem: 'High customer churn rate in the telecom sector resulting in annual recurring revenue (ARR) loss and elevated customer acquisition costs.',
    solution: 'Built a production-grade predictive classification pipeline that flags high-risk accounts 30 days prior to churn, outputting feature importance rankings for targeted retention campaigns.',
    metrics: [
      { label: 'Model Accuracy', value: '87.4%', sub: 'XGBoost with hyperopt' },
      { label: 'ROC-AUC Score', value: '0.91', sub: 'High discriminative power' },
      { label: 'Recall on Churners', value: '89.2%', sub: 'Minimized false negatives' }
    ],
    architecture: [
      'Feature Engineering: One-Hot Encoding for categorical tiers, MinMax scaling for tenure/charges, SMOTE for class imbalance',
      'Model Evaluation: 5-Fold Stratified Cross-Validation, precision-recall curve analysis, confusion matrix verification',
      'Interpretability: Extracted feature importance showing month-to-month contracts and fiber internet as primary churn drivers'
    ]
  },

  'covid-tableau': {
    title: 'COVID-19 Global Trends Analysis',
    category: 'Data Pipeline & Tableau',
    badge: 'Python, SQL & Tableau',
    tech: ['Python', 'SQL (MySQL)', 'Tableau', 'Pandas', 'Data Cleaning', 'ETL'],
    image: 'assets/images/covid-tableau.jpg',
    github: 'https://github.com/keadr7/covid-19-global-trends',
    live: '#',
    summary: 'End-to-end data pipeline querying and visualizing global COVID-19 epidemiological metrics and vaccination trends.',
    description: 'Ingested raw global timeseries data from Johns Hopkins & Our World in Data, executed data cleansing in Python, loaded transformed records into MySQL relational schemas, and engineered public Tableau dashboards with interactive map visualizations.',
    problem: 'Disparate reporting standards across international health organizations made it difficult to compare true infection velocities and vaccination efficacy across continents.',
    solution: 'Architected an automated SQL data warehouse view calculating 7-day rolling averages, case-fatality rates (CFR), and population-normalized vaccination percentages.',
    metrics: [
      { label: 'Records Ingested', value: '1.24M+', sub: 'Over 180 countries' },
      { label: 'Tableau Views', value: '4 Dashboards', sub: 'Interactive map & dual-axis' },
      { label: 'Data Freshness', value: 'Automated', sub: 'Python ETL script pipeline' }
    ],
    architecture: [
      'ETL Pipeline: Automated Python scripts fetching updated CSVs, handling schema drift, and writing to MySQL',
      'SQL Optimization: Window functions (ROW_NUMBER, LAG/LEAD, AVG OVER 7 ROWS) for trend smoothing',
      'Tableau Storytelling: Custom calculated parameters, geographic layer heatmaps, and dynamic date slider controls'
    ]
  }
};

// --- 2. Hero Canvas Particle / Wave Animation ---
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 35 : 70;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 245, 212, 0.45)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Connect close particles with subtle neon lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const alpha = (1 - dist / 130) * 0.18;
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

// --- 3. Dynamic Typewriter Effect for Hero ---
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const roles = [
    'Turning Raw Data into Strategic Decisions.',
    'Building Predictive Machine Learning Models.',
    'Crafting Interactive Power BI & Tableau Dashboards.',
    'Transforming Complex Databases into Actionable Insights.'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function typeLoop() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeLoop, typingSpeed);
  }

  typeLoop();
}

// --- 4. Project Modal Controller ---
function initProjectModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalBody = document.getElementById('projectModalBody');
  const closeBtn = document.getElementById('closeProjectModal');

  if (!modalBackdrop || !modalBody || !closeBtn) return;

  function openModal(projectId) {
    const data = projectDataStore[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge" style="margin-bottom: 0.75rem;">${data.category}</span>
        <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem;">${data.title}</h2>
        <p style="font-size: 1rem; color: var(--accent-cyan); font-family: 'JetBrains Mono', monospace;">${data.summary}</p>
      </div>

      <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 2rem; border: 1px solid var(--border-subtle); max-height: 320px;">
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <!-- Key Metrics Row -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        ${data.metrics.map(m => `
          <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1rem;">
            <div style="font-size: 0.75rem; color: var(--text-muted);">${m.label}</div>
            <div style="font-size: 1.4rem; font-weight: 800; color: var(--accent-cyan); font-family: 'Syne', sans-serif;">${m.value}</div>
            <div style="font-size: 0.7rem; color: var(--text-dim);">${m.sub}</div>
          </div>
        `).join('')}
      </div>

      <!-- Problem & Solution Breakdown -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="background: rgba(244, 63, 94, 0.05); border-left: 3px solid var(--accent-rose); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; padding: 1rem 1.25rem;">
          <h4 style="font-size: 0.9rem; color: var(--accent-rose); margin-bottom: 0.4rem;"><i class="fa-solid fa-triangle-exclamation"></i> The Problem</h4>
          <p style="font-size: 0.85rem; color: var(--text-main); line-height: 1.5;">${data.problem}</p>
        </div>
        <div style="background: rgba(0, 245, 212, 0.05); border-left: 3px solid var(--accent-cyan); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; padding: 1rem 1.25rem;">
          <h4 style="font-size: 0.9rem; color: var(--accent-cyan); margin-bottom: 0.4rem;"><i class="fa-solid fa-circle-check"></i> The Analytical Solution</h4>
          <p style="font-size: 0.85rem; color: var(--text-main); line-height: 1.5;">${data.solution}</p>
        </div>
      </div>

      <!-- Technical Architecture -->
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem;"><i class="fa-solid fa-diagram-project" style="color: var(--accent-blue); margin-right: 0.4rem;"></i> Technical Highlights & Implementation</h4>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; color: var(--text-muted); line-height: 1.7;">
          ${data.architecture.map(a => `<li style="margin-bottom: 0.4rem;">${a}</li>`).join('')}
        </ul>
      </div>

      <!-- Tech Stack Badges -->
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--text-muted);">Technologies Used</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
          <i class="fa-brands fa-github"></i> View GitHub Repository
        </a>
        <button class="btn btn-secondary" id="modalDismissBtn" style="flex: 0.6;">Close</button>
      </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Bind inner dismiss button
    const modalDismissBtn = document.getElementById('modalDismissBtn');
    if (modalDismissBtn) {
      modalDismissBtn.addEventListener('click', closeModal);
    }
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Attach to all project cards and triggers
  document.querySelectorAll('[data-project-trigger]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = el.getAttribute('data-project-trigger');
      openModal(projectId);
    });
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

// --- 5. Resume Modal Controller ---
function initResumeModal() {
  const modal = document.getElementById('resumeModal');
  const closeBtn = document.getElementById('closeResumeModal');
  const openButtons = document.querySelectorAll('[data-action="open-resume"]');

  if (!modal || !closeBtn) return;

  function openResume(e) {
    if (e) e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeResume() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => btn.addEventListener('click', openResume));
  closeBtn.addEventListener('click', closeResume);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeResume();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeResume();
  });

  // Print / Save as PDF
  const printBtn = document.getElementById('printResumeBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Copy Plain Text Resume
  const copyBtn = document.getElementById('copyResumeTextBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textResume = `KAIVALYA VIJAY KUBADE
Data Analyst & Business Intelligence Specialist
Email: kubadekaivalya@gmail.com | Phone: +91 96235 58839 | LinkedIn: https://www.linkedin.com/in/kaivalya-kubade-4769a7370/ | GitHub: https://github.com/keadr7 | Maharashtra, India

========================================
PROFESSIONAL SUMMARY
========================================
Results-driven and detail-oriented Data Analytics professional with a strong academic foundation in Information Technology (8.75 CGPA) and proven expertise in Python, SQL, Power BI, and Tableau. Demonstrated track record in architecting end-to-end business intelligence dashboards, automating ETL pipelines to eliminate 5+ weekly reporting hours, and training predictive machine learning models (87.4% accuracy). Passionate about turning complex raw data into actionable executive insights that optimize performance and drive measurable revenue growth.

========================================
TECHNICAL COMPETENCIES
========================================
- Programming & Querying: Python (Pandas, NumPy), SQL (MySQL), PHP, JavaScript (ES6+)
- BI & Data Visualization: Power BI (DAX), Tableau, Advanced Excel, Power Query, Interactive Dashboards
- Machine Learning & Analytics: Scikit-Learn, Predictive Modeling, Classification, Regression, EDA, Seaborn, Matplotlib
- Databases & Engineering: MySQL (3NF Relational Schemas), ETL Pipelines, Git/GitHub, Jupyter Notebooks

========================================
FEATURED PROJECTS
========================================
1. Sales Performance & Revenue Analytics Dashboard [Power BI, DAX, Python, Power Query]
- Architected an enterprise Power BI dashboard analyzing sales KPIs, regional profitability, product category margins, and customer retention metrics.
- Automated end-to-end data transformation with Python and Power Query ETL pipelines, saving 5+ hours weekly in manual reporting.
- Formulated advanced DAX measures uncovering a 22% high-margin expansion opportunity.

2. Customer Churn Prediction Engine [Python, Scikit-Learn, Pandas, Seaborn]
- Built and tuned a predictive machine learning pipeline evaluating churn probability across 7,000+ telecom subscriber profiles.
- Resolved class imbalances using SMOTE, elevating model recall to 89.0% and accuracy to 87.4%.
- Identified key churn determinants and delivered actionable customer retention strategies.

3. COVID-19 Global Healthcare Trends & Surveillance [SQL, Tableau, Python, ETL]
- Constructed an automated ETL ingestion pipeline loading 1.2M+ global health records into structured MySQL database tables.
- Wrote complex SQL window queries to smooth 7-day rolling case averages, infection trajectories, and mortality rates (CFR).
- Published 4 interactive Tableau visual storyboards with choropleth heatmaps and vaccination trackers.

4. Autonomous Vehicle Rental & Fleet Management System [PHP, MySQL, JavaScript, HTML5/CSS3]
- Engineered a full-stack vehicle rental web portal featuring automated reservation management, customer billing, and role-based admin controls.
- Normalized MySQL database architecture (3NF), decreasing reservation double-booking incidents by 40%.

========================================
EDUCATION
========================================
Bachelor of Science in Information Technology (B.Sc. IT) | CGPA: 8.75 / 10.0 (First Class with Distinction)
University Department of Information Technology (UDIT)
Key Coursework: Database Management Systems (DBMS), Applied Statistics, Data Warehousing & Mining, Data Structures & Algorithms, Software Engineering.
`;

      navigator.clipboard.writeText(textResume).then(() => {
        showToast('Resume plain text copied to clipboard!');
      }).catch(() => {
        showToast('Failed to copy. Please select and copy manually.');
      });
    });
  }
}

// --- 6. Project & Skill Filter Tabs ---
function initFilterTabs() {
  // Project Filtering
  const projectTabs = document.querySelectorAll('.project-tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projectTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => { card.style.display = 'none'; }, 250);
        }
      });
    });
  });

  // Skills Filtering
  const skillTabs = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      skillCards.forEach(card => {
        if (filter === 'all' || card.dataset.skillGroup === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

// --- 7. Theme Toggle Controller ---
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('kvk_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('kvk_theme', nextTheme);
    updateThemeIcon(nextTheme);

    // Notify chart system
    window.dispatchEvent(new Event('themeChanged'));
  });

  function updateThemeIcon(theme) {
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      if (theme === 'light') {
        icon.className = 'fa-solid fa-moon';
      } else {
        icon.className = 'fa-solid fa-sun';
      }
    }
  }
}

// --- 8. One-Click Copy Email ---
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'kubadekaivalya@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email copied to clipboard: ' + email);
      const originalHtml = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--accent-cyan)"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = originalHtml;
      }, 2500);
    });
  });
}

// --- 9. Toast Notification System ---
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color: var(--accent-cyan);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// --- 10. Interactive Contact Form ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim() || 'Portfolio Inquiry';
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    // Trigger user mailto client
    const mailtoUrl = `mailto:kubadekaivalya@gmail.com?subject=${encodeURIComponent(subject + ' - via Portfolio from ' + name)}&body=${encodeURIComponent(message + '\n\n---\nSender Email: ' + email)}`;
    window.location.href = mailtoUrl;

    showToast('Opening your email client... Thank you for reaching out!');
    form.reset();
  });
}

// --- 11. Scrollspy & Sticky Header ---
function initScrollspy() {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header background blur
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }

    // Active nav link spy
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// --- 12. Mobile Menu Navigation ---
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isOpen = navMenu.classList.contains('active');
    toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  // Close menu on nav item click
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

// --- Bootstrap Everything on DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initTypewriter();
  initProjectModal();
  initResumeModal();
  initFilterTabs();
  initThemeToggle();
  initCopyEmail();
  initContactForm();
  initScrollspy();
  initMobileMenu();
});
