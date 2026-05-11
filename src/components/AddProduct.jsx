import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

      // posting data to base u rl(api)
      const response = await axios.post("https://wayneoryx.alwaysdata.net/api/add_product",formData)
      setLoading("")
      setSuccess(response.data.success)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
   
    <div className='row justify-content-center'>
      <p><b>Upload your handmade Art creation and bring it into the ArtLoop store collection.</b></p>
      {error}
      <br />
      {success}
      <br />
      {loading}
      <br />
      <div className='custom-col'>
        <div className='custom-card'>
        <h3 className='text-center'><b>Add your Art</b></h3>

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Enter art name'
            className='form-control'
            value={product_name}
            onChange={(e)=> setProductName(e.target.value)}
            required
          />
          <br />

          <textarea
            placeholder='Enter art description'
            className='form-control'
            value={product_description}
            onChange={(e)=> setProductDescription(e.target.value)}
            required
          />
          <br />

          <input
            type="number"
            placeholder='Enter art cost'
            className='form-control'
            value={product_cost}
            onChange={(e)=> setProductCost(e.target.value)}
            required
          />
          <br />
          <p><b>Note that 3% of price will be deducted for platform fees.</b></p>

          <input
            type="file"
            placeholder='Enter art photo'
            className='form-control'
            accept='image/*'
            onChange={(e)=> setProductPhoto(e.target.files[0])}
            required
          />
          <br />

          <input
            type="submit"
            value="Add Artwork"
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