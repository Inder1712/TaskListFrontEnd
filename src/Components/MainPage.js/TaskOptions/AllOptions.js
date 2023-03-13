import React, { useContext, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import  { AccountContext } from "../../../Context/Context";
export default function AllOptions() {
  const{setListName,listName}=useContext(AccountContext)
  const [optionsCount, setOptionsCount] = useState(1);
  function starIcon() {
    setOptionsCount(1);
    setListName("star")
   
  }
  function myTasks() {
    setOptionsCount(2);
    setListName("My tasks")
  }
  // function newList() {
  //   setOptionsCount(3);
  // }
  return (
    <div className="h-[100%] w-[100%] flex">
      <button
        onClick={starIcon}
        className={`w-[10%] flex flex-col justify-center items-center ${optionsCount===1?"text-blue-900":"text-black"}`}
      >
        <StarIcon />
        {optionsCount === 1 && (
          <div className="h-[10%] w-[50%] bg-blue-900"></div>
        )}
      </button>

      <button
        onClick={myTasks}
        className={`w-[30%] flex flex-col justify-center items-center ${optionsCount===2?"text-blue-900":"text-black"}`}
      >
        My Tasks
        {optionsCount === 2 && (
          <div className="h-[10%] w-[70%] bg-blue-900"></div>
        )}
      </button>

      {/* <button
        onClick={newList}
        className={`w-[30%] flex flex-col justify-center items-center ${optionsCount===3?"text-blue-900":"text-black"}`}
      >
        + New List
        {optionsCount === 3 && (
          <div className="h-[10%] w-[70%] bg-blue-900"></div>
        )}
      </button> */}
    </div>
  );
}
