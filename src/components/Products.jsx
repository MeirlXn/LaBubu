import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';

const Products = () => {
  // Declaring state variables
  const[products,setProducts] = useState([])
  const[loading,setLoading] = useState("")
  const[error,setError] = useState("")

  // navigation
  const navigate = useNavigate()

  // IMAGE URL
  const img_url = "https://wayneoryx.alwaysdata.net/static/images/"


  // function to retrieve products
  const getProducts = async()=>{
    setLoading("Please wait...")
    try {
      const response = await axios.get("https://wayneoryx.alwaysdata.net/api/get_products_details")
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError(error.message)
    }
  }
  // using useEffect to automatically retrieve products from database
  useEffect(()=>{
    getProducts()
  },[]);


  return (
    <div className='row'>
      <h3 className='heading'>Available Products</h3>
      {loading}
      {error}

      {/* Products card design */}
      {products.map((product)=>(
      
      <div className='col-md-3 justify-content-center mb-4'>
        <div className='my-card'>
          <img src={img_url + product.product_photo}alt="product.product_photo" className='product_img' />

          {/* Product details */}
          <div className='card-body'>
            <br />
            <h5 className='namess'><b>{product.product_name}</b></h5>
            <p><b>{product.product_description}</b></p>
            <b>₭ {product.product_cost}</b><br />

            <button className='purchase' onClick={()=>navigate("/makepayment",{state:{product}})}>Purchase now</button>
         
          </div>  
        </div>        
      </div>
      
      ))}
    </div>
  )
}

export default Products