import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Signin' element={<Signin/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
     </Routes>
    </>
  )
}

export default App
