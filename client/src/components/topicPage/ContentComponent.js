
import React, { useState, useEffect } from 'react'
import styles from "./styles/contentComponentStyles.module.css"
import Markdown from 'markdown-to-jsx';


import ParagraphBlock from "./customMarkDownComponents/ParagraphBlock"
import PrimaryTitle from "./customMarkDownComponents/PrimaryTitle"
import ListItem from './customMarkDownComponents/ListItem'
import HighlightText from "./customMarkDownComponents/HighlightText"
import StrongText from './customMarkDownComponents/StrongText'
import SecondaryTitle from './customMarkDownComponents/SecondaryTitle';



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
                <Markdown
                    options={
                        {
                            overrides: {
                                p: ({ children }) => <ParagraphBlock textContent={children} />,
                                h1: ({ children }) => <PrimaryTitle primaryTitle={children} />,
                                h2: ({ children }) => <SecondaryTitle secondaryTitle={children} />,
                                span: ({ children }) => <HighlightText textContent={children} />,
                                li: ({ children, ordered }) => <ListItem textContent={children} />,
                                strong: ({ children }) => <StrongText textContent={children} />,
                                inlineCode: ({ children }) => (
                                    <code style={{ fontFamily: 'Poppins', backgroundColor: 'red', color: 'white', padding: '2px' }}>{children}</code>
                                ),
                            }
                        }
                    }
                >
                    {markdownContent}

                </Markdown>

            </div>
        </div >
    )
}

export default ContentComponent