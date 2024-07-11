import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import { Counter1 } from './Counter1'
import { PassGenerator } from './PassGenerator'
import ECommerce from './ECommerce'
import { Route } from 'react-router-dom'
import AddToCart from './AddToCart'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import DescriptionPage from './DescriptionPage'
import LikePage from './LikePage'


function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ECommerce/>}/>
        <Route path="/addToCart" element={<AddToCart/>}/>
        <Route path="/description"  element={< DescriptionPage/>}/>
        <Route path="/likes" element={<LikePage/>}/>
      </Routes>
    </BrowserRouter>
    {/* ----------------------------------------------------------------------------- */}
      {/* <Counter/> */}
      {/* <Counter1/> */}
      {/* <PassGenerator/> */}
      
     
    </>
  )
}

export default App
