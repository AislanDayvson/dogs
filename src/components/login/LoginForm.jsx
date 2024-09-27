import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../forms/Input'
import Button from '../forms/Button'
import useForm from '../../hooks/useForm'
import { UserContext } from '../../userContext'
import Error from '../helper/Error'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'


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
    <section className="animeLeft">
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" label='Usuário' name="username" {...username} />
        <Input type="password" label='Senha' name="password" {...password}/>
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        
        <Error error={error} />

      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a Senha?</Link>
      <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no Site.</p>
          <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm