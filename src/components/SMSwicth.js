import  Switch  from "@mui/material/Switch";
const label = { inputProps: {"aria-label": "Switch demo"}};

const SMSwicth = (props) => {
  return (
   <>
   <Switch {...props} {...label}/>
   </>
  )
}

export default SMSwicth;
