import * as React from 'react';
import SMInput from './SMinput';
import SMRadio from './SMRadio';

function MyForm (){
  let StudentName = (e) =>{
    console.log(e.target.value);
  }
  let FathertName = (e) =>{
    console.log(e.target.value);
  }
return(
  <>
  <div>
    <h1 className='p-2 d-flex justify-content-center'>My Form</h1>
  <div className='p-2 d-flex justify-content-center'><SMInput onChange={StudentName}  label={"StudentName"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput onChange={FathertName}  label={"FatherName"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"Contact"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"CNIC"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"Last qualification"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"Course"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"Intitute"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"Section"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"Email"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"password"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"City"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"Country"}/></div>
  <div className='p-2 d-flex justify-content-center'><p>D.O.B:</p><input  type="date" label="D.O.B"></input></div>
  <div className='p-2 d-flex justify-content-center'><SMRadio  label={"Gender"}/></div>
  <div className='p-2 d-flex justify-content-center'><SMInput  label={"Adrees"}/></div>
  <button>Submit</button>
  </div>
  </>
)

}
export default MyForm;

