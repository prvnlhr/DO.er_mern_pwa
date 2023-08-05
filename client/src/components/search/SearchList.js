import React from 'react'
import styles from "./styles/searchListStyles.module.css"
import SearchCourseCard from "./searchItemCards/SearchCourseCard"
import SearchChapterCard from "./searchItemCards/SearchChapterCard"
import SearchTopicCard from "./searchItemCards/SearchTopicCard"
import { setMarkDownFile } from "../helperFunctions/setMarkDownHelperFunction"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"


const SearchList = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const currentCourseState = useSelector((state) => state.course.currentCourseState);
    const { searchResultList } = currentCourseState;



    const updateValueContextState = (courseIndx = 0, chapterIndx = 0, topicIndx = 0) => {
        updateReduxState(dispatch,
            {
                data:
                {
                    'currentCourseIndex': courseIndx,
                    'currentChapterIndex': chapterIndx,
                    'currentTopicIndex': topicIndx
                },
            }
        );


    }

    const handleCardArrowLinkClicked = (clickedCardData) => {


        const { searchItemType, courseIndex = 0, chapterIndex = 0, topicIndex = 0 } = clickedCardData;

        switch (searchItemType) {
            case 'course': {
                updateValueContextState(courseIndex);
                navigate("/user/course");
                break;
            }

            case 'chapter': {
                updateValueContextState(courseIndex, chapterIndex);
                navigate("/user/topic");
                break;
            }

            case 'topic': {
                updateValueContextState(courseIndex, chapterIndex, topicIndex);
                navigate("/user/topic");
                break;
            }

            default:
                break;
        }
        setMarkDownFile(dispatch, courseIndex, chapterIndex, topicIndex);
        updateReduxState(dispatch, {
            data: {
                'searchResultList': []
            }
        })
    }


    return (
        <div className={styles.searchListWrapper} >
            <div className={styles.searchListInnerWrapper} >
                {searchResultList.length > 0 &&
                    searchResultList.map((searchItem, indx) => (
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