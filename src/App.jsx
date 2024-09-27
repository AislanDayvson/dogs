import React from 'react'
import './App.css'

//Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import User from './Components/user/User'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login/Login'
import { UserStorage } from './userContext'
import ProtectedRoute from './Components/helper/ProtectedRoute'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='login/*' element={<Login />}/>
              <Route path='conta/*' element={<ProtectedRoute><User/></ProtectedRoute>}/>  
            </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App