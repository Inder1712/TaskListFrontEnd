import React, { useContext, useState } from 'react'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import { deleteTask, updateTask } from '../../../Api/Api';
import TaskDetails from './TaskDetails';
import { AccountContext } from '../../../Context/Context';

export default function MapTask({taskList}) {
  
    const [star, setStar] = useState(taskList.star);
    const [toggleDetails,setToggleDetails]=useState(false)
    const {setTaskFlag}=useContext(AccountContext)

    async function toggleStar(event){
        event.stopPropagation();
       await updateTask({
            _id: taskList._id,
            
        });
        setStar(x => !x);
    }

   async function toggleCircle(event){
        event.stopPropagation();
        setTaskFlag(x=>!x)
      
      await  deleteTask({_id: taskList._id});
   
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
            <div className='w-[10%] ml-[2%] '>
                <button onClick={toggleCircle} className="text-sm">
                   <RadioButtonUncheckedIcon/>
                </button>
            </div>
            <div className={` w-[80%] overflow-scroll text-gray-900`}>
                {taskList.taskName}
            </div>
            <div className='w-[10%]'>
                <button onClick={toggleStar}>
                    {star ? <StarRateIcon/> :<StarBorderIcon/> }
                </button>
            </div>
        </div>
    );
}
