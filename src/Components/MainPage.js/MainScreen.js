import React, { useContext } from "react";
import { AccountContext } from "../../Context/Context";
import Spinner from "../Spinner";
import Footer from "./Footer/Footer";
import Header from "./Header";
import AllOptions from "./TaskOptions/AllOptions";
import TasksContainer from "./Tasks/TasksContainer";

export default function MainScreen() {
  const{spinner}=useContext(AccountContext)
  return (
    <div className="h-screen bg-gray-300 w-screen flex flex-col justify-center items-center">
    <div className="absolute">

      {spinner&&<Spinner/>}
    </div>
      <div className=" w-[320px] h-[60px] ">
        <Header />
      </div>
      <div className="w-[320px]  h-[60px] bg-white  ">
        <AllOptions />
      </div>
      <div className=" w-[320px]  bg-white h-[450px]">
        <TasksContainer />
      </div>
      <div className="w-[320px]  h-[70px]"><Footer/></div>
    </div>
  );
}
