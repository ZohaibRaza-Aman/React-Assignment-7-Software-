import { Box } from "@mui/system";
import React, { useState ,useEffect } from "react";
import SMInput from "../../components/SMinput";
import { getFBData, postFBData } from "../../config/firebase/firbasemethods";
import { Grid } from "@mui/material";
import SMGrid from "../../components/SMGride";
import SMButton from "../../components/SMButton";

const style = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "Snow",
  boxShadow: 5,
  borderRadius: 10,
  p: 4,
};

const Course = () => {
  const [model, setModel] = useState({});
  const [userdata, setUserData] = useState({});
  const [loader, setLoader] = useState(false);

  const column = [
    {
      id: "institute",
      displayName: "InstituteName",
    },
    {
      id: "shortname",
      displayName: "InstituteShortName",
    },
    {
      id: "loction",
      displayName: "Location",
    },
    {
      id: "campus",
      displayName: "NoOFCampus",
    },
    {
      id: "addrees",
      displayName: "Adrees",
    },
    {
      id: "contact",
      displayName: "Contact",
    },
    {
      id: "owner",
      displayName: "OwnerContact",
    },
    {
      id: "usertype",
      displayName: "UserType",
    },
  ];

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  const getUserData = () => {
    const uid = uuidv4();
    setLoader(true);
    postFBData("intituteform", model, uid)
      .then(() => {
        console.log("save succefully");
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };
  const showFbData = () => {
    getFBData("intituteform")
      .then((res) => {
        setUserData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    showFbData();
  }, []);

  return (
    <Box>
      <Grid container>
        <Grid className="p-2" item md={6}>
          <SMInput
            value={model.institute}
            onChange={(e) => setModel({ ...model, institute: e.target.value })}
            label="Institute Name"
          />
        </Grid>
        <Grid className="p-2" item md={6}>
          <SMInput
            value={model.shortname}
            onChange={(e) => setModel({ ...model, shortname: e.target.value })}
            label="Institute Short Name"
          />
        </Grid>
        <Grid className="p-2" item md={6}>
          <SMInput
            value={model.loction}
            onChange={(e) => setModel({ ...model, loction: e.target.value })}
            label="Loction"
          />
        </Grid>
        <Grid className="p-2" item md={6}>
          <SMInput
            value={model.campus}
            onChange={(e) => setModel({ ...model, campus: e.target.value })}
            label="NoOFCampus"
          />
        </Grid>
        <Grid className="p-2" item md={6}>
          <SMInput
            value={model.addrees}
            onChange={(e) => setModel({ ...model, addrees: e.target.value })}
            label="Addrees"
          />
        </Grid>
        <Grid className="p-2" item md={6}>
          <SMInput
            value={model.contact}
            onChange={(e) => setModel({ ...model, contact: e.target.value })}
            label="Contact"
          />
        </Grid>
        <Grid className="p-2" item md={6}>
          <SMInput
            value={model.owner}
            onChange={(e) => setModel({ ...model, owner: e.target.value })}
            label="OwnerContact"
          />
        </Grid>
        <Grid className="p-2" item md={6}>
          <SMInput
            value={model.usertype}
            onChange={(e) => setModel({ ...model, usertype: e.target.value })}
            label="UserType"
          />
        </Grid>
        <Box className="align-items-center" >
          <SMButton label="save" onClick={getUserData} loading={loader} />
        </Box>
        <Box>
          <Grid container>
            <Grid item md={12} className="p-2">
              <SMGrid datasource={userdata} cols={column} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Course;
