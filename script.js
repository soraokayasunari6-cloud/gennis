const header = document.querySelector('[data-header]');
const button = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 10), { passive: true });

button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  button.classList.toggle('is-open', !open);
  menu.classList.toggle('is-open', !open);
  button.querySelector('.sr-only').textContent = open ? 'メニューを開く' : 'メニューを閉じる';
});

menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  button.setAttribute('aria-expanded', 'false');
  button.classList.remove('is-open');
  menu.classList.remove('is-open');
}));
