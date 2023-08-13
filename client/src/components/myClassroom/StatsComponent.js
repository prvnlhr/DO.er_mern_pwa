import React from 'react'
import styles from "./styles//statsComponentStyles.module.css";

import UserNameCountryComponent from "./UserNameCountryComponent"
import OverviewComponent from "./OverviewComponent";
import GraphComponent from "./GraphComponent"



const StatsComponent = () => {
    return (
        <div className={styles.statsComponentWrapper}>
            <div className={styles.statsComponentInnerWrapper} >
                <UserNameCountryComponent />
                <OverviewComponent />
                <GraphComponent />
            </div>
        </div>
    )
}

export default StatsComponent