import React, { useState, useEffect } from 'react';
import styles from "./styles/statsComponentStyles.module.css";
import StreakStatIcon from "../icons/StreakStatIcon";
import CompletionStatIcon from "../icons/CompletionStatIcon";
import HoursSpentIcon from "../icons/HoursSpentIcon"
import { useSelector } from 'react-redux'

import userAvatar from "./userAvatar.png"

const StatsComponent = () => {


    const authState = useSelector((state) => state.auth);

    const [timeSpendingData, setTimeSpendingData] = useState({
        hoursSpent: 0,
        minutesSpent: 0
    });

    const defaultData = [0, 0, 0, 0, 0, 0, 0];



    const currentDayOfWeek = new Date().getDay();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const chartRef = React.useRef(null);

    const getTotalHoursTillToday = () => {

        const dataFromLocalStorage = JSON.parse(localStorage.getItem('dailyTimeSpent')) || defaultData;
        const chartData = Object.values(dataFromLocalStorage);
        console.log(chartData);
        // const currentDayOfWeek = new Date().getDay();
        // const totalMinutes = chartData?.slice(0, currentDayOfWeek).reduce((a, b) => a + b);
        // const hours = Math.floor(totalMinutes / 60);
        // const minutes = Math.round(totalMinutes % 60);
        // setTimeSpendingData({
        //     hoursSpent: hours,
        //     minutesSpent: minutes
        // })
    };

    useEffect(() => {
        getTotalHoursTillToday();
    }, []);

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
                            <p>{authState.username}</p>
                        </div>

                        <div className={styles.userLocationWrapper}>
                            <p>{authState.country}</p>
                        </div>

                    </div>
                </div>

                <div className={styles.infoElementWrapper}>
                    <div className={styles.infoElementInnerWrapper} >
                        <InfoElement IconElement={StreakStatIcon} attribute={'Max Streak'} value={'12 d'} />
                        <InfoElement IconElement={HoursSpentIcon} attribute={'Hours Spent'} value={`${timeSpendingData.hoursSpent} h`} />
                        <InfoElement IconElement={CompletionStatIcon} attribute={'Completed'} value={'4'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsComponent;
