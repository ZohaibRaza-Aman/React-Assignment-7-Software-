import React from 'react'
import InstituteList from './instituteList';
import { Grid } from '@mui/material';



const AdminPanel = () => {
  return (
    <>
    <div Container>
      <h1 className='text-center bg-warning rounded text-white'>Adam Jii Institute</h1>
    </div>
    <div Container>
      <Grid item md={12}>
      <InstituteList/>
      </Grid>
      </div>
   
    </>
  )
}

export default AdminPanel;
