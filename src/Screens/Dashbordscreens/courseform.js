import React from 'react'
import SMInput from '../../components/SMinput';
import { useState } from 'react';

const Courseform = () => {
    const [user, setUser] = useState({
        Courcename: "",
        Duration: "",
        Fee: "",
        Teacher:"",
      });
      let Courcename, value;
      const getUserData = (event) => {
        Courcename = event.target.Courcename;
        value = event.target.value;
        setUser({ ...user, [Courcename]: value });
        console.log(user);
      };
  return (
    <>
    <div>
        <h1  className="text-center shadow-lg p-3 mb-5 bg-primary text-white rounded">Course Form</h1>
      </div>
      <div className="p-4  d-flex justify-content-center">
        <SMInput
          onChange={getUserData}
          value={user.Courcename}
          label={"CourceName"}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <SMInput
          onChange={getUserData}
          value={user.Duration}
          label={"Duration"}
        />
      </div>
      <div className="p-4  d-flex justify-content-center">
        <SMInput
          onChange={getUserData}
          value={user.Fee}
          label={"Fee"}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <SMInput
          onChange={getUserData}
          value={user.Teacher}
          label={"Teacher"}
        />
      </div>
      <div className="text-center pt-4">
        <button
        onClick={getUserData} className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  )
}

export default Courseform;
