import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header";
import AllOptions from "./TaskOptions/AllOptions";
import TasksContainer from "./Tasks/TasksContainer";

export default function MainScreen() {
  return (
    <div className="h-screen bg-gray-300 w-screen flex flex-col justify-center items-center">
      <div className=" w-[400px] h-[60px] ">
        <Header />
      </div>
      <div className="w-[400px]  h-[60px] bg-white  ">
        <AllOptions />
      </div>
      <div className=" w-[400px]  bg-white h-[450px]">
        <TasksContainer />
      </div>
      <div className="w-[400px]  h-[70px]"><Footer/></div>
    </div>
  );
}
