(function () {
  const cfg = window.ESIS_CONFIG || {};
  const email = cfg.email || 'esistechnologie@gmail.com';
  const phone = cfg.whatsappInternational || '243845208766';
  const displayPhone = cfg.whatsappDisplay || '+243 845 208 766';
  const emailLink = document.getElementById('email-link');
  const emailText = document.getElementById('email-text');
  const whatsappLink = document.getElementById('whatsapp-link');
  const heroWhatsapp = document.getElementById('hero-whatsapp');
  const form = document.getElementById('contact-form');
  if (emailLink) emailLink.href = 'mailto:' + email;
  if (emailText) emailText.textContent = email;
  if (whatsappLink) { whatsappLink.href = 'https://wa.me/' + phone; whatsappLink.querySelector('strong').textContent = displayPhone; }
  if (heroWhatsapp) heroWhatsapp.href = 'https://wa.me/' + phone;
  if (form && cfg.formEndpoint) form.action = cfg.formEndpoint;
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); });
    });
  }
})();
