import React, { useState } from 'react'
import styles from "./styles/sidebarComponentStyles.module.css"
import { Icon } from '@iconify/react';
const SideBarComponent = ({ showSideBar }) => {

    let moduleData = [
        {
            moduleTopicName: "Intro To JavaScript",
            subTopicData: [
                {
                    subTopicName: "What is JavaScript"
                },
                {
                    subTopicName: "Basic Syntax in JS"
                },
                {
                    subTopicName: "JS Varibles"
                },
                {
                    subTopicName: "Types of Data type in JS"
                },
            ]
        },
        {
            moduleTopicName: "Closure in JS",
            subTopicData: [
                {
                    subTopicName: "Defination of Closure"
                },
                {
                    subTopicName: "How to define Closure"
                },
                {
                    subTopicName: "Example of Closure"
                },
                {
                    subTopicName: "Uses of Closure in JS"
                },
                {
                    subTopicName: "Currying in JS"
                },
            ]
        },
        {
            moduleTopicName: "Control Flow in JS",
            subTopicData: [
                {
                    subTopicName: "JavaScript Comparison Operators"
                },
                {
                    subTopicName: "JavaScript if...else Statement"
                },
                {
                    subTopicName: "JavaScript for loop"
                },
                {
                    subTopicName: "JavaScript break Statement"
                },
                {
                    subTopicName: "JavaScript continue Statement"
                },
                {
                    subTopicName: "JavaScript switch Statement"
                },
            ]
        },
    ]
    const [showListIndex, setShowListIndex] = useState(new Set());

    // let showListIndex = new Set();

    const addToSet = (val) => {
        setShowListIndex(previousState => new Set([...previousState, val]))
    }
    const removeFromSet = (val) => {
        setShowListIndex(prev => new Set([...prev].filter(x => x !== val)))
    }
    const toggleList = (val) => {
        console.log(val);

        if (showListIndex.has(val)) {
            removeFromSet(val);
        } else {
            let listHeight = moduleData[val].subTopicData.length * 36;
            document.documentElement.style.setProperty(
                "--listWrapperHeight",
                `${listHeight}px`
            );
            addToSet(val);
        }

        // if (val === currShowList) {
        //   setCurrShowList(null);
        // } else {
        //   let listHeight = moduleData[val].subTopicData.length * 36;
        //   document.documentElement.style.setProperty(
        //     "--listWrapperHeight",
        //     `${listHeight}px`
        //   );
        //   setCurrShowList(val);
        //   showListIndex.add(val);
        // }
    }
    return (
        <div className={`${styles.sidebarComponentWrapper}  ${showSideBar && styles.sideBarSlide}`} >
            <div className={styles.sidebarHeadingWrapper}>
                <p>Table of Contents</p>
            </div>
            <div className={styles.sidebarContentWrapper}>


                {moduleData.map((data, index) => (
                    <div className={styles.moduleTopicListOuterWrapper}>
                        <div className={styles.moduleNameWrapper} onClick={() => toggleList(index)} >
                            <div className={styles.moduleNameDiv}>
                                <p>{data.moduleTopicName}</p>
                            </div>
                            <div className={`${styles.moduleDropDownIconDiv} ${showListIndex.has(index) && styles.moduleDropDownIconDivRotate}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>

                        <div className={
                            // currShowList === index ? styles.moduleSubTopicListWrapperShow : styles.moduleSubTopicListWrapperHide
                            showListIndex.has(index) ? styles.moduleSubTopicListWrapperShow : styles.moduleSubTopicListWrapperHide
                        } >

                            {moduleData[index].subTopicData.map((subData, indx) => (
                                <div div className={styles.subTopicElementWrapper} >
                                    <div className={styles.subTopicElementIndicatorContainer} >
                                        <div className={styles.indicatorDiv} >
                                        </div>
                                    </div>
                                    <div className={styles.subTopicNameDiv} >
                                        <p className={styles.subTopicNameText}>{subData.subTopicName}</p>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default SideBarComponent