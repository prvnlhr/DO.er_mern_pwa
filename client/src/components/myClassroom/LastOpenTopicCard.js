import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import styles from "./styles/lastOpenTopicCardStyles.module.css";
import JavaScriptLogo from "../icons/courseLogos/JavaScriptLogo";
import TiltedArrowIcon from '../icons/TiltedArrowIcon';
import { coursesList } from "../../courseData/courseData";
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"
import { useDispatch, useSelector } from 'react-redux';
import { setMarkDownFile } from "../helperFunctions/setMarkDownHelperFunction"
import CircularProgressBar from './CircularProgressBar';


const LastOpenTopicCard = ({ lastOpenTopicData }) => {

    const courseState = useSelector((state) => state.course?.currentCourseState);
    const { completedCourses, completedChapters, completedTopics } = courseState;

    const { courseIndex, chapterIndex, topicIndex } = lastOpenTopicData;
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleArrowLinkClicked = () => {
        updateReduxState(dispatch, {
            data:
            {
                'currentCourseIndex': courseIndex || 0,
                'currentChapterIndex': chapterIndex || 0,
                'currentTopicIndex': topicIndex || 0,
            }
        });
        setMarkDownFile(dispatch, courseIndex, chapterIndex, topicIndex);
        navigate("/user/topic")

    }

    const numTopicCompleted =
        Object.keys(completedTopics[lastOpenTopicData.courseIndex]?.[lastOpenTopicData.chapterIndex] || {}).length;

    const totalTopics = coursesList[lastOpenTopicData.courseIndex]?.chaptersList[lastOpenTopicData.chapterIndex]?.topicsList.length || 1;


    const progressPercentage = (numTopicCompleted / totalTopics) * 100;

    const LinkArrowIcon = () => {
        return (
            <svg
                style={{ width: '40%' }}
                viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.05664 30.2394L29.8609 3.75439M29.8609 3.75439V29.18M29.8609 3.75439H5.08881" stroke="white" stroke-width="2.97742" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


        )
    }

    const ChevronIcon = () => {
        return (
            <svg
                style={{ width: '100%' }}
                viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_536_383)">
                    <path d="M5.04883 16.6969L12.6287 9.117L5.04883 1.53711" stroke="#51637D" stroke-width="1.9143" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_536_383">
                        <rect width="17" height="17" fill="white" transform="translate(0.339844 0.616943)" />
                    </clipPath>
                </defs>
            </svg>
        )

    }
    const BreadCrumElement = ({ text, txtColor, fontWt }) => {
        return (
            <div className={styles.breadCrumElementWrapper} >
                <div className={styles.breadCrumTextContainer} ><p style={{ color: `${txtColor}`, fontWeight: `${fontWt}` }} >{text}</p></div>
                <div className={styles.breadCrumIconContainer} >
                    <div className={styles.chevIconDiv} >
                        <ChevronIcon />
                    </div>
                </div>
            </div>
        )
    }




    return (
        <div className={styles.cardOuterWrapper}>

            <div className={styles.cardInnerWrapper} >
                <div className={styles.breadCrumCell} >
                    <BreadCrumElement text={coursesList[lastOpenTopicData.courseIndex].courseName} txtColor={'#51637D'} fontWt={400} />
                    <BreadCrumElement text={coursesList[lastOpenTopicData.courseIndex].chaptersList[lastOpenTopicData.chapterIndex].chapterName} txtColor={'#6167A0'} fontWt={500} />
                </div>
                <div className={styles.chapterNameCell} >
                    <div className={styles.chapterNameDiv} >
                        <p>{coursesList[lastOpenTopicData.courseIndex].chaptersList[lastOpenTopicData.chapterIndex].topicsList[lastOpenTopicData.topicIndex].topicName}</p>
                    </div>
                </div>
                <div className={styles.chapterProgressCell} >
                    <div className={styles.progressAttributeContainer} >
                        <p>Chapters completed</p>
                    </div>
                    <div className={styles.progressBarWrapper} >
                        <div className={styles.barWrapper} >
                            <div className={styles.barContainer} >
                                <div className={styles.barDiv}
                                    style={{ width: `${progressPercentage}%` }}
                                ></div>
                            </div>
                        </div>
                        <div className={styles.completedNumContainer} >
                            <div className={styles.numDiv} >
                                <p>
                                    {numTopicCompleted}
                                </p>
                            </div>
                            <div className={styles.numDiv} ><p className={styles.slashText} >/</p></div>
                            <div className={styles.numDiv} >
                                <p>
                                    {totalTopics}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.linkButtonCell} >
                    {/* <CircularProgressBar total={100} completed={75} /> */}
                    <div className={styles.linkBtnDiv} onClick={handleArrowLinkClicked} >
                        <LinkArrowIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastOpenTopicCard