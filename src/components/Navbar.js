import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDesktop: false
    }
  }

  openHandler(event) {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen)
    console.log('desktop ', this.state.isDesktop)
  }

  closeNavbar() {
    this.setState({ isOpen: false });
  }

  componentDidMount() {
    if (window.innerWidth >= 768) this.setState({ isDesktop: true });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) return this.setState({ isDesktop: true });
      return this.setState({ isDesktop: false });
    });
  }

  render() {
    const { isDesktop, isOpen } = this.state;
    return <nav className="navbar">
      <div className="navbar-brand" onClick={(event) => this.openHandler(event)}>
        <a className="navbar-burger burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      {(isDesktop || isOpen) && <div className="navbar-end">
        <Link onClick={() => this.closeNavbar()} className="navbar-item" to="/">
          Home
        </Link>
        <Link onClick={() => this.closeNavbar()} className="navbar-item" to="/about">
          About
        </Link>
        <Link onClick={() => this.closeNavbar()} className="navbar-item" to="/projects">
          Projects
        </Link>
        <Link onClick={() => this.closeNavbar()} className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>}
    </nav>
  }
}

export default withRouter(Navbar);