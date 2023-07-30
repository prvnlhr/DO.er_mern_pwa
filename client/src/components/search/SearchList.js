import React from 'react'
import styles from "./styles/searchListStyles.module.css"
import SearchCourseCard from "./searchItemCards/SearchCourseCard"
import SearchChapterCard from "./searchItemCards/SearchChapterCard"
import SearchTopicCard from "./searchItemCards/SearchTopicCard"
import { useCourseContext } from "../../appState/appContext"

const SearchList = () => {
    const { currentCourseData, updateCurrentCourseData } = useCourseContext();
    const { searchResult } = currentCourseData;
    // console.log(searchResult);

    const handleCardArrowLinkClicked = (obj) => {
        console.log(obj);
    }

    return (
        <div className={styles.searchListWrapper} >
            <div className={styles.searchListInnerWrapper} >

                {searchResult.length > 0 &&
                    searchResult.map((searchItem, indx) => (
                        searchItem.searchItemType === "course" ?
                            <SearchCourseCard searchItemData={searchItem} handleCardArrowLinkClicked={handleCardArrowLinkClicked} />
                            : searchItem.searchItemType === "chapter" ?
                                <SearchChapterCard searchItemData={searchItem} handleCardArrowLinkClicked={handleCardArrowLinkClicked} />
                                : searchItem.searchItemType === "topic" &&
                                <SearchTopicCard searchItemData={searchItem} handleCardArrowLinkClicked={handleCardArrowLinkClicked} />
                    ))
                }

            </div>
        </div>
    )
}

export default SearchList