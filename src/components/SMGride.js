import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";


function SMGrid(props) {
  const { datasource, title, cols } = props;

  const [Search, setSearch] = useState("");
  const [selectlist, setSelectlist] = useState("name");
  const [showperpage, setShowperpage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    endpoint: showperpage,
  });

  // useEffect(()=>{
  //   let work = list.filter(x)=>
  //   x[selectlist].includes(Search.toLocaleLowerCase())
  // );

  // setsearchfilter(work);
  // },[Search]);

  // const selecterValue = (e)=>{
  //   setSelectlist(e.target.value);
  // };

  return (
    <>
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        {datasource && Array.isArray(datasource) && (
          <table className="table table-striped">
            <thead>
              <tr>
                {cols && Array.isArray(cols) && cols.length > 0
                  ? cols.map((x, i) => <th key={i}>{x.displayName}</th>)
                  : null}
              </tr>
            </thead>
            <tbody>
              {datasource.map((x, i) => (
                <tr key={i}>
                  {cols.map((e, ind) => (
                      <td key={ind}>
                          {x[e.id]}                    
                      </td>
                    ))}

                   {/* {                
                    <td >{x.userName}</td>
                    <td >{x.message}</td>
                    <td >{x.email}</td> } */}
                 
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
export default SMGrid;
