import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../userContext'
import MinhasFotos from '../../Assets/feed.svg?react'; 
import Estatisticas from '../../Assets/estatisticas.svg?react'; 
import AdicionarFotos from '../../Assets/adicionar.svg?react'; 
import Sair from '../../Assets/sair.svg?react'; 
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
    const mobile = useMedia('(max-width: 40rem)')
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const { userLogout } = React.useContext(UserContext)
    const {pathname} = useLocation()
    React.useEffect(() => {
      setMobileMenu(false)
    },[pathname])
    const navigate = useNavigate()
    const handleLogout = () =>{
      userLogout()
      navigate('/login')
    }

  return (
    <>
    {mobile &&(
      <button className={`${styles.mobileBtn} ${mobileMenu && styles.mobileBtnActive}` } aria-label='Menu' onClick={() => setMobileMenu(!mobileMenu)}></button>
    )}
    
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to='/conta' end> <MinhasFotos/>{mobile && 'Minhas Fotos'}</NavLink>
        <NavLink to='/conta/estatisticas'> <Estatisticas />{mobile && 'Estatísticas '}</NavLink>
        <NavLink to='/conta/postar'> <AdicionarFotos/>{mobile && 'Adicionar Fotos'}</NavLink>
        <button onClick={handleLogout}> <Sair/>{mobile && 'Sair'}</button>
    </nav>
    </>
  )
}

export default UserHeaderNav