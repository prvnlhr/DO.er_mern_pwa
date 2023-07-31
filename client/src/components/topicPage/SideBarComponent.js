import React, { useState, useEffect } from 'react'
import styles from "./styles/sidebarComponentStyles.module.css"
import { Icon } from '@iconify/react';
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"
import { setMarkDownFile } from "../utilityFunctions/getMarkdownUtilityFunction"

import { useMarkdownLoader } from "../../customHooks/useMarkdownLoader"
const SideBarComponent = ({ showSideBar, toggleSidebar }) => {

    const [showListIndex, setShowListIndex] = useState(new Set());

    const [currentModuleListShowIndx, setCurrModuleListShowIndx] = useState(null);


    const { currentCourseData, updateCurrentCourseData } = useCourseContext();
    const { currentCourseIndex, currentCourseModuleIndex, currentCourseTopicIndex } = currentCourseData;


    useEffect(() => {
        setCurrModuleListShowIndx(currentCourseModuleIndex);
    }, [])



    // >> --------------------------------------------------------------------------------------------

    // This function will get the markdown file and update the state with new markdwn file
    const changeTopicMarkdownFile = (topicIndx) => {
        setMarkDownFile(currentCourseIndex, currentCourseModuleIndex, topicIndx, updateCurrentCourseData);
    }

    // >> --------------------------------------------------------------------------------------------

    const handleSidebarModuleClicked = (currClickedModuleIndx) => {

        // let listHeight = coursesList[currentCourseIndex].modulesList[currClickedModuleIndx].topicsList.length * 41;
        // document.documentElement.style.setProperty(
        //     "--listWrapperHeight",
        //     `${listHeight}px`
        // );

        // setCurrModuleListShowIndx(currClickedModuleIndx);

        updateCurrentCourseData('currentCourseModuleIndex', currClickedModuleIndx);

        if (currClickedModuleIndx === currentModuleListShowIndx) {
            setCurrModuleListShowIndx(null);
        } else {
            let listHeight = coursesList[currentCourseIndex].modulesList[currClickedModuleIndx].topicsList.length * 41;
            document.documentElement.style.setProperty(
                "--listWrapperHeight",
                `${listHeight}px`
            );

            setCurrModuleListShowIndx(currClickedModuleIndx);
        }
    }


    // >> --------------------------------------------------------------------------------------------

    const handleSidebarTopicClicked = (currClickedTopicIndx) => {

        // 1. Update state data for current topic clicked
        updateCurrentCourseData('currentCourseTopicIndex', currClickedTopicIndx);

        // 2. Passing currClickedTopicIndx because useState takes time to update to we cant rely on it, so maually passing currClickedTopicIndx value
        changeTopicMarkdownFile(currClickedTopicIndx);

        toggleSidebar(false);
    }

    // >> --------------------------------------------------------------------------------------------

    // useEffect(() => {
    //     handleSidebarModuleClicked(currentCourseModuleIndex);
    //     console.log('sidebar', currentCourseData)
    // }, [])


    return (
        <div className={`${styles.sidebarComponentWrapper}  ${showSideBar && styles.sideBarSlide}`} >
            <div className={styles.sidebarHeadingWrapper}>
                <div className={styles.sidebarHeadingDiv} >
                    <p>Table of Contents</p>
                </div>
            </div>

            <div className={styles.sidebarContentWrapper}>

                {coursesList[currentCourseIndex].modulesList.map((data, moduleIndx) => (
                    <div className={styles.moduleTopicListOuterWrapper} key={moduleIndx}>
                        <div className={styles.moduleNameWrapper} onClick={() => handleSidebarModuleClicked(moduleIndx)} >
                            <div className={styles.moduleNameDiv}>
                                <p>
                                    {data.module_title}
                                </p>
                            </div>

                            <div className={`${styles.moduleDropDownIconDiv} ${showListIndex.has(moduleIndx) && styles.moduleDropDownIconDivRotate}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className={currentModuleListShowIndx === moduleIndx ? styles.moduleSubTopicListWrapperShow : styles.moduleSubTopicListWrapperHide} >

                            {currentCourseModuleIndex === moduleIndx &&

                                // <-- topics list mapping -->
                                data.topicsList.map((subData, topicIndx) => (

                                    <div div className={styles.subTopicElementWrapper} key={topicIndx} >

                                        {/* <-- indicator --> */}
                                        <div className={styles.subTopicElementIndicatorContainer} >
                                            <div className={styles.indicatorDiv} >
                                            </div>
                                        </div>

                                        {/* <-- topic name --> */}
                                        <div className={styles.subTopicNameDiv} onClick={() => handleSidebarTopicClicked(topicIndx)}>
                                            <p className={styles.subTopicNameText}>
                                                {subData.topic_name}
                                            </p>
                                        </div>

                                    </div>
                                ))

                            }

                        </div>
                    </div >
                ))}
            </div >

        </div >
    )
}

export default SideBarComponent