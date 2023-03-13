import { createContext, useState } from "react"




export const AccountContext=createContext(null)
const AccountProvider=({children})=>{
    
    const [account,setAccount]=useState()
    const [listName,setListName]=useState("true")
    const [taskFlag,setTaskFlag]=useState(false)
    const [spinner,setSpinner]=useState(false)
    return(
        <AccountContext.Provider value={{
            account,setAccount,
            taskFlag,setTaskFlag,
            listName,setListName,
            spinner,setSpinner
        }}>
            {children}

            </AccountContext.Provider>
    
    )
}
export default AccountProvider;




