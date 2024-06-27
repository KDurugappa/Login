import React, { createContext } from 'react'
import './App.css'

import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Form from './components/Form'
import ApiIntegration from './components/ApiIntegration'
import Userdata from './components/Userdata'
import RecordsData from './components/RecordsData'
import Products from './components/Products'
import CurdOperation from './components/CurdOperation'
import UseState from './hooks/UseState'
import UseEffect from './hooks/UseEffect'
import UseContext1 from './hooks/UseContext1'
import UseRef from './hooks/UseRef'
import UseMemo from './hooks/UseMemo'
import UseCallback from './hooks/UseCallback'


export const appContext = createContext()

function App() {
  let data ={
    Fname:"Durugappa",
    age:26
    }
  return (
    <div>
      {/* <UseState /><br />
      <hr style={{backgroundColor: "black"}} />
      <UseEffect /> <br />
      <hr style={{backgroundColor: "black"}} />
<appContext.Provider value={data}>
    <UseContext1 />
</appContext.Provider><br />
<hr style={{backgroundColor: "black"}} />
<UseRef />
<hr style={{backgroundColor: "black"}} />
<UseMemo />
<hr style={{backgroundColor: "black"}} />
<UseCallback /> */}
      <Form /> 
      {/* <ApiIntegration /> */}
      {/* <Userdata /> */}
     
      {/* <RecordsData /> */}
      {/* <Products /> */}
      {/* <CurdOperation /> */}
        {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
      <Navbar />
      
        </BrowserRouter> */}
    </div>
   
  )
}

export default App
