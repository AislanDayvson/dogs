import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../forms/Input'
import Button from '../forms/Button'


const LoginForm = () => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    }).then((response) => {
      console.log(response)
      return response.json()
    }).then((json) =>{
      console.log(json)
    })
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label='Usuário' name="username" />
        <Input type="password" label='Senha' name="password"/>
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm