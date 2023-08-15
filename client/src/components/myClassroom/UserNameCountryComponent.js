import React, { useState } from 'react'
import styles from "./styles/usernameCountryCompStyles.module.css";
import userAvatar from "./userAvatar.png"
import { useSelector } from 'react-redux'

const UserNameCountryComponent = () => {

  const authState = useSelector((state) => state.auth);
  const { username, country } = authState;
  const [firstName, lastName] = username.split(' ');

  return (
    <div className={styles.userNameCountryComponentWrapper} >
      <div className={styles.userNameCountryComponentInnerWrapper} >
        <div className={styles.usernameCountryElementWrapper} >
          <div className={styles.userAvatarCell} >
            <div className={styles.avatarDiv} >
              <img src={userAvatar} />
            </div>
          </div>
          <div className={styles.usernameCell} >
            <p>{firstName} <span>{lastName}</span> </p>
          </div>
          <div className={styles.userCountryCell} >
            <p>{country}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNameCountryComponent;
