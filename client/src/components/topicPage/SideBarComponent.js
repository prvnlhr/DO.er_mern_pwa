import React, { useState, useEffect } from 'react'
import styles from "./styles/sidebarComponentStyles.module.css"
import { Icon } from '@iconify/react';
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"
const SideBarComponent = ({ showSideBar, toggleSidebar }) => {


    const { currentCourseData, setCurrentCourseData, updateCurrentCourseData } = useCourseContext();

    const [showListIndex, setShowListIndex] = useState(new Set());

    useEffect(() => {
        toggleList(currentCourseData.currentCourseModuleIndex);
    }, [])




    const addToSet = (val) => {
        setShowListIndex(previousState => new Set([...previousState, val]))
    }
    const removeFromSet = (val) => {
        setShowListIndex(prev => new Set([...prev].filter(x => x !== val)))
    }

    const toggleList = (val) => {

        console.log(val);
        updateCurrentCourseData('currentCourseModuleIndex', val);

        if (showListIndex.has(val)) {
            removeFromSet(val);
        } else {
            console.log(coursesList[currentCourseData.currentCourseIndex].modulesData[val].module_topics_list)
            let listHeight = coursesList[currentCourseData.currentCourseIndex].modulesData[val].module_topics_list.length * 41;
            document.documentElement.style.setProperty(
                "--listWrapperHeight",
                `${listHeight}px`
            );
            addToSet(val);

        }

        // if (val === currShowList) {
        //   setCurrShowList(null);
        // } else {
        //   let listHeight = moduleData[val].subTopicData.length * 36;
        //   document.documentElement.style.setProperty(
        //     "--listWrapperHeight",
        //     `${listHeight}px`
        //   );
        //   setCurrShowList(val);
        //   showListIndex.add(val);
        // }
    }
    return (
        <div className={`${styles.sidebarComponentWrapper}  ${showSideBar && styles.sideBarSlide}`} >
            <div className={styles.sidebarHeadingWrapper}>
                <div className={styles.sidebarHeadingDiv} >
                    <p>Table of Contents</p>
                </div>
                <div className={styles.sidebarCloseIconDiv} onClick={toggleSidebar}  >
                    <svg
                        className={styles.closeIcon}
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

            <div className={styles.sidebarContentWrapper}>
                {coursesList[currentCourseData.currentCourseIndex].modulesData.map((data, index) => (
                    <div className={styles.moduleTopicListOuterWrapper}>
                        <div className={styles.moduleNameWrapper} onClick={() => toggleList(index)} >
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
                            // currShowList === index ? styles.moduleSubTopicListWrapperShow : styles.moduleSubTopicListWrapperHide
                            showListIndex.has(index) ? styles.moduleSubTopicListWrapperShow : styles.moduleSubTopicListWrapperHide} >

                            {data.module_topics_list.map((subData, indx) => (
                                <div div className={styles.subTopicElementWrapper} >
                                    <div className={styles.subTopicElementIndicatorContainer} >
                                        <div className={styles.indicatorDiv} >
                                        </div>
                                    </div>
                                    <div className={styles.subTopicNameDiv} >
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