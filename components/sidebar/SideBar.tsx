import React from 'react'
import styles from "./sidebar.module.scss"

const SideBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <div>🔍</div>
          <input className={styles.input} type="text" placeholder='Search' />
      </div>
      <ul className={styles.lists}>
        <li>🏠 Home</li>
        <li>📝 Notes</li>
        <li>🚮 Trash</li>
        <li>📰 Sign Up</li>
      </ul>
    </div>
  )
}

export default SideBar