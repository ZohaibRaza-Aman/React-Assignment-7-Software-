import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import SMInput from "../../components/SMinput";
import DropDL from "../dropdownlist";
import {CITY,LAST_QUALIFICATION,COURSE ,SECTION ,COUNTRY } from "./../../components/dropdownoption";
import SMRadio from './../../components/SMRadio';
import SMButton from './../../components/SMButton';
import { Typography } from "@mui/material";
import { getFBData } from "../../config/firebase/firbasemethods";

const current = new Date().toISOString().split("T")[0]

const RegistrationForm = () => {
  const [registrationStuts,setRegistrationStuts] = useState({
    RegistrationOpen: true,
  });
  const [loader,setLoader] = useState(false)

  const getStatus = () => {
    setLoader(true)
    getFBData("courcecontrol")
    .then((res)=>{
      setLoader(false)
      console.log(res);
      setRegistrationStuts({...res});
    }).catch((err)=>{
      setLoader(false)
      console.log(err);
    })
  };

  useEffect(()=>{
    getStatus();
  },[])

  const [selectedOption, setSelectedOption] = useState("");
  const [user, setUser] = useState({
    StudentName: "",
    FatherName: "",
    Contact: "",
    CNIC:"",
    Institute:"",
    Email: "",
    Password:"",
    Adrees: "",
  });
  let InstituteName, value;
  const getUserData = (event) => {
    InstituteName = event.target.InstituteName;
    value = event.target.value;
    setUser({ ...user, [InstituteName]: value });
    console.log(user);
  };

  return loader ? (
    <Typography>Loading ...</Typography>
  ) : registrationStuts.RegistrationOpen ? (
    <>
    <Box className="shadow-lg p-3 mb-5 bg-white rounded">
      <div>
        <h1 className="text-center shadow-lg p-3 mb-5 bg-primary text-white rounded">Registration Form</h1>
      </div>
      <div className="p-4  d-flex justify-content-center">
        <SMInput
          onChange={getUserData}
          value={user.StudentName}
          label={"Student Name"}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <SMInput
          onChange={getUserData}
          value={user.FatherName}
          label={"Father Name"}
        />
      </div>
      <div className="p-2 d-flex justify-content-center">
        <SMInput  
        onChange={getUserData}
        value={user.Contact}
        label={"Contact"}
        type={"number"}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <SMInput  
        onChange={getUserData}
        value={user.CNIC}
        label={"CNIC"}
        type={"number"}
        />
        
      </div>
      <div className="p-2 d-flex justify-content-center">
      <DropDL
          options={LAST_QUALIFICATION}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          label={"Last qualification"}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <DropDL
          options={COURSE}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          label={"Course"}
        />
      </div>
      <div className="p-2 d-flex justify-content-center">
        <SMInput disabled={"disabled"} onChange={getUserData} label={"Institute"} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <DropDL
          options={SECTION}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          label={"Section"}
        />
      </div>
      <div className="p-2 d-flex justify-content-center">
        <SMInput
          onChange={getUserData}
          value={user.Email}
          type={"email"}
          label={"Email"}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <SMInput
          onChange={getUserData}
          value={user.Password}
          type={"password"}
          label={"Password"}
        />
        
      </div>
      <div className="p-2 d-flex justify-content-center">

      <DropDL
          options={CITY}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          label={"City"}
        />
              &nbsp;&nbsp;&nbsp;&nbsp;
        <DropDL
          options={COUNTRY}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          label={"Country"}
        />
      </div>
      <div className="p-2 d-flex justify-content-center">
      <SMInput
      styles={{width:"465px"}}
      type='date'
      placeholder='Enter BirthDate'
      value={user.birthdate} onChange={user.dateOfBirth}
      name='birthdate'
      max={current}
    />
      </div>

      <div className="p-2 d-flex justify-content-center">
      <SMRadio/>
      </div>
      <div className="p-2 d-flex justify-content-center">
      <SMInput
      styles={{width:"465px"}}
          onChange={getUserData}
          value={user.Adrees}
          label={"Adrees"}
        />
      </div>
      <div className="text-center pt-4">
      <SMButton label="Submit" 
      onClick={getUserData}
      size="large"
      />    
      </div>
      </Box>
    </>
  ):(
    <Typography>Form is n0 Longer available</Typography>
  );



      
//     </>
//   );
};

export default RegistrationForm;

