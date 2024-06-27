import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {

const[product,setProduct] =useState([])
useEffect(()=>{
async function getData() {

    const response = await axios.get('https://fakestoreapi.com/products')

    setProduct(response.data);
    console.log(response);
    
}
getData();
},[])

  return (
    <div>
    <h1 className='text-center'>Shoping Cart</h1>
    <div className="row">
    {product.map((list,index)=> (
      <div className="col-md-4">
      <div class="card" style={{"width": "18rem"}}>
      <img class="card-img-top" src={list.image} alt="Card image cap" />
      <div class="card-body">
      <center>
          <h5 class="card-title">{list.title}</h5>
          <p class="card-text">Price  : {Math.round(list.price)}</p>
          <a href="#" class="btn btn-primary">Buy</a>
          </center>
      </div>
      </div>
  </div>
    ))}     
</div>
  </div>
  )
}

export default Products
