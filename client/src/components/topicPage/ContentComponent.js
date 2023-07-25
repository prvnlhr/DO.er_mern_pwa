
import React, { useState, useEffect } from 'react'
import styles from "./styles/contentComponentStyles.module.css"
import CodeBlock from './formattingComponents/CodeBlock'
import TextBlock from "./formattingComponents/TextBlock"
import MainHeading from "./formattingComponents/MainHeading"
import SubHeading from "./formattingComponents/SubHeading"
import NoteBlock from "./formattingComponents/NoteBlock"
import SubTextBlock from './formattingComponents/SubTextBlock'
import Point from "./formattingComponents/Point"
import InlineCode from "./formattingComponents/InlineCode"
import markDownStyles from "./styles/markdownStyles.module.css"
import Markdown from 'markdown-to-jsx';

import ReactMarkdown from "react-markdown";


const ContentComponent = ({ toggleSidebar }) => {

    const [markdownContent, setMarkdownContent] = useState("");
    useEffect(() => {
        import('../../courseData/markdowns/javascript.md')
            .then(res =>
                fetch(res.default)
                    .then(response => response.text())
                    .then(response => setMarkdownContent(response))
                    .catch(err => console.log(err))
            )
    }, [])

    const MyParagraph = ({ children, ...props }) => (
        <div className={markDownStyles.markDownSpanText} >{children}</div>
    );


    return (
        <div className={`${styles.wrapper} `}>
            <div className={styles.showSidebarIconWrapper} >
                <div className={styles.iconDiv} onClick={toggleSidebar} >
                    <svg
                        className={styles.sideBarShowIcon}
                        viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L4 6" stroke="#202D40" stroke-width="1.5" stroke-linecap="round" />
                        <path opacity="0.3" d="M20 12L4 12" stroke="#202D40" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M20 18H4" stroke="#202D40" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </div>

            </div>
            <div className={styles.innerWrapper} >
                <MainHeading mainHeading={'Origins of JavaScript'} />
                <TextBlock textContent={'JavaScript is a programming language initially designed to interact with elements of web pages. In web browsers, JavaScript consists of three main parts.'} />
                {/* <Point pointNum={'1'} pointContent={'Always define points clearly Make sure that css styles are applied correctly Make sure that css styles are applied correctly Make sure that css styles are applied correctly Make sure that css styles are applied correctly Make sure that css styles are applied correctly'} /> */}
                {/* <SubHeading subHeading={'Data types in Javascript'} /> */}
                {/* <SubTextBlock subTextContent={'subTextContent'} /> */}
                {/* <br /> */}
                {/* <MainHeading mainHeading={'Closure in JavaScript'} /> */}
                {/* <TextBlock textContent={'textContent'} /> */}
                {/* <SubHeading subHeading={'Uses of Closure'} /> */}
                {/* <SubTextBlock subTextContent={'subTextContent'} /> */}

                {/* <Markdown
                    options={
                        {
                            overrides: {
                                p: ({ children }) => <TextBlock textContent={children} />,
                                h2: ({ children }) => <MainHeading mainHeading={children} />
                            }
                        }
                    }
                >
                    {markdownContent}
                </Markdown> */}

            </div>
        </div>
    )
}

export default ContentComponent