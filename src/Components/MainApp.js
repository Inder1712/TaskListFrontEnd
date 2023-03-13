import React, { useContext } from 'react'
import { AccountContext } from '../Context/Context'
import LoginDialogue from './Login/LoginDialogue'
import MainScreen from './MainPage.js/MainScreen'

export default function MainApp() {
  const {account}=useContext(AccountContext)
  return (
    <div>
      {account?<MainScreen/>:<LoginDialogue/>}
    </div>
  )
}
