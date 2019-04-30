import React from 'react';
import '../styles/feature.scss';
import imageFeature from '../images/illustration-features.svg';

function FeatureItem(props) {
  return (
    <div className="feature-item">
      <h4>{props.title}</h4>
      <p>
        {props.text}
      </p>
    </div>
  );
}

const Feature = () => (
  <section className="feature-section">
    <h2>Stay Productive, Wherever You Are</h2>
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
  </section>
);

export default Feature;
