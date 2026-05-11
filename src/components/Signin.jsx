import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {

// State
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const [error, setError] = useState("")
const [success, setSuccess] = useState("")
const [loading, setLoading] = useState(false)

// Signin function
const handleSignin = async (e) => {
e.preventDefault()

// reset messages
setError("")
setSuccess("")
setLoading(true)

try {
const formData = new FormData()
formData.append("email", email)
formData.append("password", password)

const response = await axios.post(
"https://wayneoryx.alwaysdata.net/api/signin",
formData
)

if (response.data.user) {
setSuccess(response.data.message)

// save user
localStorage.setItem("user", JSON.stringify(response.data.user))

// reload app
window.location.href = "/"
} else {
setError(response.data.message)
setLoading(false)
}

} catch (err) {
setError("Something went wrong. Try again.")
setLoading(false)
}
}

return (
<div className='row justify-content-center'>
<div className='custom-col'>
<br /><br />

<div className='custom-card'>
<h3 className='text-center'><b>Login</b></h3>

{success && <h4 className="text-success">{success}</h4>}
{error && <h4 className="text-danger">{error}</h4>}
{loading && <h4 className="text-info">Please wait...</h4>}

<form onSubmit={handleSignin}>
<input
type="email"
placeholder='Enter Email'
className='form-control'
required
onChange={(e) => setEmail(e.target.value)}
/>
<br />

<input
type="password"
placeholder='Enter password'
className='form-control'
required
onChange={(e) => setPassword(e.target.value)}
/>
<br />

<input
type="submit"
value="Login"
className='purchasee'
disabled={loading}
/>
<br />

<Link to='/signup'>Dont have an account? Signup</Link>
</form>
</div>
</div>
</div>
)
}

export default Signin
