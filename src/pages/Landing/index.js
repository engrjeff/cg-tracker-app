import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";

function Landing(props) {
  const history = useHistory();

  return (
    <div className='p-8'>
      <h1>Landing Page</h1>
      <div className='d-flex align-items-center'>
        <Button text='Go to Home' onClick={() => history.push("/u")} />
        <Button
          text='Go to Auth'
          className='ml-4'
          onClick={() => history.push("/auth")}
        />
      </div>
    </div>
  );
}

export default Landing;
