import React, { useState, useEffect } from 'react'
import styles from "./styles/sidebarComponentStyles.module.css"
import { Icon } from '@iconify/react';
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"
import { getMarkDownFile } from "../utilityFunctions/utility"

const SideBarComponent = ({ showSideBar, toggleSidebar }) => {

    const [showListIndex, setShowListIndex] = useState(new Set());

    const [currentShowListIndex, setCurrentShowListIndex] = useState(null);


    const { currentCourseData, updateCurrentCourseData } = useCourseContext();
    const { currentCourseIndex, currentCourseModuleIndex, currentCourseTopicIndex, markDownContents } = currentCourseData;


    // ------ logic for toggling module topics list inside sidebar ---------------
    const addToSet = (val) => {
        setShowListIndex(previousState => new Set([...previousState, val]))
    }
    const removeFromSet = (val) => {
        setShowListIndex(prev => new Set([...prev].filter(x => x !== val)))
    }

    const toggleModuleList = (val) => {

        updateCurrentCourseData('currentCourseModuleIndex', val);

        if (val === currentShowListIndex) {
            setCurrentShowListIndex(null);
        } else {
            let listHeight = coursesList[currentCourseData.currentCourseIndex].modulesList[val].topicsList.length * 41;
            document.documentElement.style.setProperty(
                "--listWrapperHeight",
                `${listHeight}px`
            );

            setCurrentShowListIndex(val);
        }

    }

    useEffect(() => {
        toggleModuleList(currentCourseData.currentCourseModuleIndex);
    }, [])


    const handleModuleTopicClicked = (indexValue) => {
        const courseFolder = coursesList[currentCourseData.currentCourseIndex].courseFolderName;
        const moduleFolder = coursesList[currentCourseData.currentCourseIndex].modulesList[currentCourseData.currentCourseModuleIndex].moduleFolderName;
        const topicFileName = coursesList[currentCourseData.currentCourseIndex].modulesList[currentCourseData.currentCourseModuleIndex].topicsList[indexValue].topicFileName;
        getMarkDownFile(courseFolder, moduleFolder, topicFileName)
            .then((res) => {
                updateCurrentCourseData('markDownContents', res);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }

    const setClickedTopicIndex = (indxVal) => {
        updateCurrentCourseData('currentCourseTopicIndex', indxVal);

        // passing indxVal because useState takes time to update to we cant rely on it, so maually passing indx value
        handleModuleTopicClicked(indxVal);
        toggleSidebar(false);
    }

    // --------------------------------------------------------------------------------------------------------

    return (
        <div className={`${styles.sidebarComponentWrapper}  ${showSideBar && styles.sideBarSlide}`} >
            <div className={styles.sidebarHeadingWrapper}>
                <div className={styles.sidebarHeadingDiv} >
                    <p>Table of Contents</p>
                </div>
                {/* <div className={styles.sidebarCloseIconDiv} onClick={() => toggleSidebar(false)}  >
                    <svg
                        className={styles.closeIcon}
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div> */}
            </div>

            <div className={styles.sidebarContentWrapper}>
                {coursesList[currentCourseData.currentCourseIndex].modulesList.map((data, index) => (
                    <div className={styles.moduleTopicListOuterWrapper}>
                        <div className={styles.moduleNameWrapper} onClick={() => toggleModuleList(index)} >
                            <div className={styles.moduleNameDiv}>
                                <p>
                                    {data.module_title}
                                </p>
                            </div>

                            <div className={`${styles.moduleDropDownIconDiv} ${showListIndex.has(index) && styles.moduleDropDownIconDivRotate}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className={
                            currentShowListIndex === index ? styles.moduleSubTopicListWrapperShow : styles.moduleSubTopicListWrapperHide
                            // showListIndex.has(index) ? styles.moduleSubTopicListWrapperShow : styles.moduleSubTopicListWrapperHide
                        } >

                            {data.topicsList.map((subData, indx) => (
                                <div div className={styles.subTopicElementWrapper} >
                                    <div className={styles.subTopicElementIndicatorContainer} >
                                        <div className={styles.indicatorDiv} >
                                        </div>
                                    </div>
                                    <div className={styles.subTopicNameDiv} onClick={() => setClickedTopicIndex(indx)}>
                                        <p className={styles.subTopicNameText}>
                                            {subData.topic_name}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div >
                ))}
            </div >

        </div >
    )
}

export default SideBarComponent