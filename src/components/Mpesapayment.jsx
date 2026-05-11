import React, {  useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';

const Mpesapayment = () => {
  // declare state variable
  const {product} = useLocation().state || {};
  const[messages,setMessages] = useState("")
  const[error,setError] = useState("")
  const[phone,setPhone] = useState("")

  // IMAGE URL
  const img_url = "https://wayneoryx.alwaysdata.net/static/images/"

//  function for mpesa payment
const handleSubmit = async(e)=>{
  e.preventDefault()
  setMessages("Please wait as we process transaction")

  try {
    // retrieving user and product details for submission
    const formData = new FormData()
    formData.append("phone", phone)
    formData.append("ammount", product.product_cost)

    // adding base url for mpesa payment request
    const response = await axios.post("https://modcom2026.alwaysdata.net/api/mpesa_payment", formData)
    setMessages(response.data.message)
  } catch (error) {
    setError(error.message)
  }
}



  return (
    <div className='row justify-content-center'>
      <h3 className='heading'>LIPA NA MPESA</h3>
      {messages}
      {error}

      {/* Make payment body */}
 
      <div className='custom-col'>
        <div className='custom-card'>
        <img src={img_url + product.product_photo} alt={product.product_photo} className='product_imgg' />
        <p className='namess'>{product.product_name}</p>
        <p><b>{product.product_description}</b></p>
        <p className='text-muted'><b>₭ {product.product_cost}</b></p>

        {/* mpesa payment form */}
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor=""></label>
          <input
            type="tel"
            placeholder='enter phonenumber'
            className='form-control'
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />

          <button className='purchasee'>
            Make Payment
          </button>

        </form>
        </div>
      </div>
    </div>
  )
}

export default Mpesapayment