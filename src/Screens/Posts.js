import axios from "axios";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
function Posts() {
  const navigate = useNavigate();
  
  const [listData, setListData] = useState([]);
  let api = "https://jsonplaceholder.typicode.com/photos";

 
  let getData = () => {
    axios
      .get(api)
      .then((res) => {
        if(res.data){
          setListData([...res.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  const moveToSinglePost = (i) => {
  //  navigate(`/singlepost/${i}`);
  };
  const handleClick = (x) =>{ 
    navigate(`/singlepost/:${x.id}`)
  };

  return (
    
    <>
      <h1>Post</h1>
      {listData.map((x, i) => (
        <div  key={i}>
          <p>{x.title}</p>
          <img  src={x.thumbnailUrl} onClick={()=>handleClick(x)} width="300px" alt="" />
        </div>
      ))}
    </>
  );
}

export default Posts;