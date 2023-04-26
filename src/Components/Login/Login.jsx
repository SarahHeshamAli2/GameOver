import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import $ from "jquery"
export default function Login({getUserDataDecoded}) {
  const [isLoad, setIsLoad] = useState(false)
   const navigate = useNavigate()
async function login () {
  setIsLoad(true)
  try {
  
    const {data}=await axios.post (`https://route-ecommerce.onrender.com/api/v1/auth/signin`,{
  "email":document.getElementById("email").value,
  "password":document.getElementById("password").value,

})
console.log(data);
setIsLoad(false)
if(data.message == "success") {
navigate("/")
localStorage.setItem("tkn",data.token)
getUserDataDecoded()
}
  } catch (error) {
    $(".loginInvalid").fadeIn(500,function(){
      setTimeout(() => {
        $(".loginInvalid").fadeOut(500)
      }, 1000);
    })
    setIsLoad(false)
  }

}


  return <>
  
  <div className="container my-3">
    <div className="row align-items-center reg-row ">
      <div className="col-md-6 p-0">
        <div className="inner-col reg-img">
        </div>
      </div>
      <div className="col-md-6">
        <div className="inner-col py-5 text-center">
          <img src={require("../../images/logo.png")} width={100} alt="" />
      <h4 className='text-center '>
      Log in to GameOver</h4>
<form action="" className='reg-form' onSubmit={function(e){e.preventDefault()}}>

<input type="email" className='form-control my-4' placeholder='Email Adress' id='email'/>
<input type="password" className='form-control my-4 re' placeholder='Password' id='password'/>
{isLoad ?<button className='btn btn-secondary w-100 border border-1 border-dark'><i class="fa-solid fa-arrows-spin fa-spin"></i></button>
: <button onClick={login}  className='btn btn-secondary w-100 border border-1 border-dark'>Login</button>
}
<div style={{display:"none"}} className='alert alert-danger my-2 loginInvalid'>Invalid email or password</div>

</form>
<div className="border border-bottom my-4 borderForm"></div>
<span >First time ? <Link className='log' to={"/register"}>Sign up <i class="fa-solid fa-chevron-right"></i></Link></span>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  </>
}
