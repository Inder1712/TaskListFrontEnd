import React, { useContext } from 'react'
import { AccountContext } from '../../Context/Context'

export default function Header() {
    const{account}=useContext(AccountContext)
  return (
    <div className='bg-white flex  h-[100%] w-[100%] '>
        <div className='w-[85%] flex justify-center items-center text-2xl font-semibold' >Tasks</div>
        <div className='w-[15%] flex justify-center items-center '>
            <img src={account.picture} alt={"profile"} className="rounded-full h-[45px] w-[45px]"/>
        </div>

    </div>
  )
}
