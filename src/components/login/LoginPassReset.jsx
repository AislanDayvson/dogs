import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_RESET } from '../../api'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../Helper/Head'

const LoginPassReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = useForm()
  const {error, loading, data, request} = useFetch()
  const navigate = useNavigate()


  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if(key) setKey(key)
    if(login) setLogin(login)
  }, [])

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(password.validate()){
      const {url, options} = PASSWORD_RESET({
      login, key, password: password.value
      })
      const {response} = await request(url, options)
      if(response.ok) navigate('/login')
    }
  }

  return (
    <div>
      <h1 className='title'>Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Head title='Resete sua senha'/>
        <Input label='Senha Nova' type='password' name='password' {...password} />
        {loading ? <Button disabled>Resetando</Button> : <Button>Resetar</Button>}
        
      </form>
      <Error error={error}/>
    </div>
  )
}

export default LoginPassReset