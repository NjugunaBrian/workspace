import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import NavMenu from './components/NavMenu';
import Login from './Pages/Login';
import { AuthProvider } from './context/authContext';



function App() {

  const [clicked, isClicked] = useState(false);


  //disable scroll page when the NavMenu is open
  useEffect(() => {
    document.body.style.overflow = clicked ? 'hidden' : 'auto';
  }, [clicked])


  return (
    <>
      <Navbar clicked={clicked} isClicked={isClicked}/>
      {clicked ? <NavMenu clicked={clicked} isClicked={isClicked} /> : null}
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <AuthProvider>
        <Route path='/signin' element={<Signin />} ></Route> 
        <Route path='/login' element={<Login />} ></Route>
        </AuthProvider> 
      </Routes>
    </>
  )
}

export default App