import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router";
import Logout from "../Screens/Dashbordscreens/logout.js";
import AdminPanel from "../Screens/Dashbordscreens/adminpanel";
import Result from "../components/Result.js/Result";
import { ListItemIcon } from "@mui/material";
import RegistrationControl from "../Screens/Dashbordscreens/registrationcontrol";
// import StudendList  from "../Screens/Dashbordscreens/studendList";
import DisplayQuiz from "../Screens/displayquiz";
import { userLogOut } from "./firebase/firbasemethods";
import CourseList from "../Screens/Dashbordscreens/courcelist.js";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FeedIcon from '@mui/icons-material/Feed';
import { useState } from "react";
import Feedback from "../Screens/Dashbordscreens/Feedback.js";

const drawerWidth = 240;

export default function MainLayout() {
  const [open,setOpen] = useState(false)
  const [menuList, setMenuList] = React.useState([
    {
      name: "AdminPanel",
      route: "admin",
      icon: <HomeIcon />,
    },
    {
      name: "Course List",
      route: "course",
      icon: <AutoStoriesIcon />,
      "childrens":[
        {
          name:"list1",
          path:"/"
        }
        ,
        {
          name:"list2",
          path:"/list2"
        }
        ,
        {
          name:"list3",
          path:"/list3"
        }
      ]
    },
    {
      name: "Rigistration Control",
      route: "rigistration",
      icon: <AppRegistrationIcon />,
    },
    {
      name: "Result",
      route: "result",
      icon: <ScoreboardIcon />,
    },
    {
      name: "Student List",
      route: "student",
      icon: <ContactEmergencyIcon />,
    },
    {
      name: "Feed Back",
      route: "feeds",
      icon: <FeedIcon />,
    },
    {
      name: "Quiz",
      route: "quiz",
      icon: <QuizIcon />,
    },
    {
      name: "Logout",
      route: "logout",
      icon: <LogoutIcon />,
    },
  ]);

  let navigate = useNavigate();
  let changeScreen = (route) => {
    // console.log('route', route)
    if (route === "logout") {
      handleLogOut();
    }
    navigate(route);
  };

  const handleLogOut = async () => {
    await userLogOut();
    navigate("/login");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Wellcome Institute
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuList.map((x, index) => {
            return (
              <ListItem
                onClick={() => changeScreen(x.route)}
                key={index}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 1 === 0 ? x.icon : <HomeIcon /> }

                  </ListItemIcon>
                  <ListItemText primary={x.name} />
                  {open  ? <ArrowDropDownIcon onClick={()=> setOpen(!open)}/> : <ArrowDropDownIcon /> &&  <ArrowDropUpIcon onClick={()=>  setOpen(!open)}/> }
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {/* <BrowserRouter> */}
        <Toolbar />
        <Routes>
          <Route path="admin/" element={<AdminPanel />} />
          <Route path="course/" element={<CourseList/>} />
          <Route path="rigistration/" element={<RegistrationControl />} />
          <Route path="result/" element={<Result />} />
          {/* <Route path="student/" element={<StudendList/>} /> */}
          <Route path="feeds/" element={<Feedback />} />
          <Route path="quiz/" element={<DisplayQuiz />} />
          <Route path="logout/" element={<Logout />} />
        </Routes>
        {/* </BrowserRouter> */}
      </Box>
    </Box>
  );
}
