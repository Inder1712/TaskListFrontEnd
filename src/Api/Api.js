import axios from "axios"


export const sendTask=async(data)=>{
    try {
       await axios.post("https://tasklistserver-api.onrender.com/addTask",data)
     
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getTask=async(data)=>{
    try {
        const taskList= await axios.post("https://tasklistserver-api.onrender.com/getTasks",data)
        
        return taskList.data
    } catch (error) {
        console.log(error)
        
    }
}

export const updateTask=async(data)=>{
    try {
        await axios.put("https://tasklistserver-api.onrender.com/updateTask",data)
    } catch (error) {
        console.log(error);
    }
}

export const completeTask =async(data)=>{
    try {
        await axios.put("https://tasklistserver-api.onrender.com/completeTask",data)
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}
export const deleteTask =async(data)=>{
    try {
        await axios.post("https://tasklistserver-api.onrender.com/deleteTask",data)
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}