import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import mrkdwnStyles from "./styles/markdownCustomStyles.module.css"
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { srcery } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


const CodeBlock = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ?
        (
            <div className={mrkdwnStyles.codeBlockWrapper}>
                <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={nightOwl}
                    language={match[1]}
                    showLineNumbers={true}
                    PreTag="div"
                    customStyle={{
                        padding: `30px`,
                        borderRadius: '0.8rem',
                        width: '100%',
                        marginTop: '5%',
                        marginBottom: '5%'

                    }}
                />
            </div>
        )
        :
        (
            <code {...props}
                className={className}
            >
                <span className={mrkdwnStyles.inlineCodeStyle}>
                    {children}
                </span>
            </code>
        );
};


export default CodeBlock