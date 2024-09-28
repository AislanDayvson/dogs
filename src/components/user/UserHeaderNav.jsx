import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../userContext'
import MinhasFotos from '../../Assets/feed.svg?react'; 
import Estatisticas from '../../Assets/estatisticas.svg?react'; 
import AdicionarFotos from '../../Assets/adicionar.svg?react'; 
import Sair from '../../Assets/sair.svg?react'; 
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null)
    const { userLogout } = React.useContext(UserContext)
    const navigate = useNavigate()
    const handleLogout = () =>{
      userLogout()
      navigate('/login')
    }

  return (
    <nav className={styles.nav}>
        <NavLink to='/conta' end> <MinhasFotos/>{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to='/conta/estatisticas'> <Estatisticas />{mobile && 'Estatísticas '}</NavLink>
        <NavLink to='/conta/postar'> <AdicionarFotos/>{mobile && 'Adicionar Fotos'}</NavLink>
        <button onClick={handleLogout}> <Sair/>{mobile && 'Sair'}</button>
    </nav>
  )
}

export default UserHeaderNav