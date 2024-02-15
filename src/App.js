import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import NavMenu from './components/NavMenu';




function App() {

  const [clicked, isClicked] = useState(false);
  return (
    <>
      <Navbar clicked={clicked} isClicked={isClicked}/>
      {clicked ? <NavMenu clicked={clicked} isClicked={isClicked} /> : null}
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/signin' element={<Signin />} ></Route>  
      </Routes>
    </>
  )
}

export default App