import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CurdOperation = () => {

    const [curdData, setcurdData] = useState([])

    useEffect(()=>{

        async function getCurd()
        {
            let response = await axios.get('https://reqres.in/api/users')

            //console.log(response);
            setcurdData(response.data.data);

           
        }
        getCurd();

    })
  return (
    
    <div>
        <h1 className='text-center'>Our Teams</h1>
       <div className="row">
        {curdData.map((crd,key)=>{
            return( 
                <>
            <div className="col-md-4">
            <div class="card" style={{"width": "22rem"}}>
            <div class="card-body">
            <img class="card-img-top" style={{"width": "19.5rem"}}  src={crd.avatar} alt="Card image cap" />
            <center>
            <b><p>ID: {crd.id}</p></b>
            <b><p>Email: {crd.email}</p></b>
            <b><p>First Name{crd.first_name}</p></b>
            <b><p>Last Name{crd.last_name}</p></b>
            </center>
            </div>
            </div>
            </div>
            </>
            
        )
        

        })}
      </div>
    </div>
  )
}

export default CurdOperation
