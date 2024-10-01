import React from 'react'
import Enviar from '../../Assets/enviar.svg?react'; 
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api';
import Error from '../helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments, single}) => {
    const {request, error} = useFetch()
    const [comment, setComment] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
        const {response, json} = await request(url, options)
        console.log(json)
        if(response.ok) {
            setComment('')
            setComments((comments) => [...comments, json])
        }
    }
  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
        <textarea 
            className={styles.textarea}
            placeholder='Comente...' 
            id="comment" name="comment" 
            value={comment} 
            onChange={({target}) => setComment(target.value)} />

        <button className={styles.button}><Enviar /></button>
        <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm