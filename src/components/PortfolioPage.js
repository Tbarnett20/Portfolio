import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the following things I've done:</p>
    <Link to="/portfolio/1" activeClassName="is-active" exact={true}>Item One</Link>
    <Link to="/portfolio/2" activeClassName="is-active">Item Two</Link>
  </div>
);

export default PortfolioPage;