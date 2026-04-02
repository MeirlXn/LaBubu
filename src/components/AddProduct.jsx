import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {

   // declaring sate variables
  const[product_name,setProductName]= useState("")
  const[product_photo,setProductPhoto]= useState("")
  const[product_cost,setProductCost]= useState("")
  const[product_description,setProductDescription]= useState("")

  // status messages
  const[loading,setLoading] = useState("")
  const[error,setError] = useState("")
  const[success,setSuccess] = useState("")

  // functoin to add products
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading("Please wait...");
    try {
      // retrieve product details
      const formData = new FormData();
      formData.append("product_name",product_name)
      formData.append("product_description",product_description)
      formData.append("product_cost",product_cost)
      formData.append("product_photo",product_photo)

      // posting data to base url(api)
      const response = await axios.post("https://wayneoryx.alwaysdata.net/api/add_product",formData)
      setLoading("")
      setSuccess(response.data.success)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    
    <div className='row justify-content-center'>
      <p><b>Upload <span className='your-labubu'>your</span> handmade creation and bring it into the LaBubu store collection.</b></p>
      {error}
      <br />
      {success}
      <br />
      {loading}
      <br />
      <div className='custom-col'>
        <div className='custom-card'>
        <h3 className='text-center'><b>Add your LaBubu</b></h3>

        <form action="" onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder='Enter product name' 
            className='form-control'
            value={product_name}
            onChange={(e)=> setProductName(e.target.value)}
            required
          />
          <br />

          <textarea 
            placeholder='Enter product description' 
            className='form-control'
            value={product_description}
            onChange={(e)=> setProductDescription(e.target.value)}
            required
          />
          <br />

          <input 
            type="number" 
            placeholder='Enter product cost' 
            className='form-control'
            value={product_cost}
            onChange={(e)=> setProductCost(e.target.value)}
            required
          />
          <br />

          <input 
            type="file" 
            placeholder='Enter product photo' 
            className='form-control'
            accept='image/*'
            onChange={(e)=> setProductPhoto(e.target.files[0])}
            required
          />
          <br />

          <input 
            type="submit" 
            value="Add LaBubu" 
            className='purchasee'
          />
          <br />
        </form>
        </div>
      </div>
    </div>
  )
}


export default AddProduct