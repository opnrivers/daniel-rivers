const NavbarActiveLink = class NavbarActiveLink {
  constructor() {
    const nav = document.querySelector('.navbar-nav');
    const links = [...nav.children];
    const { pathname } = window.location;

    const mapped = function mapped(link) {
      if (link.getAttribute('href') === pathname) {
        link.classList.add('active');
      }
    };

    links.map(mapped);
  }
};

export default new NavbarActiveLink();
