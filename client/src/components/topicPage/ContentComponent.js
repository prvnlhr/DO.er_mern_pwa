
import React, { useState, useEffect, useContext } from 'react'
import styles from "./styles/contentComponentStyles.module.css"
import SideBarShowIcon from "../icons/SideBarShowIcon"

import { useCourseContext } from "../../appState/appContext"
import { coursesList } from "../../courseData/courseData"

import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


import ParagraphBlock from "./customMarkDownComponents/ParagraphBlock"
import PrimaryTitle from "./customMarkDownComponents/PrimaryTitle"
import ListItem from './customMarkDownComponents/ListItem'
import HighlightText from "./customMarkDownComponents/HighlightText"
import StrongText from './customMarkDownComponents/StrongText'
import SecondaryTitle from './customMarkDownComponents/SecondaryTitle';
import CodeBlock from "./customMarkDownComponents/CodeBlock"
import mrkdwnStyles from "./customMarkDownComponents/styles/markdownCustomStyles.module.css"
import { setMarkDownFile } from "../utilityFunctions/getMarkdownUtilityFunction"
import NoteBlock from './customMarkDownComponents/NoteBlock'



const ContentComponent = () => {

    const { currentCourseData, updateCurrentCourseData } = useCourseContext();
    const { currentCourseIndex, currentCourseModuleIndex, currentCourseTopicIndex, markDownContents } = currentCourseData;

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
        if (currentCourseData.markDownContents === "") {
            setMarkDownFile(currentCourseIndex, currentCourseModuleIndex, currentCourseTopicIndex, updateCurrentCourseData);
        }
    }, [])

    return (
        <div className={`${styles.wrapper} `}>
            <div className={styles.innerWrapper} >
                <ReactMarkdown
                    children={markDownContents}
                    components={components}
                />
            </div>
        </div >
    )
}

export default ContentComponent;