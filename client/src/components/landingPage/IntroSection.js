import React from 'react'
import styles from "./styles/introSectionStyles.module.css"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import IntroSvg from './IntroSvg';
import TiltedArrowIcon from "../icons/TiltedArrowIcon"

const IntroSection = () => {

    const navigate = useNavigate();

    const handleArrowLinkClicked = () => {
        navigate("/user/allcourses")
    }



    return (
        <div className={styles.introSectionOuterWrapper} >
            <div className={styles.introSectionInnerWrapper} >

                <div className={styles.descriptionSection} >
                    <div className={styles.upperTextWrapper} >
                        <p className={styles.upperText}>Build your skills to advance your career path. Join the Way of <span>Digital</span> Literacy.
                            Choose   <span className={styles.introSpanText}>Doer</span> for those who wanna  <span>do</span>. </p>
                    </div>
                    <div className={styles.lowerTextWrapper} >
                        <p className={styles.lowerText}>Choose from wide range of free tutorials ranging from web development, CSS core, Programming etc. and nourish your skills to stand out amongst the crowd.</p>
                    </div>
                    <div className={styles.btnWrapper} >
                        <div className={styles.btnInnerWrapper}>
                            <div className={styles.btnTextWrapper} >
                                <p className={styles.exploreText}>Explore</p>
                                <p className={styles.coursesText}>courses
                                    {/* <span className={styles.courseTextSpan} >.</span>  */}
                                </p>
                            </div>
                            <div className={styles.arrowIconWrapper} >

                                <div className={styles.arrowIconDiv} onClick={handleArrowLinkClicked}>
                                    <TiltedArrowIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.illustrationSection} >
                    <div className={styles.illustrationWrapper} >
                        <IntroSvg />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroSection