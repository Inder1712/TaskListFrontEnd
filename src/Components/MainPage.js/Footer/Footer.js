import React, { useState } from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InputTab from "./InputTab";

export default function Footer() {
  const [input,setInput]=useState(false)
  function closeInput(){
    setInput(false)
  }
  return (
    <div className="h-[100%]  w-[100%] bg-gray-200 flex items-center">
      { input&&<div className="h-screen absolute top-0 left-0  w-screen bg-black">
        
        <InputTab closeInput={closeInput}/>
        </div>}
      <button className=" text-gray-700 ml-[4%] ">
        <ListAltIcon style={{ fontSize: "30px" }} />
      </button>
      <button className="text-gray-700 ml-[3%] ">
        <FilterListOutlinedIcon style={{ fontSize: "30px" }} />
      </button>
      <button className="text-gray-700 ml-[3%] ">
        <MoreHorizIcon style={{ fontSize: "30px" }} />
      </button>
      <div className="w-[13%] ml-[46%] h-[100%] flex justify-center items-center ">
        <button onClick={()=>setInput(true)} className="w-[45px] h-[45px] rounded-2xl bg-indigo-300 text-gray-700 flex justify-center items-center text-4xl">
          +
        </button>
      </div>
    </div>
  );
}
