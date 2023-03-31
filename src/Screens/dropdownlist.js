import "../App.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";

function DropDL(props) {
  const { label, selectedOption, setSelectedOption, options } = props;
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 225 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
          label={label}
          onChange={handleChange}
        >
          {options.length > 0 &&
            options.map((option) => {
              return <MenuItem value={option}>{option}</MenuItem>;
            })}
        </Select>
      </FormControl>
    </Box>
    // <div className="dropdown">
    //   <div className="heading"></div>
    //   {label && <div className="dropdon-label">{label}</div>}
    //   <div className="dropdown-component">
    //     <div
    //       className="selected-options-wrapper"
    //       onClick={() => setOptionVisible(!isOptionvisible)}
    //     >
    //       <div>{selectedOption}</div>
    //       {isOptionvisible ? (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="icon icon-tabler icon-tabler-chevron-up"
    //           width="44"
    //           height="44"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="#5c6dff"
    //           fill="none"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         >
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <polyline points="6 15 12 9 18 15" />
    //         </svg>
    //       ) : (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="icon icon-tabler icon-tabler-chevron-down"
    //           width="44"
    //           height="44"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="#5c6dff"
    //           fill="none"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         >
    //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //           <polyline points="6 9 12 15 18 9" />
    //         </svg>
    //       )}
    //     </div>
    //     {isOptionvisible && (
    //     <div className="dropdown-options">
    //         {options.length > 0 &&
    //           options.map((option) => (
    //             <div
    //               onClick={() => handleSelected(option)}
    //               className="dropdow-option"
    //             >
    //               {option}
    //             </div>
    //           ))}

    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}

export default DropDL;
