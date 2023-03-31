import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Posts from "../Screens/Posts";
import SinglePost from "../Screens/Singlepost";
import Comments from "../Screens/comments"
import CommentsForm from "../Screens/commentsform";
import Dashboard from "../Screens/Dashboard";
import ProtectedRoute from './firebase/ProtectedRoute';
import MyForm from './../components/MyForm';
import Login from './../components/LoginSignup/Login';
import Signup from './../components/LoginSignup/Signup';
import Result from './../components/Result.js/Result';
import Courses from './../Screens/Dashbordscreens/instituteform';
import StudendList from "../Screens/Dashbordscreens/studendList";
import CourseList from "../Screens/Dashbordscreens/courseList";
import InstituteList from "../Screens/Dashbordscreens/instituteList";
import Studentform from './../Screens/Dashbordscreens/studentform';
import RegistrationForm from './../Screens/Dashbordscreens/registrationform';
import AddQuiz from './../Screens/addQuiz';


export default function AppRouter () {
  return (
    <>
      <BrowserRouter>
        <nav>
        <Link to="Dashboard"><h1 className="text-center">Dashboard Page</h1></Link>
          {/* &nbsp; &nbsp; &nbsp;
          <Link to="/">Home Page</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="about">About Page</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="post">Posts Page</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="commentsform/:id">CommentsForm</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="MyForm">My Form</Link> */}
        </nav>

          <Routes>
            <Route path="dashboard/*"  element={<ProtectedRoute Component={Dashboard} />}/>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/post" element={<ProtectedRoute Component={Posts} />} />
            <Route path="singlepost" element={<SinglePost />} />
            <Route path="comments" element={<Comments />} />
            <Route path="/commentsform/:id" element={<CommentsForm />} />
            <Route path="/login" element={  <Login/> } />
            <Route path="/signup" element={ <Signup/>  } />
            <Route path="MyForm/" element={<MyForm/>} />
            <Route path="courses/" element={<Courses/>} />
            <Route path="studentform/" element={<Studentform/>} />
            <Route path="registrationform/" element={<RegistrationForm/>} />
            <Route path="/result" element={ <Result/> } />
            <Route path="/courselist" element={ <CourseList/>  } />
            <Route path="/institutelist" element={ <InstituteList/>  } />
            <Route path="/studentlist/" element={<StudendList/>}>
              {/* <Route path="studentname" element={<StudentName/>}/>
              <Route path="fathername" element={<FatherName/>} /> */}
            </Route>
              
            <Route path="/addQuiz" element={<AddQuiz />} />

           
          </Routes>
      </BrowserRouter>
    </>
  );
}


