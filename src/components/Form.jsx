import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const Form = () => {
    const[userName, setUserName] =useState('');
    const[passWord, setPassword] =useState('');
    const[errors, setErrors]=useState({
        userName:'',
        passWord:''
    })

   function handelSubmit(e)
   {
    e.preventDefault();
     if(userName.trim()===""){
        setErrors((errors)=>({...errors,userName:"Enter your User Name"}))
        
     }
     else{
        setErrors((errors)=>({...errors,userName:''}))
     }

     if(passWord.trim()===""){
        setErrors((errors)=>({...errors,passWord:"Enter your password"}))
     }
     else if(passWord.trim().length<8){
        setErrors((errors)=>({...errors,passWord:"Password is minimum 8 char"}))
     }
     else{
        //setErrors((errors)=>({...errors,passWord:''}))
        setErrors(toast.success('Login Successfully!'))
        setTimeout(()=>{ 
            window.location.reload();
        }, 5000);
       
     }
     
   }

  return (
    <>
     <Toaster />
    <div className="mainWrap">
    <div className=' mainDiv'>
        <h2 className='text-primary text-center'>Log In</h2>

      <form action="">
        <div className="mt-3">
        <label>User Name</label>
        <input type="text" className='form-control' placeholder='Username' value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
        {errors.userName&&<span className='text-danger'>{errors.userName}</span>}
        </div>
        <div className="mt-3">
        <label>Password</label>
        <input type="password" className='form-control' placeholder='Password' value={passWord} onChange={(r)=>{setPassword(r.target.value)}}/>
        {errors.passWord&&<span className='text-danger'>{errors.passWord}</span>}
        </div>
       <button className='btn btn-primary w-100' onClick={handelSubmit}> Submit</button>
        
      </form>

    </div>
    </div>
    </>
  )
}

export default Form
