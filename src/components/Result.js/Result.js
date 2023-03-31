import React ,{useState} from 'react'
import DropDL from '../../Screens/dropdownlist';
import SMInput from '../SMinput';
import SMButton from '../SMButton';
import { COURSE } from '../dropdownoption';

const Result = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [user, setUser] = useState({
      RollNo:"",
    });
    let RollNo, value;
    const getUserRollNo = (event) => {
        RollNo = event.target.RollNo;
        value = event.target.value;
        setUser({ ...user, [RollNo]: value });
        console.log(user);
      };
  return (
    <>
    <div className="text-center shadow-lg p-3 mb-5 bg-primary text-white rounded">
      <h1>Result</h1>
    </div>
     <div className="p-2 d-flex justify-content-center">
       <SMInput label={"Enter Your Roll No..."}
       onChange={getUserRollNo}
       value={user.RollNo}
       /> 
    </div> 
    <div className="p-2 d-flex justify-content-center">
        <DropDL
         options={COURSE}
         selectedOption={selectedOption}
         setSelectedOption={setSelectedOption}
         label={"Course"}
        />
    </div>
    <div className="p-2 d-flex justify-content-center">
        <SMButton label={"Search"} sx={{height:"55px"}}/> 
    </div>
    </>
  )
}

export default Result;

     

// 2. Result
//  a. rollNumber Field
//  b. cource dropdown
//  c. search button
// 3. login
//  a. email
//  b. password 
