import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../forms/Input'
import Button from '../forms/Button'
import useForm from '../../hooks/useForm'


const LoginForm = () => {

  const username = useForm()
  const password = useForm()

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(username.validate() && password.validate()){
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    }).then((response) => {
      console.log(response)
      return response.json()
    }).then((json) =>{
      console.log(json)
    })
  } 
    }

   

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label='Usuário' name="username" {...username} />
        <Input type="password" label='Senha' name="password" {...password}/>
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm