import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { completeTask} from "../../../Api/Api";
import { AccountContext } from "../../../Context/Context";


export default function TaskDetails(props) {
  
  const date = new Date(props.taskList.date);
  const {setSpinner ,setTaskFlag}=useContext(AccountContext)
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

  async function doneTask(event){
    event.stopPropagation()
  
    setSpinner(true)
   await completeTask({_id: props.taskList._id});
   setTaskFlag(x=>!x)
   
   setSpinner(false)
    
    
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
          
          <button onClick={doneTask}  className="border-t-2 border-black flex justify-center items-center h-[100%] w-[100%]">
            Mark Done
          </button>
        </div>
      </div>
    </div>
  );
}
