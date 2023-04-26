import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import $ from "jquery"
export default function Register() {
  const [isLoad, setIsLoad] = useState(false)
   const navigate = useNavigate()
async function signUp () {
  setIsLoad(true)
  try {
  
    const {data}=await axios.post (`https://route-ecommerce.onrender.com/api/v1/auth/signup`,{
  "name": document.getElementById("fName").value,
  "email":document.getElementById("email").value,
  "password":document.getElementById("password").value,
  "rePassword":document.getElementById("rePassword").value,
  "phone": document.getElementById("phone").value
})
console.log(data);
setIsLoad(false)
if(data.message == "success") {
navigate("/login")
}
  } catch (error) {
    
  }

}
function validateRePassword () {
  if(document.getElementById("password").value == document.getElementById("rePassword").value){
    $(".noMatch").fadeOut(100)

    return true
  }
else {
  $(".noMatch").fadeIn(500)
  return false
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
        <div className="inner-col py-5">
      <h4 className='text-center '>
Create My Account!</h4>
<form action="" className='reg-form' onSubmit={function(e){e.preventDefault()}}>
<div className='d-flex '>
<input type="text" className='form-control w-50 ' placeholder='first name' id='fName'/>
  <input type="text" className='form-control w-50 ms-4' placeholder='last name'/>
</div>
<input type="email" className='form-control my-4' placeholder='Email Adress' id='email'/>
<input type="number" className='form-control my-4 re' placeholder='Phone' id='phone'/>
<input type="password" className='form-control my-4 re' placeholder='Password' id='password'/>
<input type="password" onChange={validateRePassword } className='form-control my-4 re' placeholder='re password' id='rePassword'/>
<div style={{display:"none"}} className='alert alert-danger noMatch'>repassword doesn't match password</div>
{isLoad ?<button className='btn btn-secondary w-100 border border-1 border-dark'><i class="fa-solid fa-arrows-spin fa-spin"></i></button>
: <button onClick={signUp}  className='btn btn-secondary w-100 border border-1 border-dark'>Create Account</button>
}

</form>
<p className='terms my-4'>This site is protected by reCAPTCHA and the Google <Link className='mx-2' to={"https://policies.google.com/privacy"}>Privacy Policy </Link > and <Link className='mx-2' to={"https://policies.google.com/terms"}>Terms of Service</Link>apply</p>
<div className="border border-bottom my-4 borderForm"></div>
<span >Already a member ? <Link className='log' to={"/login"}>Login <i class="fa-solid fa-chevron-right"></i></Link></span>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  </>
}
