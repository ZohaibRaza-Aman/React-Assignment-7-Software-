// import React, { useState } from 'react';


// const Form = () => {
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [allEntry,setAllEntry] = useState([]);

//   const submitForm = (e) => {
//     e.preventDefault();
//     const newEntry = {email: email , password: password}
//     setAllEntry ([...allEntry , newEntry])
//     setEmail("");
//     setPassword("");
//     console.log(allEntry);
//   }

//   return (
//     <>
//     <form className='d-flex justify-content-center' action="" onSubmit={submitForm}>
//       <div>
//         <label htmlFor='email'>Email</label>
//         <input type="text" name="email" id="email" autoComplete="off"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor='password'>Password</label>
//         <input type="text" name="password" id="password" autoComplete="off"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>   
//     <div>
//       {allEntry.map((x,i)=>{
//         return (
//           <div key={i} className='showdata'>
//             <strong>User Details</strong>
//             <p>{x.email}</p>
//             <p>{x.password}</p>
//           </div>
//         )

//       })
//       }
//     </div>
//     </>
//   )
// }

// export default Form;
