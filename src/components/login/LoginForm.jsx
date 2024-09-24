import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../forms/Input'
import Button from '../forms/Button'
import useForm from '../../hooks/useForm'
import { UserContext } from '../../userContext'


const LoginForm = () => {

  const username = useForm()
  const password = useForm()

  const {userLogin, error, loading} = React.useContext(UserContext)

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if(username.validate() && password.validate()){
      userLogin(username.value, password.value)
    } 
  }

   

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label='Usuário' name="username" {...username} />
        <Input type="password" label='Senha' name="password" {...password}/>
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        
        {error && (
          <p>{error}</p>
        )}

      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm