import React from 'react'
import styles from "./styles/pointStyles.module.css"
const Point = ({ pointNum, pointContent }) => {
    return (
        <div className={styles.pointWrapper} >
            <ol>
                <li>{pointContent}</li>
                <li>{pointContent}</li>
                <li>{pointContent}</li>
                <li>{pointContent}</li>
            </ol>
            {/* <div className={styles.pointNumDiv} >
                <p className={styles.pointNumText}>{pointNum}</p>
            </div>
            <div className={styles.pointTextDiv} >
                <p className={styles.pointText} >{pointContent}</p>
            </div> */}
        </div>
    )
}

export default Point