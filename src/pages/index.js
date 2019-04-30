import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import Feature from '../components/feature';
import Hero from '../components/hero';
import Content from '../components/content';
import CallToAction from '../components/cta';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Intro />
    <Feature />
    <Hero />
    <Content />
    <CallToAction />
  </Layout>
);

export default IndexPage;
