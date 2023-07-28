
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

import { getMarkDownFile } from "../utilityFunctions/utility"
import NoteBlock from './customMarkDownComponents/NoteBlock'




const ContentComponent = ({ toggleSidebar }) => {

    const { currentCourseData, updateCurrentCourseData } = useCourseContext();
    const { currentCourseIndex, currentCourseModuleIndex, currentCourseTopicIndex, markDownContents } = currentCourseData;

    // const [markdownContent, setMarkdownContent] = useState("");






    useEffect(() => {
        const courseFolder = coursesList[currentCourseData.currentCourseIndex].courseFolderName;
        const moduleFolder = coursesList[currentCourseData.currentCourseIndex].modulesList[currentCourseData.currentCourseModuleIndex].moduleFolderName;
        const topicFileName = coursesList[currentCourseData.currentCourseIndex].modulesList[currentCourseData.currentCourseModuleIndex].topicsList[0].topicFileName;

        getMarkDownFile(courseFolder, moduleFolder, topicFileName)
            .then((res) => {
                // console.log(res);
                updateCurrentCourseData('markDownContents', res);
            })
            .catch((error) => {
                console.log("Error:", error);
            });

    }, [])



    const components = {
        p: p => <ParagraphBlock textContent={p.children} />,
        h1: h1 => <PrimaryTitle primaryTitle={h1.children} />,
        h2: h2 => <SecondaryTitle secondaryTitle={h2.children} />,
        li: li => <ListItem textContent={li.children} />,
        code: CodeBlock,
        strong: strong => <StrongText textContent={strong.children} />,
        blockquote: blockquote => <NoteBlock noteContent={blockquote.children} />

        // blockquote: blockquote =>
        //     <div class="note" style={{ borderLeft: '2px solid red' }}>
        //         <strong> Note : </strong>{blockquote.children}
        //     </div>

        // blockquote: blockquote =>
        //     <div style={{ paddingLeft: '20px', border: '1px solid red' }} >
        //         <blockquote class="note" style={{ borderLeft: '3px solid #367CF2', paddingLeft: '2%' }}>
        //             <strong> Note : </strong>
        //             <p>
        //                 {blockquote.children}
        //             </p>
        //         </blockquote>
        //     </div>
    };





    return (
        <div className={`${styles.wrapper} `}>
            {/* <div className={styles.showSidebarIconWrapper} >
                <div className={styles.iconDiv} onClick={() => toggleSidebar(true)} >
                    <SideBarShowIcon />
                </div>
            </div> */}

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