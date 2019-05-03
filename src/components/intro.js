import React from 'react';
import logo from '../images/logo.svg';
import imageIntro from '../images/illustration-hero.svg';
import '../styles/intro.scss';

const Intro = () => (
  <section className="intro-section">
    <header>
      <img src={logo} alt="Logo" style={{ width: '10rem' }}/>
      <div>
        <button type="button" className="btn-trans">Sign in</button>
        <button type="button" className="btn-green">Sign up</button>
      </div>
    </header>

    <div className="intro-content">
      <div className="intro-content--left">
        <h1 style={{ marginBottom: '1rem' }}> All Your Files In One Secure Location, Accessible Anywhere. </h1>
        <button style={{ marginTop: '2rem' }} type="button" className="btn-green--big">Get Started</button>
      </div>
      <img src={imageIntro} alt="illustration hero" />
    </div>
  </section>
);

export default Intro;
