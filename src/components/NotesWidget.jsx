import React from 'react'
import styles from './NotesWidget.module.css'

function NotesWidget() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p className={styles.heading}>All Notes</p>
        </div>
        <div>
            <textarea/>
        </div>
    </div>
  )
}

export default NotesWidget