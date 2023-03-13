import React, { useContext, useState } from 'react'


import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask, updateTask } from '../../../Api/Api';
import TaskDetails from './TaskDetails';
import { AccountContext } from '../../../Context/Context';

export default function Completed({taskList}) {
  
    const [ setStar] = useState(taskList.star);
    const [toggleDetails,setToggleDetails]=useState(false)
    const {setTaskFlag,setSpinner}=useContext(AccountContext)

    async function toggleStar(event){
        event.stopPropagation();
        setSpinner(true)
       await updateTask({
            _id: taskList._id,
            
        });
        setStar(x => !x);
        setSpinner(false)
    }

   async function Delete(event){
        event.stopPropagation();
        setSpinner(true)
        await  deleteTask({_id: taskList._id});
        setTaskFlag(x=>!x)
        setSpinner(false)
   
    }

    function taskDetails(){
        setToggleDetails(true)
        

    }
    function closeDetails(){
        setToggleDetails(false)
       
    }

 
  return (
    <div onClick={taskDetails} className={`w-[96%] flex ml-[2%] items-center h-[10%] bg-white text-gray-800 mt-[2%]`}>
    {toggleDetails&&<TaskDetails taskList={taskList} closeDetails={closeDetails} toggleStar={toggleStar} />}
       <div className='w-[1%] ml-[2%] '>
           <button className="text-sm">
              {/* <RadioButtonUncheckedIcon/> */}
           </button>
       </div>
       <div className={` w-[89%] overflow-scroll text-gray-900`}>
           {taskList.taskName}
       </div>
       <div className='w-[10%]' onClick={Delete}>
           <button >
            <DeleteIcon/>
               
           </button>
       </div>
   </div>
  )
}
