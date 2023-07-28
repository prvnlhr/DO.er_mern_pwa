import React from 'react'
import styles from "./styles/appHeaderStyles.module.css"
import AppLogo from "../icons/AppLogo"
const AppHeader = () => {
    return (
        <div className={styles.appHeaderStylesWrapper} >

            <div className={styles.headerInnerWrapper} >

                <div className={styles.appLogoWrapper} >
                    <div className={styles.logoContainer} >
                        <AppLogo />
                    </div>
                </div>
                <div className={styles.searchBarWrapper} ></div>
                <div className={styles.userProfileWrapper} ></div>
            </div>
        </div>

    )
}

export default AppHeader;