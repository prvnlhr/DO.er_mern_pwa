import React from 'react';
import styles from './styles/inProgressCourseCardStyles.module.css';
import { coursesList } from '../../courseData/courseData.js';

const InProgressCard = ({ courseIndex, numCompletedChapters, totalChapters }) => {
    const percentage = (numCompletedChapters / totalChapters) * 100;
    const beforePoint = Math.floor(percentage);
    const afterPoint = ((percentage - beforePoint) * 100).toFixed(0).padStart(2, '0');

    const InProgressPercentElement = () => (
        <div className={styles.inProgressElementWrapper}>
            <div className={styles.progressValueCell}>
                <p>{beforePoint}<span>.{afterPoint}%</span></p>
            </div>
            <div className={styles.progressAtrrCell}>
                <p>PROGRESS</p>
            </div>
        </div>
    );

    const CompletedChaptersElement = () => (
        <div className={styles.completedChaptersElementWrapper}>
            <div className={styles.completedValueCell}>
                <p>
                    {numCompletedChapters}
                    <span> /{totalChapters}</span>
                </p>
            </div>
            <div className={styles.chapterAttrCell}>
                <p>OUT OF CHAPTERS</p>
            </div>
        </div>
    );

    const LinkArrowIcon = () => (
        <svg
            style={{ width: '40%' }}
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.05664 30.2394L29.8609 3.75439M29.8609 3.75439V29.18M29.8609 3.75439H5.08881"
                stroke="white"
                strokeWidth="2.97742"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className={styles.cardOuterWrapper}>
            <div className={styles.cardInnerWrapper}>
                <div className={styles.courseAttrCell}>
                    <p>COURSE</p>
                </div>
                <div className={styles.courseNameCell}>
                    <p>{coursesList[courseIndex].courseName}</p>
                </div>
                <div className={styles.progressBarCell}>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBarDiv}></div>
                    </div>
                </div>
                <div className={styles.progressPercCell}>
                    <InProgressPercentElement />
                </div>
                <div className={styles.completedChaptersCell}>
                    <CompletedChaptersElement />
                </div>
                <div className={styles.arrowLinkBtnCell}>
                    <div className={styles.linkBtnDiv}>
                        <LinkArrowIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InProgressCard;
