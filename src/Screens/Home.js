import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import "../App.css";

function Home() {
  const [data, setData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/posts";

  let getAPIData = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res);
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(api, {
        body: "Custom Body",
        title: "ABH",
        userId: 1,
      })
      .then((res) => {
        console.log("Data send Successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .put(api + "/1", { body: "Custom Body" })
      .then((res) => {
        console.log("Data send Successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .delete(api)
      .then((res) => {
        console.log("Data Deleted Successfully", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <h1 className="main" >HOME Page</h1>
      <div className="main">
        <Button onClick={getAPIData} variant="contained">
          Get Data
        </Button>
        {data.map((e, i) => (
          <div key={i}>
            <div>
              <ul>
                <h2>ID</h2>
                <li className="list1">{e.id}</li>
              </ul>
            </div>
            <hr/>

            <div>
              <ul>
              <h2>USER ID</h2>
                <li className="list2">{e.userId}</li>
              </ul>
            </div>
            <hr/>

            <div>
              <ul>
              <h2>TITIL</h2>
                <li className="list3">{e.title}</li>
              </ul>
            </div>
            <hr/>

            <div>
              <ul>
                <h2>BODY</h2>
                <li className="list3">{e.body}</li>
              </ul>
            </div>

            <div>
              <ul>
                <h2>POST</h2>
                <li className="list3">{e.post}</li>
              </ul>
            </div> 

          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
