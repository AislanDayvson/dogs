import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginPassLost from './LoginPassLost'
import LoginCreate from './LoginCreate'
import LoginPassReset from './LoginPassReset'
import { UserContext } from '../../userContext'
import styles from './Login.module.css'


const Login = () => {
  const {login} = React.useContext(UserContext)

  if(login === true) return <Navigate to="/conta"/>
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />}/>
          <Route path='criar' element={<LoginCreate />}/>
          <Route path='perdeu' element={<LoginPassLost />}/>
          <Route path='resetar' element={<LoginPassReset />}/>
        </Routes>
      </div>
      
    </section>
  )
}

export default Login