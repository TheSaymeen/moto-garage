/* ============================================
   MOTO GARAGE — script.js
   Minimal JS — nav scroll effect only.
   All booking links are plain <a> tags.
   ============================================ */

(function () {
  'use strict';

  /* --- Nav: add shadow + solid bg on scroll --- */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(26, 23, 20, 0.98)';
        nav.style.borderBottomColor = 'rgba(168, 169, 168, 0.25)';
      } else {
        nav.style.background = 'rgba(26, 23, 20, 0.92)';
        nav.style.borderBottomColor = 'rgba(168, 169, 168, 0.15)';
      }
    }, { passive: true });
  }

  /* --- Smooth anchor scrolling with nav offset --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 64;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* --- Intersection Observer: fade-in sections on scroll --- */
  const sections = document.querySelectorAll('.services, .how, .safety, .social, .cta-section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(function (section) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
  }

})();
