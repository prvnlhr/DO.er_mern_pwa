import React from 'react'
import styles from "./styles/searchListStyles.module.css"
import SearchCourseCard from "./searchItemCards/SearchCourseCard"
import SearchChapterCard from "./searchItemCards/SearchChapterCard"
import SearchTopicCard from "./searchItemCards/SearchTopicCard"
import { useCourseContext } from "../../appState/appContext"
import { setMarkDownFile } from "../utilityFunctions/getMarkdownUtilityFunction"
import { useNavigate } from 'react-router-dom'
import { coursesList } from "../../courseData/courseData"

const SearchList = () => {

    const navigate = useNavigate();
    const { currentCourseData, setCurrentCourseData, updateCurrentCourseData } = useCourseContext();
    const { searchResult } = currentCourseData;

    const updateValueContextState = (courseIndx = 0, moduleIndx = 0, topicIndx = 0) => {

        setCurrentCourseData({
            ...currentCourseData,
            currentCourseIndex: courseIndx,
            currentCourseModuleIndex: moduleIndx,
            currentCourseTopicIndex: topicIndx,
        })

    }

    const handleCardArrowLinkClicked = (clickedCardData) => {

        const { searchItemType, courseIndex = 0, moduleIndex = 0, topicIndex = 0 } = clickedCardData;




        switch (searchItemType) {
            case 'course': {
                updateValueContextState(courseIndex);
                navigate("/user/course");
                break;
            }

            case 'chapter': {
                updateValueContextState(courseIndex, moduleIndex);
                navigate("/user/topic");
                break;
            }

            case 'topic': {
                updateValueContextState(courseIndex, moduleIndex, topicIndex);
                navigate("/user/topic");
                break;
            }

            default:
                break;
        }

        console.log('searchList', courseIndex, moduleIndex, topicIndex);

        setMarkDownFile(courseIndex, moduleIndex, topicIndex, updateCurrentCourseData);
        updateCurrentCourseData('searchResult', [])

    }


    return (
        <div className={styles.searchListWrapper} >
            <div className={styles.searchListInnerWrapper} >
                {searchResult.length > 0 &&
                    searchResult.map((searchItem, indx) => (
                        searchItem.searchItemType === "course" ?
                            <SearchCourseCard key={indx} searchItemData={searchItem} handleCardArrowLinkClicked={handleCardArrowLinkClicked} />
                            : searchItem.searchItemType === "chapter" ?
                                <SearchChapterCard key={indx} searchItemData={searchItem} handleCardArrowLinkClicked={handleCardArrowLinkClicked} />
                                : searchItem.searchItemType === "topic" &&
                                <SearchTopicCard key={indx} searchItemData={searchItem} handleCardArrowLinkClicked={handleCardArrowLinkClicked} />
                    ))
                }

            </div>
        </div>
    )
}

export default SearchList