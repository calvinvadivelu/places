import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users'
import UserPlaces from './places/pages/UserPlaces';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import LoginPage from './user/pages/Auth';
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path='/' >
            <Users/>
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/:userId/places">
            <UserPlaces />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Redirect to='/'/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;