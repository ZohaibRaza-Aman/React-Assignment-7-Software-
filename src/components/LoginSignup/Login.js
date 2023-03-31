import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../config/firebase/firbasemethods";

function Login() {
  const navigate = useNavigate()
  const [model, setModel] = useState({});
  const [loaoder , setLoader] = useState(false)
  


  let signIn = () => {
    setLoader(true)
  
    console.log('model',model )
    loginUser(model)
      .then((res) => {
        setLoader(false)
        console.log(res);
        navigate("/dashboard")
      })
      .catch((err) => {
        setLoader(false)
        console.log(err);
      });
  };

  return (
    <>
      <Box
        sx={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center "
      >
        <Box>
          <Typography variant="h3">Login</Typography>
          <Box className="p-2">
            <TextField
              onChange={(e) => setModel({ ...model, email: e.target.value })}
              variant="standard"
              label="Email"
            />
          </Box>
          <Box className="p-2">
            <TextField
              onChange={(e) => setModel({ ...model, password: e.target.value })}
              variant="standard"
              label="Password"
            />
          </Box>
          <Box className="p-2">
            <Button disabled={loaoder} onClick={signIn} variant="contained">
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Login;