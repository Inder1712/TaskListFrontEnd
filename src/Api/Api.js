import axios from "axios"

export const sendTask=async(data)=>{
    try {
       await axios.post("http://192.168.118.246:8000/addTask",data)
     
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getTask=async(data)=>{
    try {
        const taskList= await axios.post("http://192.168.118.246:8000/getTasks",data)
        
        return taskList.data
    } catch (error) {
        console.log(error)
        
    }
}

export const updateTask=async(data)=>{
    try {
        await axios.put("http://192.168.118.246:8000/updateTask",data)
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask =async(data)=>{
    try {
        await axios.post("http://192.168.118.246:8000/deleteTask",data)
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}