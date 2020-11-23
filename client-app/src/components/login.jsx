import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
// import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
// import { BrowserRouter as withRouter } from 'react-router-dom';
// import { Button, NavItem, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';

// import Register from './register';

function Login(props) {
  // const [registered, setRegistered] = useState(false);

  const click = () => {
    props.setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="password" />
      </InputGroup>
      <br />
      <Button color="primary" onClick={click}>
        Login
      </Button>
    </div>
  );
}

export default Login;
