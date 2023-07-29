import React from 'react'
import styles from "./styles/searchListStyles.module.css"
import SearchCourseCard from "./searchItemCards/SearchCourseCard"
const SearchList = () => {
    return (
        <div className={styles.searchListWrapper} >
            <div className={styles.searchListInnerWrapper} >
                <SearchCourseCard />
                <SearchCourseCard />
                <SearchCourseCard />
                <SearchCourseCard />
                <SearchCourseCard />
                <SearchCourseCard />
                <SearchCourseCard />
                <SearchCourseCard />
                <SearchCourseCard />
                <SearchCourseCard />
            </div>
        </div>
    )
}

export default SearchList