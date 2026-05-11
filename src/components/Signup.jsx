import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';


const Signup = () => {
      // Declaring state variables
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")

  // Status messages
  const[loading,setLoading] = useState("")
  const[error,setError] = useState("")
  const[success,setSuccess] = useState("")

  // Function to signup
  const submitSignupDetails = async(e)=>{
    e.preventDefault()
    setLoading("Please wait...")
    try {
      const formData = new FormData();
      formData.append("username",username);
      formData.append("email",email);
      formData.append("phone",phone);
      formData.append("password",password);

      // Adding base url
      const response = await axios.post("https://wayneoryx.alwaysdata.net/api/signup",formData);
      setSuccess(response.data.success)
      setLoading("")

      // Reset values
      setPhone("")
      setUsername("")
      setEmail("")
      setPassword("")

    } catch (error) {
      setError(error.message)
     
    }
  }

  return (
     <div className='row justify-content-center'>
     
          <div className='custom-col'>
            <br /><br />
            <div className='custom-card'>
            <h3 className='text-center'><b>Signup</b></h3>

              <form action="" onSubmit={submitSignupDetails}>                                  
                  <input
                    type="text"
                    placeholder='Enter Username'
                    className='form-control'
                    onChange={(e)=>setUsername(e.target.value)}
                   />
                   <br />    
             
                  <input
                    type="tel"
                    placeholder='Enter Phonenumber'
                    className='form-control'
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                  <br />
               
                  <input
                    type="email"
                    placeholder='Enter Email'
                    className='form-control'
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <br />
                 
                  <input
                    type="password"
                    placeholder='Enter Password'
                    className='form-control'
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <br />
                 
                  <input
                    type="submit"
                    value="Done"
                    className='purchasee'
                  />
                  <br />
             
                  {/* incase someone has an account */}
                  <Link to='/signin'>Already have an account? Signin</Link>
              </form>
            </div>
          </div>
        </div>
   
  )
}

export default Signup