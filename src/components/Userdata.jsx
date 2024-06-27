import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Userdata = () => {

    const[name, setRecords]= useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        
        .then(data => setRecords(data))
         .then((json) => console.log(json));
      //   async function getData() {

      //     const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      //     if (res?.data?.content) {
      //       setRecords(res.data.content);
      //     }
          
      //     console.log(res);
          
      // }
      // getData();
      },[])
    
  return (
    <div>

<ul>

  <li>{name.id}</li>
  <li>{name.name}</li>
  <li>{name.address?.street}</li>
  <li>{name.address?.city}</li>
  <li>{name.phone}</li>

</ul>

{/* {Object.keys(name).map(x=> 

 (
  <span>Value: {x}</span>
)

  )} */}

      
    </div>
  )
}

export default Userdata
