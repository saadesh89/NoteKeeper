'use client'
import React, { useState } from 'react'
import styles from "./navbar.module.scss"
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()

  return (
      <div className={styles.main}>
          <h1 className={styles.logo} onClick={() => router.push("/")}>NoteKeeper</h1>
          <ul className={styles.ul}>
            <li onClick={() => router.push("/about")}>About Us</li>
            <li onClick={() => router.push("/contact")}>Contact Us</li>
            <li onClick={() => router.push("/profile")}>Profile</li>
          </ul>
      </div>
  )
}

export default Navbar