import React, { useEffect, useState } from 'react'

const RecordsData = () => {

const[userdata, setuserData] = useState([])

useEffect(()=>{

    fetch('https://fakestoreapi.com/users')
    .then(response => response.json())
    .then(data => setuserData(data))
    .catch(error => console.log(error))

    
})

  return (
    <div>
        <h1 className='text-center'>User Data</h1><br />
      <div className="tableData">
        
        <table>
            <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>     
                <th>Firstname</th>
                <th>LastName</th> 
                <th>Address</th>  
                <th>Phone</th>         
            </tr>
            {userdata.map((val,key)=>{

                return(
                    <tr>
                       <th>{val.id}</th>
                       <th>{val.email}</th>
                       <th>{val.username}</th>
                       <th>{val.password}</th>
                       <th>{val.name.firstname}</th>
                       <th>{val.name.lastname}</th>
                       <th>{val.address.city}{val.address.city},{val.address.street},{val.address.number},{val.address.zipcode}</th>
                       <th>{val.phone}</th>
                       

                    </tr>
                    
                )
            })}

        </table>

      </div>
    </div>
  )
}

export default RecordsData
