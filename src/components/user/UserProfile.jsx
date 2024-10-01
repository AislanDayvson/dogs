import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../feed/Feed'
import Head from '../helper/Head'

const UserProfile = () => {
    const {user} = useParams()
  return (
    <section className='container mainContainer'>
        <h1 className='title'>{user}</h1>
        <Feed user={user}/>
        <Head title={user} description='Home do site dogs, com o feed de fotos'/>
    </section>
  )
}

export default UserProfile