import React from 'react'
import Contact from './Contact'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Welcome from './Welcome'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='*' element={ <Home /> } />
    <Route path='/contact' element={ <Contact /> } />
    <Route path='/login' element={ <Login /> } />
    <Route path='/welcome' element={ <Welcome /> } />
   </Routes>
  )
}

export default App