import React from 'react';
import Form from './form';
import '../styles/feature.scss';
import imageFeature from '../images/illustration-features.svg';

function FeatureItem(props) {
  return (
    <div className="feature-item">
      <h3>{props.title}</h3>
      <p>
        {props.text}
      </p>
    </div>
  );
}

const Feature = () => (
  <section className="feature-section">
    <h1>Stay Productive, Wherever You Are</h1>
    <div className="feature-content">
      <img src={imageFeature} alt="features" />
      <div className="features">
        <FeatureItem
          title="All Platforme, all devices, all your files"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
        />
        <FeatureItem
          title="Real-time collaboration"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
        />
        <FeatureItem
          title="Security you can trust"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
        />
        <FeatureItem
          title="Automatic backups"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
        />
      </div>
    </div>

    <div className="feature-subscribe">
      <h1>Get Early Access Today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to help you.
      </p>
      <Form formClass="subscribeForm" placeholder="email@example.com" />
    </div>

  </section>
);

export default Feature;
