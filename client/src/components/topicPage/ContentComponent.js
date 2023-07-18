import React from 'react'
import styles from "./styles/contentComponentStyles.module.css"
import CodeBlock from './formattingComponents/CodeBlock'
import TextBlock from "./formattingComponents/TextBlock"
import MainHeading from "./formattingComponents/MainHeading"
import SubHeading from "./formattingComponents/SubHeading"
import NoteBlock from "./formattingComponents/NoteBlock"
import SubTextBlock from './formattingComponents/SubTextBlock'
const ContentComponent = ({ showSideBar }) => {

    let inputString = `function factorial(n) {
        if (n === 0 || n === 1) {
          return 1;
        }
        return n * factorial(n - 1);
      }
      
      const number = 5;
      const result = factorial(number);`

    let language = 'javascript'
    let textContent = `JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language which is also known as the scripting language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it. JavaScript is a weakly typed language(dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements.`
    let subTextContent = `Variables are containers that you give a name to that hold any piece of information or data for you. Variables are used to store data in memory, and to access that data later. The two main parts of a variable are the name and its value. Because they are variables, their value is meant to vary over time, in other words change. Let's create our first one.`


    return (
        <div className={`${styles.wrapper} `}>
            <div className={styles.innerWrapper} >
                <MainHeading mainHeading={'Introduction to JavaScript'} />
                <TextBlock textContent={textContent} />
                <SubHeading subHeading={'Data types in Javascript'} />
                <SubTextBlock subTextContent={subTextContent} />
                <MainHeading mainHeading={'Closure in JavaScript'} />
                <TextBlock textContent={textContent} />
                <SubHeading subHeading={'Uses of Closure'} />
                <SubTextBlock subTextContent={subTextContent} />
            </div>
        </div>
    )
}

export default ContentComponent