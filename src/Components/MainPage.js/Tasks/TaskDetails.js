import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { deleteTask, updateTask } from "../../../Api/Api";


export default function TaskDetails(props) {
  
  const date = new Date(props.taskList.date);
  const createAt = new Date(props.taskList.createdAt);
  const formattedDate = `${date.toLocaleDateString("en-IN", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  })} `;
  const createDate = `${createAt.toLocaleDateString("en-IN", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  })} `;
  function closeDetails(event){
    event.stopPropagation();
    props.closeDetails()
  }
  function update(event){
    event.stopPropagation();
    updateTask({
      _id: props.taskList._id,
      star: true
  });
  props.closeDetails()
  }
  function doneTask(event){
    event.stopPropagation()
  
    deleteTask({_id: props.taskList._id});
    
    
  props.closeDetails()
  }

  return (
    <div className="h-screen w-screen contrast-75 bg-black absolute top-0 left-0 flex justify-center items-center ">
      <div className=" w-[97%] contrast-100  lg:w-[22%] md:w-[37%] sm:w-[52%] h-[34%] rounded-2xl  bg-white ">
        <div className="h-[10%] w-[100%] flex  mt-[4%] ml-[4%]">
          <div className="text-black contrast-100 h-[100%] w-[80%] text-lg font-semibold bg-white ">
            {props.taskList.taskName}
          </div>
          <button onClick={closeDetails} className="mt-[1%]  contrast-100 bg-white text-black text-semibold">
            <CloseIcon />
          </button>
        </div>
        <div className="text-black text-xs mt-[4%] ml-[4%]">Task Details</div>
        <div className="mt-[2%] ml-[4%] text-black bg-white contrast-100 h-[30%] break-all overflow-y-scroll mr-[1%]">
          {props.taskList.details}
        </div>
        <div className="mt-[2%] ml-[4%]">Scheduled For : {formattedDate}</div>
        <div className="mt-[2%] ml-[4%]">Created At : {createDate}</div>
        <div className="mt-[2%] w-[100%] h-[13.15%] flex font-semibold bg-white text-black rounded-bl-2xl rounded-br-2xl">
          <button onClick={update} className="border-t-2 flex justify-center items-center border-r-2 border-black h-[100%] w-[50%]">
            Add Star
          </button>
          <button onClick={doneTask}  className="border-t-2 border-black flex justify-center items-center h-[100%] w-[50%]">
            Mark Done
          </button>
        </div>
      </div>
    </div>
  );
}
