import React, { useState } from 'react'
import styles from "./styles/sidebarComponentStyles.module.css"
import { Icon } from '@iconify/react';
const SideBarComponent = ({ showSideBar, toggleSidebar }) => {
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
            let listHeight = moduleData[val].subTopicData.length * 41;
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
                <div className={styles.sidebarHeadingDiv} >
                    <p>Table of Contents</p>
                </div>
                <div className={styles.sidebarCloseIconDiv} onClick={toggleSidebar}  >
                    {/* <svg
                        //  width="24" height="27" 
                        viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L4 6" stroke="#202D40" stroke-width="1.5" stroke-linecap="round" />
                        <path opacity="0.3" d="M20 12L4 12" stroke="#202D40" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M20 18H4" stroke="#202D40" stroke-width="1.5" stroke-linecap="round" />
                    </svg> */}
                    {/* 
                    <svg
                        // width="24" height="24"
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.72032 5.72006C5.86094 5.57961 6.05157 5.50072 6.25032 5.50072C6.44907 5.50072 6.63969 5.57961 6.78032 5.72006L12.0003 10.9401L17.2203 5.72006C17.312 5.62133 17.4286 5.54916 17.5578 5.51115C17.6871 5.47313 17.8242 5.47068 17.9547 5.50406C18.0852 5.53743 18.2044 5.60539 18.2995 5.70078C18.3946 5.79617 18.4623 5.91545 18.4953 6.04606C18.5287 6.17643 18.5264 6.31341 18.4886 6.44257C18.4507 6.57173 18.3788 6.68832 18.2803 6.78006L13.0603 12.0001L18.2803 17.2201C18.379 17.3117 18.4512 17.4283 18.4892 17.5576C18.5272 17.6868 18.5297 17.8239 18.4963 17.9545C18.4629 18.085 18.395 18.2041 18.2996 18.2992C18.2042 18.3944 18.0849 18.462 17.9543 18.4951C17.8239 18.5285 17.687 18.5261 17.5578 18.4883C17.4286 18.4505 17.3121 18.3785 17.2203 18.2801L12.0003 13.0601L6.78032 18.2801C6.63806 18.4125 6.45 18.4846 6.25569 18.4812C6.06137 18.4779 5.87592 18.3993 5.73832 18.2621C5.60107 18.1245 5.52252 17.939 5.51916 17.7447C5.5158 17.5504 5.58791 17.3623 5.72032 17.2201L10.9403 12.0001L5.72032 6.78006C5.57987 6.63943 5.50098 6.44881 5.50098 6.25006C5.50098 6.05131 5.57987 5.86068 5.72032 5.72006Z" fill="black" />
                    </svg> */}

                    <svg
                        className={styles.closeIcon}
                        // width="24" height="24" 
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                </div>
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