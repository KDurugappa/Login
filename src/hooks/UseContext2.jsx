import React, { useCallback, useContext } from 'react'

import { appContext } from '../App'
const UseContext2 = () => {
    const data = useContext(appContext)
  return (
    <div className='text-center'>
      <h1>Sencond Context</h1>
      <h3>{data.Fname}</h3>
      <h3>{data.age}</h3>
    </div>
  )
}

export default UseContext2
