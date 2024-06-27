// -----------------------------Accessing the DOM Element Directly-----------------------
// import React, { useRef } from 'react'

// const UseRef = () => {
//     const inputEl = useRef()
//     const handerButton= ()=>{
//         inputEl.current.style.width="400px"
//         inputEl.current.focus();
        
//     }
    
//   return (
//     <div className='text-center'>
//         <h1>UseRef Hook</h1>
//       <input type="text" ref={inputEl} />
//       <button onClick={handerButton}>Click here</button>
//     </div>
//   )
// }

// export default UseRef

// -----------------------------Createing the muteable variable -----------------------
import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
const [name, setName] = useState()

const count = useRef(0)

useEffect(()=>{
    count.current = count.current+1;
})

  return (
    <div className='text-center'>
      <input type="text "  onChange={(e)=>setName(e.currentTarget.value)}/>
      <h1>input value is :{name}</h1>
      <h2> {count.current}</h2>
    </div>
  )
}

export default UseRef
