import React, { useMemo, useState } from 'react'


const UseMemo = () => {
    
const [number, setNamber] = useState(0)
const [counter,setCounter] =useState(0)

function cubeNum(num){

    console.log("Calucation Done!");
    return Math.pow(num, 3)

}

const result = useMemo(()=>{
    return cubeNum(number);
},[number])

  return (
    <div className='text-center'>
      <input type="number" onChange={(e)=>setNamber(e.target.value)} /><br />
      <h1>Cube number is :{result}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>Click Here</button>
      <h1>{counter}</h1>
    </div>
  )
}

export default UseMemo
