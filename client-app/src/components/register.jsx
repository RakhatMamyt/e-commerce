import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

function Register(props) {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <Button onClick={() => props.setRegistered(true)} color="primary">
        Register
      </Button>
    </div>
  );
}

export default withRouter(Register);
