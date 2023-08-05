import React from 'react';
import styles from "./styles/statsComponentStyles.module.css";
import StreakStatIcon from "../icons/StreakStatIcon";
import CompletionStatIcon from "../icons/CompletionStatIcon";
import HoursSpentIcon from "../icons/HoursSpentIcon"

import userAvatar from "./userAvatar.png"

const StatsComponent = () => {
    const InfoElement = ({ IconElement, attribute, value }) => {
        return (
            <div className={styles.infoElementContainer}>
                <div className={styles.infoIconWrapper}>
                    <div className={styles.infoIconDiv}>
                        <IconElement />
                    </div>
                </div>
                <div className={styles.infoValueWrapper}>
                    <p>{value}</p>
                </div>
                <div className={styles.infoAttrWrapper}>
                    <p>{attribute}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.statsComponentWrapper}>
            <div className={styles.statsInnerWrapper}>

                <div className={styles.userInfoWrapper}>
                    <div className={styles.userInfoInnerWrapper}>

                        <div className={styles.userAvatarWrapper}>
                            <div className={styles.avatarDiv}>
                                <img src={userAvatar} />
                            </div>
                        </div>

                        <div className={styles.userNameWrapper}>
                            <p>Steve Rogers</p>
                        </div>

                        <div className={styles.userLocationWrapper}>
                            <p>Queens, USA</p>
                        </div>

                    </div>
                </div>

                <div className={styles.infoElementWrapper}>
                    <div className={styles.infoElementInnerWrapper} >
                        <InfoElement IconElement={StreakStatIcon} attribute={'Max Streak'} value={'12 Days'} />
                        <InfoElement IconElement={HoursSpentIcon} attribute={'Hours Spent'} value={'12 h'} />
                        <InfoElement IconElement={CompletionStatIcon} attribute={'Completed'} value={'4'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsComponent;
