import React, { useContext, useEffect, useState } from "react";
import { getTask } from "../../../Api/Api";
import { AccountContext } from "../../../Context/Context";
import b from "./b.jpg";
import MapTask from "./MapTask";

export default function TasksContainer() {
  const [taskList, setTaskList,] = useState([{}]);
  const { account,taskFlag,listName} = useContext(AccountContext);

  useEffect(() => {
    async function getTasks() {
      const tasks = await getTask({ accountId: account.sub });
      setTaskList(tasks);
    }
    
   

    getTasks();
  }, [taskFlag,account.sub,listName]);
 

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
  .filter(task => listName==="My tasks" || task.star) // filter based on listName and star property
  .map((task) => (
    <MapTask taskList={task} key={task._id} />
))}
        </div>
      )}
    </div>
  );
}
