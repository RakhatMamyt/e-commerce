import React from 'react';
// import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

function Profile(props) {
  const click = () => {
    props.setLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
  };
  return (
    <div>
      <div>Profile Page</div>
      <Button color="primary" onClick={click}>
        Log Out
      </Button>
    </div>
  );
}

export default Profile;
