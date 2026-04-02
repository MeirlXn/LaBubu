import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
   // Declaring state variables
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  // Status messages
  const[error,setError] = useState("")
  const[success,setSuccess] = useState("")
  const[loading,setLoading] = useState("")

  // navigation
  const navigate = useNavigate()

  // function to signin
  const handleSignin = async(e) =>{
    e.preventDefault()
    setLoading("Please wait...")
    try {
      // retreaving user details
      const formData = new FormData();
      formData.append("email",email)
      formData.append("password",password)

      // Adding base url
      const response = await axios.post("https://wayneoryx.alwaysdata.net/api/signin",formData);
      if(response.data.user){
        setSuccess(response.data.message)
        setLoading("")
        localStorage.setItem("user",JSON.stringify(response.data.user))
        navigate("/")
      }else{
        setError(response.data.message)
        setLoading("")
      }
    } catch (error) {
      setError(error.message)

    }
  }
  return (
    
    <div className='row justify-content-center'>
      <div className='custom-col'>
        <br /><br />
        <div className='custom-card'>
        <h3 className='text-center'><b>Login</b></h3>

        <h4 className="text-success">{success}</h4>
         <h4 className="text-danger">{error}</h4>
          <h4 className="text-info">{loading}</h4>


        <form action="" onSubmit={handleSignin}>
          <input type="email" placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br />
          <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/><br />
           <input type="submit" value="Login" className='purchasee'/><br />

           <Link to='/signup'>Dont have an account? Signup</Link>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Signin