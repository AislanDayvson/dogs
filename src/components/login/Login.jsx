import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginPassLost from './LoginPassLost'
import LoginCreate from './LoginCreate'
import LoginPassReset from './LoginPassReset'


const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='criar' element={<LoginCreate />}/>
        <Route path='perdeu' element={<LoginPassLost />}/>
        <Route path='criar' element={<LoginPassReset />}/>
      </Routes>
    </div>
  )
}

export default Login