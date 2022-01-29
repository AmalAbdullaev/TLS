import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <footer className="footer">
    <div className="container-fluid">
      <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Copyright ©{' '}
          <a target="_blank" rel="noopener noreferrer">
            CEPU.com{' '}
          </a>
          2022
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
