import React from 'react'
import styles from "./styles/subHeaderStyles.module.css"
import StatsComponent from './StatsComponent';
import GraphComponent from "./GraphComponent"
const SubHeader = () => {
    return (
        <div className={styles.subHeaderWrapper} >
            <StatsComponent />
            <GraphComponent />
        </div>
    )
}

export default SubHeader;