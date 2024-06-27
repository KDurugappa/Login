import React, { useCallback, useState } from 'react'
import Header from './Header'

const UseCallback = () => {
    const [count, setCount] = useState(0)

    const newfun = useCallback(()=>{},[])

    

  return (
    <div className='text-center'>
      <h1>UseCallBack Hook</h1>
      <Header newfun={newfun} />
      <h1>{count}</h1>
      <button type="button" onClick={()=>{setCount(count+1)}}>Click Here</button>
      
    </div>
  )
}

export default UseCallback
