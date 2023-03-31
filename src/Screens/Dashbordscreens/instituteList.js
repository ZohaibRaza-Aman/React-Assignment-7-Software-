import React,{useState} from 'react'
import SMGrid from '../../components/SMGride';
import { Box, Button, Grid, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

const InstituteList = () => {
    const [listData, setListData] = useState([]);
    const heading = [
        {
            id: "institute",
            displayName:"InstituteName",
        },
        {
            id: "logo",
            displayName: "Logo Image",
        },
        {
            id:"campus",
            displayName:"No Of Campus"
        },
        {
            id:"active/inactive",
            displayName:"Active/inActive"
        }
    ]
  return (
    <>
    <div className="text-center shadow-lg p-3 mb-5 bg-primary text-white">
      <h1>InstituteList</h1>
    </div>
    <Box>
        <Grid container>
            <Grid item md={12} className="p-2 bg-info">
                <SMGrid datasource={listData} cols={heading}/>
            </Grid>
        </Grid>
    </Box>
    </>
)}

export default InstituteList;
