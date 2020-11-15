import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import s from './App.module.css';
import Main from './components/main';
import Gifts from './components/gifts';
import Specials from './components/specials';
import Philosophy from './components/philosophy';

// special will allow changing the button's internal text and the content of
// the page to which the button redirects to based on a special day or promotion
let specials = 'Christmas';

const App = () => {
  return (
    <Router>
      <div>
        <Nav className={s.navLinks}>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/gifts">Gifts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/specials">{specials}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/philosophy">Philosophy</NavLink>
          </NavItem>
        </Nav>

        <Switch>
          <Route exact={true} path="/">
            <Main />
          </Route>
          <Route path="/gifts">
            <Gifts />
          </Route>
          <Route path="/specials">
            <Specials />
          </Route>
          <Route path="/philosophy">
            <Philosophy />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
