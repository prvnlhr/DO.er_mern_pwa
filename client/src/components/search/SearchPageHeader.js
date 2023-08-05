import React from 'react'
import styles from "./styles/searchPageHeaderStyles.module.css"
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from '../../appState/appContext';
import BackBtnIcon from "../icons/BackBtnIcon"
import { coursesList } from "../../courseData/courseData.js"
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"
import { useDispatch, useSelector } from 'react-redux'
const SearchPageHeader = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { currentCourseData, setCurrentCourseData, updateCurrentCourseData } = useCourseContext();
    const { searchResult } = currentCourseData;

    const currentCourseState = useSelector((state) => state.course.currentCourseState);
    const { searchResultList } = currentCourseState;

    const handleBackBtnClicked = () => {
        updateReduxState(dispatch, { data: { "searchResultList": [] } })
        navigate(-1);
    }

    return (

        <div className={styles.searchPageHeaderWrapper} >
            <div className={styles.searchHeaderInnerWrapper} >
                <div className={styles.backBtnIconWrapper} >
                    <div className={styles.backBtnIconDiv} onClick={handleBackBtnClicked}>
                        <BackBtnIcon />
                    </div>
                </div>

                <div className={styles.headingWrapper}>
                    <p className={styles.headingText} >Search results</p>
                    <div className={styles.listCountContainer} >
                        <div className={styles.listCountDiv} >
                            <p>{searchResultList?.length}</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default SearchPageHeader