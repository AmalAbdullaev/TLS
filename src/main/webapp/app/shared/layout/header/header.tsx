import './header.scss';

import React from 'react';
import { Storage } from 'react-jhipster';
import { Dropdown } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isSwaggerEnabled: boolean;
  currentLocale: string;
  onLocaleChange: Function;
}

export interface IHeaderState {
  menuOpen: boolean;
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  state: IHeaderState = {
    menuOpen: false
  };

  handleLocaleChange = event => {
    const langKey = event.target.value;
    Storage.session.set('locale', langKey);
    this.props.onLocaleChange(langKey);
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { currentLocale, isAuthenticated, isAdmin, isSwaggerEnabled, isInProduction } = this.props;

    /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */

    return (
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo-mini" to="/">
            <img src="/static/images/logo-mini.svg" alt="logo" />
          </Link>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <h1 className="navbar-nav">TLS</h1>
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input type="text" className="form-control" placeholder="Search products" />
              </form>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            <Dropdown as="li" className="nav-item d-none d-lg-block">
              <button className="nav-link btn btn-success create-new-button no-caret">????????</button>
            </Dropdown>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="!#" onClick={event => event.preventDefault()}>
                <i className="mdi mdi-view-grid" />
              </a>
            </li>
            <Dropdown as="li" className="nav-item border-left">
              <Dropdown.Toggle as="a" className="nav-link count-indicator cursor-pointer">
                <i className="mdi mdi-email" />
                <span className="count bg-success" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown preview-list">
                <h6 className="p-3 mb-0">
                  <Trans>Messages</Trans>
                </h6>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <img src="/static/images/faces/face4.jpg" alt="profile" className="rounded-circle profile-pic" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      <Trans>Mark send you a message</Trans>
                    </p>
                    <p className="text-muted mb-0">
                      {' '}
                      1 <Trans>Minutes ago</Trans>{' '}
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <img src="/static/images/faces/face2.jpg" alt="profile" className="rounded-circle profile-pic" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      <Trans>Cregh send you a message</Trans>
                    </p>
                    <p className="text-muted mb-0">
                      {' '}
                      15 <Trans>Minutes ago</Trans>{' '}
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <img src="/static/images/faces/face3.jpg" alt="profile" className="rounded-circle profile-pic" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1">
                      <Trans>Profile picture updated</Trans>
                    </p>
                    <p className="text-muted mb-0">
                      {' '}
                      18 <Trans>Minutes ago</Trans>{' '}
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <p className="p-3 mb-0 text-center">
                  4 <Trans>new messages</Trans>
                </p>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as="li" className="nav-item border-left">
              <Dropdown.Toggle as="a" className="nav-link count-indicator cursor-pointer">
                <i className="mdi mdi-bell" />
                <span className="count bg-danger" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                <h6 className="p-3 mb-0">
                  <Trans>Notifications</Trans>
                </h6>
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar text-success" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">
                      <Trans>Event today</Trans>
                    </p>
                    <p className="text-muted ellipsis mb-0">
                      <Trans>Just a reminder that you have an event today</Trans>
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-danger" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject mb-1">
                      <Trans>Settings</Trans>
                    </h6>
                    <p className="text-muted ellipsis mb-0">
                      <Trans>Update dashboard</Trans>
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-link-variant text-warning" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject mb-1">
                      <Trans>Launch Admin</Trans>
                    </h6>
                    <p className="text-muted ellipsis mb-0">
                      <Trans>New admin wow</Trans>!
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <p className="p-3 mb-0 text-center">
                  <Trans>See all notifications</Trans>
                </p>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as="li" className="nav-item">
              <Dropdown.Toggle as="a" className="nav-link cursor-pointer no-caret">
                <div className="navbar-profile">
                  <img className="img-xs rounded-circle" src="/static/images/faces/face15.jpg" alt="profile" />
                  <p className="mb-0 d-none d-sm-block navbar-profile-name">
                    <Trans>Henry Klein</Trans>
                  </p>
                  <i className="mdi mdi-menu-down d-none d-sm-block" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
                <h6 className="p-3 mb-0">
                  <Trans>Profile</Trans>
                </h6>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-success" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">
                      <Trans>Settings</Trans>
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-logout text-danger" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">
                      <Trans>Log Out</Trans>
                    </p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <p className="p-3 mb-0 text-center">
                  <Trans>Advanced settings</Trans>
                </p>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button">
            <span className="mdi mdi-format-line-spacing" />
          </button>
        </div>
      </nav>
      // <div id="app-header">
      //   <LoadingBar className="loading-bar" />
      //   <Navbar dark expand="sm" fixed="top" className="jh-navbar">
      //     <NavbarToggler aria-label="Menu" onClick={this.toggleMenu} />
      //     <Brand />
      //     <Collapse isOpen={this.state.menuOpen} navbar>
      //       <Nav id="header-tabs" className="ml-auto" navbar>
      //         <Home />
      //         {isAuthenticated && <EntitiesMenu />}
      //         {/* {isAuthenticated && isAdmin && <AdminMenu showSwagger={isSwaggerEnabled} />} */}
      //         <LocaleMenu currentLocale={currentLocale} onClick={this.handleLocaleChange} />
      //         <AccountMenu isAuthenticated={isAuthenticated} />
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>
    );
  }
}
