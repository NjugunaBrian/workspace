import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Signin from './Pages/Signin';

function App() {

  const [clicked, isClicked] = useState(false);
  return (
    <>
      <Navbar clicked={clicked} isClicked={isClicked}/>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/signin' element={<Signin />} ></Route>  
      </Routes>
    </>
  )
}

export default App