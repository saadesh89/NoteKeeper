import React from 'react'
import styles from "./notes.module.scss"

const Notes = () => {
  return (
    <div className={styles.add_text}>
      <div className={styles.notekeeper_info}>
        <h1>✏️ Welcome to NoteKeeper!</h1>
        <p>NoteKeeper helps you easily create, organize, and manage your personal notes and documents in one place.</p>
        <ul>
          <li>Click “Blank Document” to start writing a new note.</li>
          <li>Use the Sidebar to find your saved notes, trash, or sign up for more features.</li>
          <li>Stay organized and keep all your ideas safe!</li>
        </ul>
      </div>

      <div className={styles.blank_container}>
        <div className={styles.blank}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#1E90FF"
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        <p className={styles.plus}>Balnk Document</p>
      </div>
    </div>
  )
}

export default Notes
