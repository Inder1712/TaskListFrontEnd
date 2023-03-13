import React, { useContext, useEffect, useState } from "react";
import { getTask } from "../../../Api/Api";
import { AccountContext } from "../../../Context/Context";
import b from "./b.jpg";
import Completed from "./Completed";
import MapTask from "./MapTask";
import StarTask from "./StarTask";

export default function TasksContainer() {
  const [taskList, setTaskList] = useState([{}]);
  const { account, taskFlag, listName, setSpinner } = useContext(AccountContext);

  useEffect(() => {
    async function getTasks() {
      setSpinner(true);
      const tasks = await getTask({ accountId: account.sub });
      setSpinner(false);
      setTaskList(tasks);
    }

    getTasks();
  }, [taskFlag, account.sub, listName, setSpinner]);

  return (
    <div className="h-[100%] w-[100%]  ">
      {taskList.length === 0 && (
        <div className="h-[100%] w-[100%] flex flex-col items-center text-center">
          <img className="mt-[30%] w-[25%]" src={b} alt="Add Tasks" />
          <div className="mt-[5%] text-lg font-semibold">No tasks yet</div>
          Add your to-dos and keep track of <br /> them across Google Workspace
        </div>
      )}
      {taskList.length > 0 && (
        <div className="h-[100%] w-[100%] overflow-scroll">
          {taskList
            .filter(task => {
              if (listName === "Completed") {
                return task.complete;
              } else if (listName === "My tasks") {
                return !task.complete && (task.star || (!task.star && !task.parent));
              } else {
                return task.star && !task.complete;
              }
            })
            .map((task) => {
              if (listName === "Completed") {
                return <Completed taskList={task} key={task._id} />;
              } else if (listName === "My tasks") {
                return <MapTask taskList={task} key={task._id} />;
              } else if(listName==="star") {
                return <StarTask taskList={task} key={task._id} />;
              }
            })}
        </div>
      )}
    </div>
  );
}
