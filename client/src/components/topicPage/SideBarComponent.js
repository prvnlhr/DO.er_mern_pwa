import React, { useState, useEffect } from 'react'
import styles from "./styles/sidebarComponentStyles.module.css"
import { Icon } from '@iconify/react';
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"
import { setMarkDownFile } from "../utilityFunctions/getMarkdownUtilityFunction"

import { useMarkdownLoader } from "../../customHooks/useMarkdownLoader"
import { motion, AnimatePresence } from 'framer-motion';
const SideBarComponent = ({ showSideBar, toggleSidebar }) => {


    const { currentCourseData, updateCurrentCourseData } = useCourseContext();
    const { currentCourseIndex, currentCourseModuleIndex, currentCourseTopicIndex } = currentCourseData;
    const [currModuleListOpenIndex, setCurrModuleListOpenIndex] = useState(null);









    // >> --------------------------------------------------------------------------------------------

    // This function will get the markdown file and update the state with new markdwn file
    const changeTopicMarkdownFile = (topicIndx) => {
        setMarkDownFile(currentCourseIndex, currentCourseModuleIndex, topicIndx, updateCurrentCourseData);
    }

    // >> --------------------------------------------------------------------------------------------

    const handleSidebarModuleClicked = (currClickedModuleIndx) => {

        console.log('handleSidebarModuleClicked', currClickedModuleIndx);
        console.log(currClickedModuleIndx, currModuleListOpenIndex);

        updateCurrentCourseData('currentCourseModuleIndex', currClickedModuleIndx);

        if (currClickedModuleIndx === currModuleListOpenIndex) {
            console.log('not equal')
            setCurrModuleListOpenIndex(null);
        }
        else {
            console.log('not equal')
            let listHeight = coursesList[currentCourseIndex].modulesList[currClickedModuleIndx].topicsList.length * 41;
            document.documentElement.style.setProperty(
                "--listWrapperHeight",
                `${listHeight}px`
            );

            setCurrModuleListOpenIndex(currClickedModuleIndx);
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

    useEffect(() => {
        console.log('usEFFECt', currentCourseModuleIndex);
        handleSidebarModuleClicked(currentCourseModuleIndex);
    }, [])


    return (
        <AnimatePresence>

            <div className={`${styles.sidebarComponentWrapper}  ${showSideBar && styles.sideBarSlide}`} >
                <div className={styles.sidebarHeadingWrapper}>
                    <div className={styles.sidebarHeadingDiv} >
                        <p>Table of Contents</p>
                    </div>
                </div>

                <div className={styles.sidebarContentWrapper}>

                    {coursesList[currentCourseIndex].modulesList.map((data, moduleIndx) => (
                        <div className={styles.outerModulesListWrapper} key={moduleIndx}>
                            <div className={styles.moduleNameWrapper} onClick={() => handleSidebarModuleClicked(moduleIndx)} >
                                <div className={styles.moduleNameDiv}>
                                    <p>
                                        {data.module_title}
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles.innerTopicsListWrapper} ${currModuleListOpenIndex === moduleIndx ? styles.innerTopicsListWrapperOpen : styles.innerTopicsListWrapperHideClose}`} >
                                {currModuleListOpenIndex === moduleIndx &&
                                    data.topicsList.map((subData, topicIndx) => (
                                        <motion.div div className={styles.subTopicElementWrapper} key={topicIndx}>
                                            <div className={styles.subTopicElementIndicatorContainer} >
                                                <div className={styles.indicatorDiv} >
                                                </div>
                                            </div>
                                            <div className={styles.subTopicNameDiv} onClick={() => handleSidebarTopicClicked(topicIndx)}>
                                                <motion.p className={styles.subTopicNameText}>
                                                    {subData.topic_name}
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                    ))
                                }

                            </div>
                        </div >
                    ))}
                </div >
            </div >
        </AnimatePresence >
    )
}

export default SideBarComponent