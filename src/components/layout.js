/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Footer from './footer';
import '../styles/default.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            companyName,
            companyPhone,
            companyEmail
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <main>{children}</main>
        </div>
        <Footer siteInfo={data.site.siteMetadata} />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
