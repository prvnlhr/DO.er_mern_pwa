import React from 'react'
import styles from "./styles/searchPageStyles.module.css"
import { useNavigate } from 'react-router-dom';
import { useCourseContext } from '../../appState/appContext';
import BackBtnIcon from "../icons/BackBtnIcon"
import { coursesList } from "../../courseData/courseData.js"
import SearchPageHeader from "./SearchPageHeader";
import SearchPageBody from "./SearchPageBody"
const SearchPage = () => {
    const navigate = useNavigate();
    const { currentCourseData } = useCourseContext();

    return (
        <div className={styles.searchPageWrapper} >
            <SearchPageHeader />
            <SearchPageBody />
        </div>
    )
}

export default SearchPage