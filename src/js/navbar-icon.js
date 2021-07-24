import '../scss/_navbar-icon.scss';

export default function navbarIcon() {
  document.querySelector('.navbar-toggler')
    .addEventListener('click', () => {
      document.querySelector('.dr-animated-navbar-icon')
        .classList.toggle('open');
    });
}
