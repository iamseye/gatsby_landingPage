import React from 'react';
import { Link } from 'gatsby';
import Form from './form';
import logo from '../images/logo.svg';
import '../styles/footer.scss';
import IconPhone from '../images/icons/icon-phone.svg';
import IconEmail from '../images/icons/icon-email.svg';

const Footer = ({ siteInfo }) => (
  <footer className="footer">
    <div className="footer-info">
      <img src={logo} alt="Logo" style={{ width: '13rem' }} />
      <div>
        <IconPhone />
        <span>
          Phone: { siteInfo.companyPhone }
        </span>
      </div>
      <div>
        <IconEmail />
        <span>
          { siteInfo.companyEmail }
        </span>
      </div>
    </div>

    <div className="footer-links">
      <div>
        <span> { siteInfo.companyName } </span>
        <ul>
          <li>
            <Link to="/">Desktop App</Link>
          </li>
          <li>
            <Link to="/">Mobile App</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Link to="/">Feature</Link>
          </li>
        </ul>
      </div>
      <div>
        <span> Company </span>
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/">Press</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <span> Support </span>
        <ul>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Terms</Link>
          </li>
          <li>
            <Link to="/">Privacy</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-subscribe">
      <span>
        Receive updates from us, including tips and tricks on how to imporve your workflow.
      </span>
      <Form formClass="subscribeForm--footer" placeholder="" />
    </div>
  </footer>
);


export default Footer;
