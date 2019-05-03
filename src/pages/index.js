import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Intro from '../components/intro';
import Feature from '../components/feature';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Intro />
    <Feature />
  </Layout>
);

export default IndexPage;
