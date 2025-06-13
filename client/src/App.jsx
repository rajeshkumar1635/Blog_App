import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Login from './Login'
import Contact from './Contact'
import Create from './Create'
import Post from './Post'
import Register from './Register'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const userContext=createContext();
function App() {
  const [user,setUser]=useState({});
  axios.defaults.withCredentials=true;
 useEffect(()=>{
axios.get("http://localhost:3000/").then(user=>{
  setUser(user.data);
})
.catch(e=>console.log(e))
 },[])
  return (
    <>
    <userContext.Provider value={user}>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path='/post/:id' element={<Post/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    </userContext.Provider>
      
    </>
  )
}

export default App
