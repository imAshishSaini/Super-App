import React from 'react'
import styles from './MoviePage.module.css'
import userAvatar from '../assets/userAvatar.png'

function MoviePage() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p className={styles.heading}>Super App</p>
            <img src={userAvatar} alt="User Avatar" />
        </div>
        <div className={styles.movies}>

        </div>
    </div>
  )
}

export default MoviePage