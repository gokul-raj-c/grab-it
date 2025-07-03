import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import PageName from './components/pagename'
import SignIn from './components/signin'
import Home from './components/home'
import SignUp from './components/signup'
import Footer from './components/footer'
import Electronics from './components/electronics'
import Watches from './components/watches'
import Clothing from './components/clothing'
import Cart from './components/cart'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
     <div className='App'>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/electronics" element={<Electronics></Electronics>}></Route>
            <Route path="/watches" element={<Watches></Watches>}></Route>
            <Route path="/clothings" element={<Clothing></Clothing>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
