import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {useState} from "react"

const SinglePost = () => {
  const params = useParams();
  console.log(params);

  let api = `https://jsonplaceholder.typicode.com/photos/${params.id}`;

    const [listData, setListData] = useState([]);

    let getData = () => {
      axios
        .get(api)
        .then((res) => {
          console.log(res);
          setListData([...res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
      getData();
    }, []);

  return (
    <>
    <div>singlePost</div>
    {listData.map((x,i)=>{
      <div key={i}>
      <p>{x`${params.id}`}</p>
      </div>
    })}
    </>
  );
};

export default SinglePost;