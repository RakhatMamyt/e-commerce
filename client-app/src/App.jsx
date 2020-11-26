import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

import Main from './components/main';
import Gifts from './components/gifts';
import Specials from './components/specials';
import Philosophy from './components/philosophy';
import Profile from './components/profile/profile';
import Login from './components/login';
import getData from './components/data';

import s from './App.module.css';

// special will allow changing the button's internal text and the content of
// the page to which the button redirects to based on a special day or promotion
let specials = 'Christmas';

const App = () => {
  const [products, setProducts] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(products);

  useEffect(() => {
    if (products === null) setProducts(getData());
    const loginStatus = localStorage.getItem('loggedIn');
    loginStatus === 'true' ? setLoggedIn(true) : undefined;
  });

  // eslint-disable-next-line no-console
  console.log('loggedIn:', loggedIn);

  const authorisation = loggedIn ? (
    // eslint-disable-next-line no-console
    <NavLink href="/profile" className={s.avatar}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgwL4r2DN1qg91OOqIViiv0Uxw-9yqo-PiQ&usqp=CAU" />
    </NavLink>
  ) : (
    <NavLink href="/login">Sign in</NavLink>
  );

  const profile = loggedIn ? <Profile setLoggedIn={setLoggedIn} /> : undefined;
  const login = !loggedIn ? <Login setLoggedIn={setLoggedIn} /> : undefined;

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
          {authorisation}
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
          <Route path="/profile">{profile}</Route>
          <Route path="/login">
            {/* {!loggedIn ? <Login setLoggedIn={setLoggedIn} isRegistered={isRegistered} /> : undefined} */}
            {login}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
