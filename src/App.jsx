import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Clothings from './components/Home/Clothings/Clothings'
import Electronics from './components/Home/Electronics/Electronics'
import Watches from './components/Home/Watches/Watches'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Admin from './components/Admin/Admin'
import User from './components/User/User'

function App() {
  return (
    <>
    <BrowserRouter>
     <div className='App'>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/clothings" element={<Clothings></Clothings>}></Route>
            <Route path="/electronics" element={<Electronics></Electronics>}></Route>
            <Route path="/watches" element={<Watches></Watches>}></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="signup" element={<SignUp></SignUp>}></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route path="/user" element={<User></User>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
