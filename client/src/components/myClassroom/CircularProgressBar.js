import React from 'react'
import styles from "./styles/circularProgressBarStyles.module.css"

const CircularProgressBar = ({ total, completed, width, height }) => {

    const normalizedCompleted = Math.min(total, Math.max(0, 5)); // Ensure completed is between 0 and total

    const circumference = 2 * Math.PI * 45; // Circumference of the ring (r = 45)

    // Calculate the stroke-dasharray values for the completed and remaining portions
    const dashArrayCompleted = (normalizedCompleted / 7) * circumference;
    const dashArrayRemaining = circumference - dashArrayCompleted;
    return (
        <div className={styles.circularProgressWrapper} >
            <svg
                style={{ width: '95%' }}
                viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer ring */}
                <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="#EAECF5"
                    strokeWidth="5%"
                    fill="none" />

                {/* Inner ring representing progress */}
                <circle
                    className={styles.progressRing}
                    cx="50%"
                    cy="50%"
                    r="45%"
                    stroke="#635DB0"
                    strokeWidth="5%"
                    stroke-linecap="round"
                    fill="none"
                    strokeDasharray={`${dashArrayCompleted} ${dashArrayRemaining}`}
                    transform="rotate(0 50 50)"
                    style={{ transition: 'stroke-dasharray 0.3s ease-in-out', borderRadius: '50%' }}
                />
            </svg>
        </div>

    )
}

export default CircularProgressBar