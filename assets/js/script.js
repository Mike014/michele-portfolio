// anno nel footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// evidenzia nav corrente
const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('.nav-link').forEach(a => {
  if (a.getAttribute('href')?.toLowerCase() === current) {
    a.classList.add('active');
    a.setAttribute('aria-current', 'page');
  }
});
EOF
