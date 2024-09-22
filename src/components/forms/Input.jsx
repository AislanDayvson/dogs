import React from 'react'
import styles from './Input.module.css'
const Input = ({label, type, name }) => {
  return (
    <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>{label}</label>
         <input name={name} type={type} className={styles.input} id={name} />
         <p className={styles.error}>Error</p>
    </div>
   
  )
}

export default Input