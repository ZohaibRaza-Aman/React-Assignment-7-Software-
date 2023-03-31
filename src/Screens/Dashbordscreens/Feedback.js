import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SMInput from "../../components/SMinput";
import SMModal from "./../../components/ammodal";
import { getFBData, postFBData } from "../../config/firebase/firbasemethods";
import SMButton from "../../components/SMButton";
import SMGrid from "./../../components/SMGride";

function Feedback() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState({});
  const [loader, setLoader] = useState(false);
  const [listData, setListData] = useState([]);
  const [displayObj, setDisplayObj] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const col = [
    {
      id: "userName",
      displayName: "Name",
    },
    {
      id: "email",
      displayName: "Email",
    },
    {
      id: "message",
      displayName: "Message",
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
  const saveFeed = () => {
    const uid = uuidv4();
    setLoader(true);
    postFBData("Feeds", model, uid)
      .then(() => {
        console.log("save succefully");
        setOpen(false);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  const showFbData = () => {
    getFBData("Feeds")
      .then((res) => {
        setListData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    showFbData();
  }, []);
  const innerContent = () => {
    return (
      <Box>
        <Grid container>
          <Grid className="p-2" item md={6}>
            <SMInput
              value={model.userName}
              onChange={(e) => setModel({ ...model, userName: e.target.value })}
              label="User Name"
            />
          </Grid>
          <Grid className="p-2" item md={6}>
            <SMInput
              value={model.email}
              onChange={(e) => setModel({ ...model, email: e.target.value })}
              label="Email"
            />
          </Grid>
          <Grid className="p-2" item md={12}>
            <SMInput
              value={model.message}
              onChange={(e) => setModel({ ...model, message: e.target.value })}
              label="Message"
            />
          </Grid>
        </Grid>
      </Box>
    );
  };
  let showSingleDataCard = () => {};

  return (
    <>
      <SMModal
        Title="Dummy Modal Text"
        innerContent={innerContent()}
        modalFooter={
          <Box align="right">
            <SMButton label="save" onClick={saveFeed} loading={loader} />
          </Box>
        }
        close={() => setOpen(false)}
        open={open}
      />
      <Box>
        <h1>Feedback</h1>
        <Button onClick={handleClickOpen} variant="contained">
          Add Feedback
        </Button>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={12} className="p-2">
            <SMGrid datasource={listData} cols={col} />

            {/* <Box
              sx={{ borderRadius: "20px", height: 500 }}
              className="text-center shadow-lg bg-white p-2"
            >
              <Typography variant="h5" className="fw-bold">
                {displayObj.userName}
              </Typography>

              <Typography variant="h6" className="fw-muted">
                {displayObj.email}
              </Typography>

              <Typography  variant="body1" className="">
                {displayObj.message}
              </Typography>
            </Box> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Feedback;
