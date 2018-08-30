import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header'; 
import HomeDashboardPage from '../components/HomeDashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItem from '../components/PortfolioItem';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
  <div>
  {/* Gives us the ability to have our header on every page */}
    <Header />
    <Switch>
    {/* -->{}<-- sets up component to reference a component we want to show */}
      <Route path="/" component={HomeDashboardPage} exact={true} />
      <Route path="/portfolio" component={PortfolioPage} exact={true} />
      <Route path="/portfolio/:id" component={PortfolioItem} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFoundPage} />
    </Switch>
   </div> 
  </BrowserRouter>
);

export default AppRouter;