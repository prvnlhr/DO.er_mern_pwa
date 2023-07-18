import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from "./styles/codeBlockStyles.module.css"
const CodeBlock = ({ codeString, language }) => {
    return (
        <SyntaxHighlighter
            className={styles.codeblockStyle}
            style={atomOneDark}
            showLineNumbers={true}
            customStyle={{
                padding: `30px`,
                borderRadius: `10px`,
                fontWeight: '400',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: `#282A35`,
                scrollbarWidth: `2`,

            }}
            codeTagProps={{
                style: {
                    fontFamily: "JetBrains Mono"
                }
            }}

            language={language}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export default CodeBlock