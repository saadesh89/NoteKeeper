import React from 'react'
import styles from "./profile.module.scss"
import Image from 'next/image'

const ProfilePage = () => {
  return (
    <div className={styles.main}>

        <div className={styles.box}>
            <div className={styles.profile_info}>
                <Image className={styles.picture} width={150} height={100} src={"/profile.jpg"} alt='error_picture' />
                <div className={styles.info}>
                    <h2>Butter Fly</h2>
                    <h4>📍Goregaon East Maharashtra Mumbai </h4>
                    <p>I’m a passionate Software Engineer who loves designing, building, testing, deploying, and maintaining scalable applications.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage