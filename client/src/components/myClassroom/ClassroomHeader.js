import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from "./styles/classroomHeaderStyles.module.css"
import OverviewComponent from "./OverviewComponent"
import ProductivityGraphComponent from './ProductivityGraphComponent'
import ClockIcon from '../icons/ClockIcon'
import BackBtnIcon from "../icons/BackBtnIcon"
const ClassroomHeader = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.classroomHeaderWrapper} >
            <div className={styles.headingWrapper}>
                <div className={styles.backBtnIconContainer}>
                    <div className={styles.backBtnIconDiv} onClick={() => navigate(-1)}>
                        <BackBtnIcon />
                    </div>
                </div>
                <div className={styles.headingContainer}>
                    <p>My Classroom</p>
                </div>
            </div>
            <div className={styles.overviewWrapper}>
                <OverviewComponent />
            </div>
            <div className={styles.productivityGraphWrapper}>
                <ProductivityGraphComponent />
            </div>



        </div>
    )
}

export default ClassroomHeader