import React, { useContext, useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Calender from "react-calendar";
import { AccountContext } from "../../../Context/Context";
import { sendTask } from "../../../Api/Api";

export default function InputTab({ closeInput }) {
  const { account, setTaskFlag, setSpinner } = useContext(AccountContext);

  const [date, setDate] = useState(new Date());

  const [toggleDetails, setToggleDetails] = useState(true);
  const [star, setStar] = useState(true);
  const [flipCalender, setFlipCalender] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  function flipDetails() {
    setToggleDetails((x) => !x);
  }
  function flipStar() {
    setStar((x) => !x);
  }

  function saveData(date) {
    setDate(date);
    setFlipCalender(false);
  }
  function showClander() {
    setFlipCalender(true);
  }

  async function sendData() {
    if (taskName) {
      const data = {
        accountId: account.sub,
        taskName: taskName,
        details: taskDetails,
        star: star,
        listId: "My Tasks",
        date: date,
        complete: false,
      };
      setSpinner(true);
      await sendTask(data);
      setSpinner(false)
    }
    closeInput();
    setTaskFlag((x) => !x);
  }
  function changeTaskName(event) {
    setTaskName(event.target.value);
  }
  function details(event) {
    setTaskDetails(event.target.value);
  }

  return (
    <div className="h-screen bg-black contrast-75  w-screen absolute top-0 right-0 flex justify-center items-center">
      <div className=" w-[97%] items-center contrast-100  lg:w-[22%] md:w-[37%] sm:w-[52%] h-[34%] rounded-2xl flex flex-col bg-gray-200">
        <div className="w-[100%] flex justify-center items-center h-[15%] mt-[2%]">
          New Task
          {/* Change it to dynamic */}
          <button
            onClick={closeInput}
            className="w-[70%] flex items-end justify-end"
          >
            <ClearIcon />
          </button>
        </div>
        <div className="w-[90%] h-[15%] flex mt-[2%]  justify-center items-center ">
          <input
            placeholder="New Task"
            onChange={changeTaskName}
            className="text-gray-900 h-[100%] w-[100%] bg-gray-200"
            type="text"
          />
        </div>
        {toggleDetails && (
          <div className="w-[90%] h-[15%] mt-[2%]">
            <input
              placeholder="Add Details"
              onChange={details}
              className="text-gray-900 text-sm h-[100%] w-[100%] bg-gray-200"
              type="text"
            />
          </div>
        )}
        <div className="flex mt-[2%] space-x-2 w-[90%] h-[15%]">
          <button onClick={flipDetails}>
            <SortIcon />
          </button>
          <button onClick={showClander}>
            <AccessTimeIcon />
          </button>
          <div className=" w-[15%] mt-[1%] absolute">
            {flipCalender && <Calender onChange={saveData} value={date} />}
          </div>
          <button onClick={flipStar}>
            {star ? <StarIcon /> : <StarOutlineIcon />}
          </button>
          <div className="flex justify-end items-end w-[80%] ">
            <button className="" onClick={sendData}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
