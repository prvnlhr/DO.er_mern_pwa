import React, { useState, useEffect } from 'react'
import styles from "./styles/sidebarComponentStyles.module.css"
import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"
import { setMarkDownFile } from "../helperFunctions/setMarkDownHelperFunction"
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"


const SideBarComponent = ({ showSideBar, toggleSidebar }) => {

    const dispatch = useDispatch();


    const [currModuleListOpenIndex, setCurrModuleListOpenIndex] = useState(null);


    const currentCourseState = useSelector((state) => state.course.currentCourseState);
    const { currentCourseIndex, currentChapterIndex, currentTopicIndex, completedTopics } = currentCourseState;


    // >> --------------------------------------------------------------------------------------------


    // This function will get the markdown file and update the state with new markdwn file
    const changeTopicMarkdownFile = (topicIndx) => {
        setMarkDownFile(dispatch, currentCourseIndex, currentChapterIndex, topicIndx);
    }

    // >> --------------------------------------------------------------------------------------------




    const handleSidebarChapterClicked = (currClickedChapterIndex) => {

        // 1. Update Redux state
        updateReduxState(dispatch, { data: { 'currentChapterIndex': currClickedChapterIndex } });

        // 2. then -> open currentChapter list
        if (currClickedChapterIndex === currModuleListOpenIndex) {
            setCurrModuleListOpenIndex(null);
        }
        else {
            let listHeight = coursesList[currentCourseIndex].chaptersList[currClickedChapterIndex].topicsList.length * 41;
            document.documentElement.style.setProperty(
                "--listWrapperHeight",
                `${listHeight}px`
            );

            setCurrModuleListOpenIndex(currClickedChapterIndex);
        }
    }


    // # --------------------------------------------------------------------------------------------

    const handleSidebarTopicClicked = (currClickedTopicIndx) => {

        //> 1. Update state data for current topic clicked
        updateReduxState(dispatch, { data: { 'currentTopicIndex': currClickedTopicIndx } });

        //> 2. Passing currClickedTopicIndx because useState takes time to update to we cant rely on it, so maually passing currClickedTopicIndx value
        changeTopicMarkdownFile(currClickedTopicIndx);

        toggleSidebar(false);
    }

    // # --------------------------------------------------------------------------------------------

    useEffect(() => {
        handleSidebarChapterClicked(currentChapterIndex);
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

                    {coursesList[currentCourseIndex].chaptersList.map((data, chapterIndx) => (
                        <div className={styles.outerModulesListWrapper} key={chapterIndx}>
                            <div className={styles.moduleNameWrapper} onClick={() => handleSidebarChapterClicked(chapterIndx)} >
                                <div className={styles.moduleNameDiv}>
                                    <p className={`${styles.chapterNameText} ${currModuleListOpenIndex === chapterIndx && styles.activeChapterNameText}`} >
                                        {data.chapterName}
                                    </p>
                                </div>
                            </div>

                            <motion.div className={`${styles.innerTopicsListWrapper} ${currModuleListOpenIndex === chapterIndx ? styles.innerTopicsListWrapperOpen : styles.innerTopicsListWrapperHideClose}`}

                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1,
                                        },
                                    },
                                    hidden: { opacity: 1 },
                                }}
                                initial="hidden"
                                animate={currModuleListOpenIndex === chapterIndx ? "visible" : "hidden"}>


                                {currModuleListOpenIndex === chapterIndx &&
                                    data.topicsList.map((subData, topicIndx) => (
                                        <motion.div div className={styles.subTopicElementWrapper} key={topicIndx}
                                            variants={{
                                                hidden: { opacity: 0, translateY: -30 },
                                                visible: { opacity: 1, translateY: 0 },
                                            }}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            transition={{
                                                duration: 0.3,
                                                delay: topicIndx * 0.1,
                                                ease: [0.12, 0, 0.39, 0],
                                            }}>

                                            <div className={styles.subTopicElementIndicatorContainer} >

                                                {completedTopics[currentCourseIndex]?.[chapterIndx]?.[topicIndx] === true ?
                                                    <svg
                                                        style={{ width: '85%' }}
                                                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7809 4.62022C12.9213 4.76084 13.0002 4.95147 13.0002 5.15022C13.0002 5.34897 12.9213 5.53959 12.7809 5.68022L6.68389 11.7772C6.61351 11.8475 6.52983 11.9031 6.43775 11.9408C6.34566 11.9785 6.247 11.9974 6.14751 11.9966C6.04802 11.9958 5.94969 11.9751 5.85825 11.9359C5.76681 11.8967 5.68408 11.8397 5.61489 11.7682L3.21189 9.28422C3.14278 9.21356 3.08832 9.12995 3.05163 9.03817C3.01494 8.9464 2.99676 8.84828 2.99812 8.74945C2.99948 8.65062 3.02036 8.55304 3.05956 8.46231C3.09876 8.37158 3.15551 8.28949 3.22654 8.22077C3.29757 8.15204 3.38148 8.09804 3.47346 8.06185C3.56543 8.02567 3.66365 8.00802 3.76247 8.00992C3.86128 8.01182 3.95875 8.03323 4.04927 8.07293C4.13978 8.11262 4.22156 8.16981 4.28989 8.24122L6.16289 10.1772L11.7209 4.62022C11.8615 4.47977 12.0521 4.40088 12.2509 4.40088C12.4496 4.40088 12.6403 4.47977 12.7809 4.62022Z" fill="#12B76A" />
                                                    </svg>
                                                    :
                                                    <div className={styles.indicatorDiv} >
                                                    </div>
                                                }
                                            </div>
                                            <div className={styles.subTopicNameDiv} onClick={() => handleSidebarTopicClicked(topicIndx)}>
                                                <p className={`${styles.subTopicNameText} ${topicIndx === currentTopicIndex && styles.activeSubTopicNameText}`}>
                                                    {subData.topicName}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))
                                }

                            </motion.div>
                        </div >
                    ))}
                </div >
            </div >
        </AnimatePresence >
    )
}

export default SideBarComponent