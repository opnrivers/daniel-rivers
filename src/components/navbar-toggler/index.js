import React from 'react';
import ReactDOM from 'react-dom';

import './navbar-toggler.scss';

const element = React.createElement;
const toggler = document.querySelector('.dr-react-navbar-toggler');

const NavbarToggler = class NavbarToggler extends React.Component {
  constructor(props) {
    super(props);

    const t = this;

    t.state = { open: false };

    toggler.addEventListener('click', (event) => {
      event.preventDefault();

      if (toggler.classList.contains('collapsed')) {
        t.setState({ open: false });
      } else {
        t.setState({ open: true });
      }
    });
  }

  render() {
    const t = this;

    return (
      <div className={`dr-navbar-toggler-icon${t.state.open ? ' open' : ''}`}>
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }
};

if (toggler) {
  ReactDOM.render(element(NavbarToggler), toggler);
}
