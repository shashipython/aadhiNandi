// Mutual Fund SIP Calculator & Dynamic Chart
// Chart.js global
let sipChartInstance = null;

function initSIPChart() {
  const ctx = document.getElementById('sipChart')?.getContext('2d');
  if (!ctx) return;

  sipChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Portfolio Value (₹)',
        data: [],
        borderColor: '#0f2f5b',
        backgroundColor: 'rgba(15, 47, 91, 0.1)',
        borderWidth: 4,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#fbbf24',
        pointBorderColor: '#fff',
        pointRadius: 6,
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { callback: value => '₹' + value.toLocaleString() }
        },
        x: { grid: { display: false } }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15,47,91,0.95)',
          titleColor: '#fff',
          bodyColor: '#fff',
          callbacks: {
            label: ctx => ctx.dataset.label + ': ₹' + ctx.parsed.y.toLocaleString()
          }
        }
      },
      animation: {
        duration: 1200,
        easing: 'easeOutQuart'
      }
    }
  });
}

function generateYearlyData(monthly, rate, years) {
  const yearlyData = [];
  const monthlyRate = rate / 100 / 12;
  let fv = 0;
  const labels = [];

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      fv = (fv + monthly) * (1 + monthlyRate);
    }
    labels.push(`Year ${year}`);
    yearlyData.push(Math.round(fv));
  }
  return { labels, data: yearlyData };
}

function calculateSIPMutualFund() {
  const monthly = parseFloat(document.getElementById('monthlyAmt').value) || 0;
  const annualRate = parseFloat(document.getElementById('annualRate').value) || 0;
  const years = parseInt(document.getElementById('investYears').value) || 0;

  if (!monthly || !annualRate || !years) {
    document.getElementById('sipResult').style.display = 'none';
    return;
  }

  const monthlyRate = annualRate / 100 / 12;
  const months = years * 12;
  const futureValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const totalInvested = monthly * months;
  const wealthGained = futureValue - totalInvested;

  // Update results
  document.getElementById('fvAmount').textContent = futureValue.toLocaleString();
  document.getElementById('totalInvested').textContent = totalInvested.toLocaleString();
  document.getElementById('wealthGained').textContent = wealthGained.toLocaleString();
  document.getElementById('sipResult').style.display = 'block';
  document.getElementById('chartTitle').textContent = `Growth over ${years} Years (₹${monthly.toLocaleString()}/mo @ ${annualRate}%)`;

  // Update chart
  const { labels, data } = generateYearlyData(monthly, annualRate, years);
  if (sipChartInstance) {
    sipChartInstance.data.labels = labels;
    sipChartInstance.data.datasets[0].data = data;
    sipChartInstance.update('none'); // fast update
  }
}

// Auto-init and real-time
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('sipChart')) {
    initSIPChart();
    calculateSIPMutualFund(); // initial calc with defaults
  }
});

