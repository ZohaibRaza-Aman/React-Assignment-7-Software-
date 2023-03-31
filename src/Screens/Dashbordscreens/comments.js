import { useEffect, useState } from "react";
import { Get } from "../../config/apibasemethods";
import SMSearchbar from './../../components/SMSerchbar';
import SMGrid from './../../components/SMGride';

function CommentsScreen() {
  const [listData, setListData] = useState([]);

  let cols = [
    {
      displayName: "Id",
      key: "id",
    },
    {
      displayName: "Full Name",
      key: "namouteRe",
      searchAble: true,
    },
    {
      displayName: "User Email",
      key: "email",
      searchAble: true,
    },
    {
      displayName: "Content",
      key: "body",
    },
    {
      displayName: "Post",
      key: "postId",
    },
  ];

  let getData = () => {
    Get("comments")
      .then((res) => {
        if (res.data) {
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
  return (
    <>
      <div>
        <SMSearchbar
          label="Search Roll #"
          searchList={[
            {
              displayName: "User Name",
              key: "name",
            },
            {
              displayName: "User Email",
              key: "email",
            },
          ]}
          onSearch={(selectVal, inputVal) => {
            console.log(selectVal, inputVal);
          }}
        />
      </div>
      <SMGrid title="Comments" datasource={listData} cols={cols} />
    </>
  );
}
export default CommentsScreen;