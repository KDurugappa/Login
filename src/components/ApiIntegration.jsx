import React, { useEffect, useState } from 'react'

const ApiIntegration = () => {

    const [data, setData]=useState([])

   useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then(response => response.json())
     .then(data => setData(data))
     .catch(error => console.log(error))
   
    },[])
    


  return (
    <div>
      <h1 className='text-center'>Shoping Cart</h1>
      <div className="row">
      {data.map((list,index)=> (
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

export default ApiIntegration
