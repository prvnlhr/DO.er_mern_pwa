import React from 'react'
import styles from "./styles/usernameCountryCompStyles.module.css";
import userAvatar from "./userAvatar.png"

const UserNameCountryComponent = () => {
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
            <p>Cillian <span>Murphy</span> </p>
          </div>
          <div className={styles.userCountryCell} >
            <p>United States</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserNameCountryComponent;
