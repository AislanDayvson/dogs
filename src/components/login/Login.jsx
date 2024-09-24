import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginPassLost from './LoginPassLost'
import LoginCreate from './LoginCreate'
import LoginPassReset from './LoginPassReset'
import { UserContext } from '../../userContext'


const Login = () => {
  const {login} = React.useContext(UserContext)

  if(login === true) return <Navigate to="/conta"/>
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='criar' element={<LoginCreate />}/>
        <Route path='perdeu' element={<LoginPassLost />}/>
        <Route path='resetar' element={<LoginPassReset />}/>
      </Routes>
    </div>
  )
}

export default Login