import React, { useEffect, useState } from 'react'

const UseEffect = () => {
 const [count, setCount] = useState(0)

 useEffect(()=>{
    setCount(count+1)
 },[])


  return (
    <div>
        <h1 className='text-center'>UseEffect Hook</h1>
      <h1 className='text-center'>Count is {count}</h1>
    </div>
  )
}

export default UseEffect
