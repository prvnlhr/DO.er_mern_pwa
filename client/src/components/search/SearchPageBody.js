import React from 'react'
import styles from "./styles/searchPageBodyStyles.module.css"
import SearchList from './SearchList'
const SearchPageBody = () => {
    return (
        <div className={styles.searchPageBodyWrapper} >
            <SearchList />
        </div>
    )
}

export default SearchPageBody