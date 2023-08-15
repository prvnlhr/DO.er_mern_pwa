
import React, { useState, useEffect, useContext, useRef } from 'react'

import { coursesList } from "../../courseData/courseData"
import ReactMarkdown from 'react-markdown'

import ParagraphBlock from "./customMarkDownComponents/ParagraphBlock"
import PrimaryTitle from "./customMarkDownComponents/PrimaryTitle"
import ListItem from './customMarkDownComponents/ListItem'
import StrongText from './customMarkDownComponents/StrongText'
import SecondaryTitle from './customMarkDownComponents/SecondaryTitle';
import CodeBlock from "./customMarkDownComponents/CodeBlock"
import NoteBlock from './customMarkDownComponents/NoteBlock'
import SkeletonComponent from './SkeletonComponent'
import styles from "./styles/contentComponentStyles.module.css"
import { setMarkDownFile } from "../helperFunctions/setMarkDownHelperFunction"
import { useDispatch, useSelector } from 'react-redux'
import { markTopicCompletionAsync } from "../../redux/features/course/courseSlice"

import { updateDailyTimeSpent, addLastOpenedTopic, updateDailyTimeSpentAsync } from "../../redux/features/course/courseSlice"
import { Navigate, useNavigate } from 'react-router-dom';



const ContentComponent = ({ toggleSidebar }) => {
    const dispatch = useDispatch();
    const contentRef = useRef(null);
    const navigate = useNavigate();

    const [prevScrollTop, setPrevScrollTop] = useState({});



    const currCourseStateData = useSelector((state) => state.course.currentCourseState);
    const { currentCourseIndex, currentChapterIndex, currentTopicIndex, currentMarkdownContent, isMarkDownLoading, completedTopics } = currCourseStateData;

    const authState = useSelector((state) => state.auth);
    const { userId, accessToken } = authState;

    // _________________________________________________________________________________________________________________________________________


    // <-- This useEffect starts recording the time as soon as the user visits the content -->

    useEffect(() => {

        const startTime = new Date();
        const dayOfWeek = startTime.getDay();

        // Check if it's Sunday (day number 0)
        if (dayOfWeek === 0) {
            // Clear the data in local storage
            localStorage.removeItem('dailyTimeSpent');
        }

        return () => {
            const endTime = new Date();
            const timeSpentMinutes = Math.floor((endTime - startTime) / (1000 * 60));

            const storedData = JSON.parse(localStorage.getItem('dailyTimeSpent')) || {};

            storedData[dayOfWeek] = (storedData[dayOfWeek] || 0) + timeSpentMinutes;
            localStorage.setItem('dailyTimeSpent', JSON.stringify(storedData));
            dispatch(updateDailyTimeSpentAsync({ userId, dayOfWeek, timeSpent: timeSpentMinutes }));
            // dispatch(updateDailyTimeSpent(storedData));
        };
    }, []);


    // _________________________________________________________________________________________________________________________________________

    // <-- useEffect that works when user close the tab or exits the browser -->
    useEffect(() => {
        const startTime = new Date();
        const dayOfWeek = startTime.getDay();

        const handleBeforeUnload = (event) => {
            const endTime = new Date();
            const timeSpentMinutes = Math.floor((endTime - startTime) / (1000 * 60));

            // Update the timeSpent in localStorage
            const storedData = JSON.parse(localStorage.getItem('dailyTimeSpent')) || {};
            storedData[dayOfWeek] = (storedData[dayOfWeek] || 0) + timeSpentMinutes;
            localStorage.setItem('dailyTimeSpent', JSON.stringify(storedData));

            dispatch(updateDailyTimeSpentAsync({ userId, dayOfWeek, timeSpent: timeSpentMinutes }));
            // Dispatch the updateDailyTimeSpent action to update the Redux state
            // dispatch(updateDailyTimeSpent(storedData));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };

    }, []);

    // _________________________________________________________________________________________________________________________________________

    useEffect(() => {
        contentRef.current.scrollTop = 0;
        if (isMarkDownLoading === false && currentMarkdownContent === "") {
            setMarkDownFile(dispatch, currentCourseIndex, currentChapterIndex, currentTopicIndex);
        }

        // console.log(currentCourseIndex, currentChapterIndex, currentTopicIndex);

    }, [currentCourseIndex, currentChapterIndex, currentTopicIndex, isMarkDownLoading, currentMarkdownContent, dispatch])

    useEffect(() => {
        dispatch(addLastOpenedTopic(currentCourseIndex, currentChapterIndex, currentTopicIndex));
    }, [currentTopicIndex])
    // _________________________________________________________________________________________________________________________________________


    // <-- handleScroll reached -> mark topic as completed -->
    const handleScroll = () => {

        const contentElement = contentRef.current;
        if (contentElement) {
            const { scrollTop, scrollHeight, clientHeight } = contentElement;
            const id = currentCourseIndex + '-' + currentChapterIndex + '-' + currentTopicIndex;
            const prevScroll = prevScrollTop[id] ?? 0;
            if (scrollTop > prevScroll) {
                setPrevScrollTop((prevState) => ({ ...prevState, [id]: scrollTop }));

                const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 10;
                if (scrolledToBottom) {
                    if (accessToken && userId) {
                        if (!completedTopics[currentCourseIndex]?.[currentChapterIndex]?.[currentTopicIndex]) {
                            console.log('Reached at end', currentCourseIndex, currentChapterIndex, currentTopicIndex);
                            dispatch(markTopicCompletionAsync({
                                user_id: userId,
                                courseIndx: currentCourseIndex,
                                chapterIndx: currentChapterIndex,
                                topicIndx: currentTopicIndex
                            }))
                        }
                    }
                }
            }
        }
    };

    useEffect(() => {
        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (contentElement) {
                contentElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [currCourseStateData]);


    // _________________________________________________________________________________________________________________________________________

    // <-- Custom markdown component -->
    const components = {
        p: p => <ParagraphBlock textContent={p.children} />,
        h1: h1 => <PrimaryTitle primaryTitle={h1.children} />,
        h2: h2 => <SecondaryTitle secondaryTitle={h2.children} />,
        li: li => <ListItem textContent={li.children} />,
        code: CodeBlock,
        strong: strong => <StrongText textContent={strong.children} />,
        blockquote: blockquote => <NoteBlock noteContent={blockquote.children} />
    };
    // _________________________________________________________________________________________________________________________________________

    const ChevIcon = () => {
        return (
            <svg
                style={{ width: '100%' }}
                viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.89334 15.7148L14.5488 10.0594L8.89334 4.40388" stroke="black" stroke-width="1.61585" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        )
    }
    const SideBarToggleBtnIcon = () => {
        return (
            <svg
                style={{ width: '100%' }}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_616_444)">
                    <path d="M23.0293 3.729L0.972982 3.729" stroke="black" stroke-width="2.06778" stroke-linecap="round" />
                    <path opacity="0.3" d="M23.0293 12L0.972982 12" stroke="black" stroke-width="2.06778" stroke-linecap="round" />
                    <path d="M23.0293 20.2712H0.972982" stroke="black" stroke-width="2.06778" stroke-linecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_616_444">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        )
    }



    const BreadCrumElement = ({ innerText, redirectToPath, textType }) => {
        return (
            <div className={`${textType === 'chapter' ? styles.breadCrumElementChapterWrapper : styles.breadCrumElementCourseWrapper}`} >
                <div className={`${textType === 'chapter' ? styles.breadCrumChapterTextWrapper : styles.breadCrumCourseTextWrapper}`} onClick={() => navigate(redirectToPath)}  >
                    <p className={`${styles.breadCrumText} ${textType === 'chapter' ? styles.breadCrumChapterText : styles.breadCrumCourseText}`}>{innerText}</p>
                </div>
                <div className={styles.breadCrumIconWrapper} >
                    <div className={styles.breadCrumIconDiv} >
                        <ChevIcon />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`${styles.contentComponentWrapper} `}>

            <div className={styles.navigationBarWrapper}>

                <div className={styles.sideBarToggleBtnContainer} >
                    <div className={styles.sideBarToggleBtnIconDiv} onClick={() => toggleSidebar(true)} >
                        <SideBarToggleBtnIcon />
                    </div>
                </div>
                <div className={styles.navigationBarContainer} >
                    <BreadCrumElement innerText={coursesList[currentCourseIndex].courseName} redirectToPath={'/user/allcourses'} textType={'course'} />
                    <BreadCrumElement innerText={coursesList[currentCourseIndex].chaptersList[currentChapterIndex].chapterName} redirectToPath={'/user/course'} textType={'chapter'} />
                </div>
            </div>

            {/* <-- redering markdown --> */}
            <div className={styles.markDownWrapper} ref={contentRef}>
                {isMarkDownLoading ?
                    <SkeletonComponent /> :
                    <ReactMarkdown
                        children={currentMarkdownContent}
                        components={components}
                    />
                }
            </div>
        </div >
    )
}

export default ContentComponent;