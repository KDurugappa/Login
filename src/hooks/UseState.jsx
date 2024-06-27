import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState('');


    function addition(){
        setCount(count+1);

    }

    function sub(){
        setCount(count-1);

    }
  return (
    <div>
      <h1 className='text-center'>Use State Hook</h1>
      <div className="row useStateMain">
        
      <button className="btn btn-primary" type='button' onClick={sub}>Sub</button>
      <input   type="text" onChange={(e)=>setName(e.target.value)} />
      <h1>{name}{count}</h1>
      <button  className="btn btn-primary" type='button' onClick={addition}>Add</button>
      </div>
    </div>
  )
}

export default UseState
