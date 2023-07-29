import React, { useState } from 'react'
import styles from "./styles/appHeaderStyles.module.css"
import AppLogo from "../icons/AppLogo"
import ProfileIcon from "../icons/ProfileIcon"
import SearchBar from './SearchBar'
const AppHeader = () => {

    const [inSearchMode, setInSearchMode] = useState(false);

    const handleSearchIconClicked = () => {
        setInSearchMode(!inSearchMode);
    }

    return (
        <div className={styles.appHeaderStylesWrapper} >

            <div className={styles.headerInnerWrapper} >

                <div className={styles.appLogoWrapper} >
                    <div className={styles.logoContainer} >
                        <AppLogo />
                    </div>
                </div>
                <div className={styles.searchProfileOuterWrapper} >

                    <div className={inSearchMode ? styles.searchBarWrapperExpand : styles.searchBarWrapper}>
                        <SearchBar inSearchMode={inSearchMode} handleSearchIconClicked={handleSearchIconClicked} />
                    </div>

                    <div className={inSearchMode ? styles.userProfileWrapperShrink : styles.userProfileWrapper} >
                        <div className={styles.profileIconDiv} >
                            <ProfileIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AppHeader;