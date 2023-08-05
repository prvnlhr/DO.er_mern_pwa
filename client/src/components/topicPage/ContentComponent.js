
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
import { markTopicProgress } from "../../redux/features/course/courseSlice"

import { updateTimeSpent } from "../../redux/features/course/timeSpentSlice"


const ContentComponent = () => {
    const dispatch = useDispatch();
    const contentRef = useRef(null);

    const [prevScrollTop, setPrevScrollTop] = useState({});



    const currCourseStateData = useSelector((state) => state.course.currentCourseState);

    const { currentCourseIndex, currentChapterIndex, currentTopicIndex, currentMarkdownContent, isMarkDownLoading } = currCourseStateData;

    // -----------------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        const startTime = new Date();
        const dayOfWeek = startTime.getDay();

        // Check if it's Sunday (day number 0)
        if (dayOfWeek === 0) {
            // Clear the data in local storage
            localStorage.removeItem('timeSpentData');
        }

        return () => {
            const endTime = new Date();
            const timeSpentMinutes = Math.floor((endTime - startTime) / (1000 * 60));

            // Update the timeSpent in localStorage
            const storedData = JSON.parse(localStorage.getItem('timeSpentData')) || {};
            storedData[dayOfWeek] = (storedData[dayOfWeek] || 0) + timeSpentMinutes;
            localStorage.setItem('timeSpentData', JSON.stringify(storedData));
            // Dispatch the updateTimeSpent action to update the Redux state
            dispatch(updateTimeSpent(storedData));
        };
    }, []);




    useEffect(() => {
        const startTime = new Date();
        const dayOfWeek = startTime.getDay();

        const handleBeforeUnload = (event) => {
            const endTime = new Date();
            const timeSpentMinutes = Math.floor((endTime - startTime) / (1000 * 60));

            // Update the timeSpent in localStorage
            const storedData = JSON.parse(localStorage.getItem('timeSpentData')) || {};
            storedData[dayOfWeek] = (storedData[dayOfWeek] || 0) + timeSpentMinutes;
            localStorage.setItem('timeSpentData', JSON.stringify(storedData));

            // Dispatch the updateTimeSpent action to update the Redux state
            dispatch(updateTimeSpent(storedData));
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };

    }, []);

    // -----------------------------------------------------------------------------------------------------------------------------

    const components = {
        p: p => <ParagraphBlock textContent={p.children} />,
        h1: h1 => <PrimaryTitle primaryTitle={h1.children} />,
        h2: h2 => <SecondaryTitle secondaryTitle={h2.children} />,
        li: li => <ListItem textContent={li.children} />,
        code: CodeBlock,
        strong: strong => <StrongText textContent={strong.children} />,
        blockquote: blockquote => <NoteBlock noteContent={blockquote.children} />
    };





    useEffect(() => {
        contentRef.current.scrollTop = 0;
        if (isMarkDownLoading === false && currentMarkdownContent === "") {
            setMarkDownFile(dispatch, currentCourseIndex, currentChapterIndex, currentTopicIndex);
        }

    }, [currentCourseIndex, currentChapterIndex, currentTopicIndex, isMarkDownLoading, currentMarkdownContent, dispatch])

    // -------------------------------------------------------------------------------------------------------------------

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
                    console.log('Reached at end', currentCourseIndex, currentChapterIndex, currentTopicIndex);
                    dispatch(markTopicProgress({
                        user_id: '64cc3f9805be4f275c695cc7',
                        courseIndx: currentCourseIndex,
                        chapterIndx: currentChapterIndex,
                        topicIndx: currentTopicIndex
                    }))
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


    // --------------------------------------------------------------------------------------------------------    

    return (
        <div className={`${styles.wrapper} `}>
            <div className={styles.innerWrapper} ref={contentRef}>
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