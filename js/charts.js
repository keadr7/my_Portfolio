/**
 * KAIVALYA VIJAY KUBADE - PORTFOLIO INTERACTIVE CHARTS
 * Powered by Chart.js (v4.4.1)
 */

let heroMiniChart = null;
let playgroundChart = null;

// Color helpers based on theme
function getChartColors() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  return {
    cyan: '#00f5d4',
    cyanTrans: 'rgba(0, 245, 212, 0.2)',
    blue: '#38bdf8',
    blueTrans: 'rgba(56, 189, 248, 0.2)',
    indigo: '#818cf8',
    indigoTrans: 'rgba(129, 140, 248, 0.2)',
    purple: '#c084fc',
    emerald: '#10b981',
    emeraldTrans: 'rgba(16, 185, 129, 0.2)',
    rose: '#f43f5e',
    text: isLight ? '#475569' : '#94a3b8',
    grid: isLight ? 'rgba(15, 23, 42, 0.06)' : 'rgba(255, 255, 255, 0.06)',
    cardBg: isLight ? '#ffffff' : '#0f172a'
  };
}

// 1. Initialize Hero Mini Sparkline Chart
function initHeroMiniChart() {
  const ctx = document.getElementById('heroMiniSparkline');
  if (!ctx) return;

  const colors = getChartColors();
  
  if (heroMiniChart) {
    heroMiniChart.destroy();
  }

  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 140);
  gradient.addColorStop(0, 'rgba(0, 245, 212, 0.4)');
  gradient.addColorStop(1, 'rgba(0, 245, 212, 0.0)');

  heroMiniChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        label: 'Accuracy %',
        data: [78, 82, 80, 86, 91, 89, 94, 98.4],
        borderColor: colors.cyan,
        borderWidth: 3,
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: colors.cyan,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          titleColor: '#f8fafc',
          bodyColor: '#38bdf8',
          borderColor: 'rgba(0, 245, 212, 0.3)',
          borderWidth: 1,
          padding: 8,
          displayColors: false,
          callbacks: {
            label: (context) => `Metric Score: ${context.parsed.y}%`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: colors.text, font: { size: 10 } }
        },
        y: {
          min: 70,
          max: 100,
          grid: { color: colors.grid },
          ticks: { color: colors.text, font: { size: 10 } }
        }
      }
    }
  });
}

// 2. Playground Chart Scenarios Data
const scenarios = {
  sales: {
    type: 'bar',
    metrics: [
      { title: 'Total Revenue', value: '$2.48M', change: '+18.4% YoY' },
      { title: 'Avg Order Value', value: '$164.20', change: '+5.2% MoM' },
      { title: 'Sales Conversion', value: '3.82%', change: '+0.6% pts' },
      { title: 'Top Category', value: 'Electronics', change: '42% Share' }
    ],
    getData: (colors) => ({
      labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 (Proj)'],
      datasets: [
        {
          type: 'bar',
          label: 'Actual Revenue ($k)',
          data: [420, 490, 560, 680, 590, 710, 780],
          backgroundColor: colors.cyan,
          borderRadius: 6,
          order: 2
        },
        {
          type: 'line',
          label: 'Target Goal ($k)',
          data: [400, 450, 520, 600, 570, 680, 750],
          borderColor: colors.purple,
          borderWidth: 3,
          pointBackgroundColor: colors.purple,
          tension: 0.3,
          fill: false,
          order: 1
        }
      ]
    }),
    options: (colors) => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: colors.text, font: { family: 'Plus Jakarta Sans', size: 12 } }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#fff',
          bodyColor: colors.blue,
          borderColor: colors.cyan,
          borderWidth: 1,
          padding: 12
        }
      },
      scales: {
        x: {
          grid: { color: colors.grid },
          ticks: { color: colors.text }
        },
        y: {
          grid: { color: colors.grid },
          ticks: {
            color: colors.text,
            callback: (val) => `$${val}k`
          }
        }
      }
    })
  },

  churn: {
    type: 'bar',
    metrics: [
      { title: 'Model Accuracy', value: '87.4%', change: 'XGBoost v2.1' },
      { title: 'ROC-AUC Score', value: '0.912', change: '+0.06 vs Base' },
      { title: 'Precision / Recall', value: '85% / 89%', change: 'Optimized Threshold' },
      { title: 'Key Risk Factor', value: 'Contract Type', change: 'Weight: 0.28' }
    ],
    getData: (colors) => ({
      labels: [
        'Contract: Month-to-Month',
        'Monthly Charges > $70',
        'Tenure < 12 Months',
        'Tech Support = No',
        'Fiber Optic Internet',
        'Paperless Billing = Yes',
        'Streaming Services'
      ],
      datasets: [{
        label: 'Feature Importance Weight',
        data: [0.284, 0.212, 0.165, 0.158, 0.104, 0.082, 0.068],
        backgroundColor: [
          '#f43f5e',
          '#fb923c',
          '#fbbf24',
          '#38bdf8',
          '#818cf8',
          '#a78bfa',
          '#00f5d4'
        ],
        borderRadius: 6
      }]
    }),
    options: (colors) => ({
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#fff',
          bodyColor: colors.cyan,
          borderColor: colors.cyan,
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: (ctx) => `Importance Score: ${(ctx.parsed.x * 100).toFixed(1)}%`
          }
        }
      },
      scales: {
        x: {
          grid: { color: colors.grid },
          ticks: {
            color: colors.text,
            callback: (val) => `${(val * 100).toFixed(0)}%`
          }
        },
        y: {
          grid: { display: false },
          ticks: { color: colors.text, font: { size: 11 } }
        }
      }
    })
  },

  covid: {
    type: 'line',
    metrics: [
      { title: 'Total Records Processed', value: '1.24M+', change: '180+ Countries' },
      { title: 'Global Vax Coverage', value: '68.2%', change: '5.1B Doses' },
      { title: 'Peak Case Velocity', value: '72.4k/day', change: 'Normalized 7-Day MA' },
      { title: 'CFR Reduction', value: '-64.5%', change: 'Post-Vaccine Impact' }
    ],
    getData: (colors) => ({
      labels: ['Jan 20', 'Jul 20', 'Jan 21', 'Jul 21', 'Jan 22', 'Jul 22', 'Dec 22'],
      datasets: [
        {
          label: 'Daily Cases Index (7-Day Avg)',
          data: [15, 38, 62, 85, 45, 32, 21],
          borderColor: colors.rose,
          backgroundColor: 'rgba(244, 63, 94, 0.1)',
          fill: true,
          tension: 0.35,
          yAxisID: 'y'
        },
        {
          label: 'Global Vaccination Rate (%)',
          data: [0, 0, 8, 34, 58, 65, 68.2],
          borderColor: colors.cyan,
          backgroundColor: 'rgba(0, 245, 212, 0.1)',
          fill: true,
          tension: 0.35,
          yAxisID: 'y1'
        }
      ]
    }),
    options: (colors) => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          labels: { color: colors.text, font: { family: 'Plus Jakarta Sans', size: 12 } }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#fff',
          bodyColor: colors.cyan,
          borderColor: colors.cyan,
          borderWidth: 1,
          padding: 12
        }
      },
      scales: {
        x: {
          grid: { color: colors.grid },
          ticks: { color: colors.text }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          grid: { color: colors.grid },
          ticks: {
            color: colors.rose,
            callback: (v) => `${v}k`
          },
          title: { display: true, text: 'Cases (Index)', color: colors.rose }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: {
            color: colors.cyan,
            callback: (v) => `${v}%`
          },
          title: { display: true, text: 'Vaccination %', color: colors.cyan }
        }
      }
    })
  }
};

// 3. Switch Playground Scenario
function setPlaygroundScenario(key) {
  const scenario = scenarios[key];
  if (!scenario) return;

  const colors = getChartColors();
  const ctx = document.getElementById('playgroundMainChart');
  if (!ctx) return;

  // Update Metric Cards
  const metricsBar = document.getElementById('playgroundMetricsBar');
  if (metricsBar) {
    metricsBar.innerHTML = scenario.metrics.map(m => `
      <div class="pg-metric-card">
        <div class="pg-metric-title">${m.title}</div>
        <div class="pg-metric-val">${m.value}</div>
        <div class="pg-metric-sub"><i class="fa-solid fa-chart-line"></i> ${m.change}</div>
      </div>
    `).join('');
  }

  // Destroy previous chart
  if (playgroundChart) {
    playgroundChart.destroy();
  }

  // Create new chart
  playgroundChart = new Chart(ctx, {
    type: scenario.type,
    data: scenario.getData(colors),
    options: scenario.options(colors)
  });

  // Update active button state
  document.querySelectorAll('.scenario-btn').forEach(btn => {
    if (btn.dataset.scenario === key) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 4. Initialize Everything on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Init charts after slight delay to ensure container sizing
  setTimeout(() => {
    initHeroMiniChart();
    setPlaygroundScenario('sales');
  }, 100);

  // Bind scenario buttons
  document.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setPlaygroundScenario(btn.dataset.scenario);
    });
  });
});

// Re-render charts on window resize or theme change
window.addEventListener('themeChanged', () => {
  initHeroMiniChart();
  const activeBtn = document.querySelector('.scenario-btn.active');
  const activeScenario = activeBtn ? activeBtn.dataset.scenario : 'sales';
  setPlaygroundScenario(activeScenario);
});
