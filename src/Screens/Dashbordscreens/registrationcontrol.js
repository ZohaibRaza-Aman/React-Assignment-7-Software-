import { Box, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SMSwicth from '../../components/SMSwicth';
import { Button } from '@mui/material';
import {fbCustomPost , fbGet} from '../../config/firebase/firbasemethods'

const RegistrationControl = () => {
    const [model , setModel] = useState({});
    const save = () => {
        model.courceList = [{
            CourceName:'web',
            id:'dS154Ytd54Nmo91'
        }];
        fbCustomPost("courcecontrol", model)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    let getDT =() => {
        fbGet("courcecontrol")
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getDT()
    },[])
  return (
    <>
      <Typography>RegistrationControl</Typography>
      <Box>
        <Box>
            <SMSwicth
            onChange={(e)=> setModel({...model,registrationOpen: e.target.checked})}
            label="Cource Open"
            />
        </Box>
        <Box>
            <Button variant='contained' onClick={save}>
                Cource Open
            </Button>
        </Box>
      </Box>
    </>
  )
}

export default RegistrationControl;
