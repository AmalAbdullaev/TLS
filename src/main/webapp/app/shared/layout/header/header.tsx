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
              <button className="nav-link btn btn-success create-new-button no-caret">+ Добавить</button>
            </Dropdown>
            <Dropdown as="li" className="nav-item border-left">
              <Dropdown.Toggle as="a" className="nav-link count-indicator cursor-pointer">
                <i className="mdi mdi-bell" />
                <span className="count bg-danger" />
              </Dropdown.Toggle>
            </Dropdown>
            <Dropdown as="li" className="nav-item">
              <Dropdown.Toggle as="a" className="nav-link cursor-pointer no-caret">
                <div className="navbar-profile">
                  <p className="mb-0 d-none d-sm-block navbar-profile-name">Henry Klein</p>
                  <i className="mdi mdi-menu-down d-none d-sm-block" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="navbar-dropdown preview-list navbar-profile-dropdown-menu">
                <h6 className="p-3 mb-0">Profile</h6>
                <Dropdown.Divider />
                <Dropdown.Item href="!#" className="preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-success" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject mb-1">Settings</p>
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
                    <p className="preview-subject mb-1">Log Out</p>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <p className="p-3 mb-0 text-center">Advanced settings</p>
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
