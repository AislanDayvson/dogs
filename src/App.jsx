import React from 'react'
import './App.css'

//Components
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import User from './Components/user/User'
import Photo from './Components/photo/Photo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/login/Login'
import { UserStorage } from './userContext'
import ProtectedRoute from './Components/helper/ProtectedRoute'
import UserProfile from './Components/user/UserProfile'
import NotFound from './Components/NotFound'



const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='login/*' element={<Login />}/>
              <Route path='conta/*' element={<ProtectedRoute><User/></ProtectedRoute>}/>  
              <Route path='foto/:id' element={<Photo />}/>
              <Route path='perfil/:user' element={<UserProfile />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App