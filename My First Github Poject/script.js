// ── MOBILE NAV TOGGLE ──
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));


// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) {
      current = sec.getAttribute('id');
    }
  });

  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});