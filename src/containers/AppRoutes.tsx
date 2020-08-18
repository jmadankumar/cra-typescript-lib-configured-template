import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from '../pages/Index';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
