
import d from "./d.jpg"
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"
import { useContext } from "react";
import { AccountContext } from "../../Context/Context";
export default function LoginDialogue() {
  
const {setAccount}=useContext(AccountContext)
  function loginSuccess(res){
    setAccount(jwt_decode(res.credential));
    
  }

  function loginError(){
    console.log("login Error");
  }



  return (
    <div className='h-screen w-screen flex bg-[#FDFBFE] justify-center items-center'>
      <div className=' flex flex-col justify-center items-center  w-[400px]  h-[800px] '>
        <img className='h-[50%] w-[100%]' src={d} alt="img" />
        <div className='text-[#37353A] font-semibold text-xl'>Welcome To Tasks</div>
        <div className='text-center w-[80%] text-[#37353A]'>Keep track of important things that you need to get done in one place</div>
        <div className='  w-[40%] text-white h-[6%] flex justify-center items-center rounded-2xl mt-[2%]' >
          
          
         <GoogleLogin onSuccess={loginSuccess} onError={loginError} />
          </div>
      </div>
    </div>
  )
}
