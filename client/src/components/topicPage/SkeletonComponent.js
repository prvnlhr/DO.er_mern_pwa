import React from 'react'
import styles from "./styles/skeletonStyles.module.css"
const SkeletonComponent = () => {

    const Shimmer = () => {
        return (
            <div className={styles.shimmerWrapper}>
                <div className={styles.shimmer}></div>
            </div>
        )
    }

    const PrimaryTitleSKeleton = () => {
        return (
            <div className={styles.primaryTitleSkeletonWrapper} >
                <div className={styles.indicatorContainer} >
                    <div className={styles.indicatorDiv}>
                        <Shimmer />
                    </div>
                </div>
                <div className={styles.titleDiv} ><Shimmer /></div>
            </div>
        )
    }


    const ParagraphWrapper = () => {
        return (
            <div className={styles.paraWrapper} >
                <div className={styles.paraLineWrapper} ><Shimmer /></div>
                <div className={styles.paraLineWrapper} ><Shimmer /></div>
                <div className={styles.paraLineWrapper} ><Shimmer /></div>
                <div className={styles.paraLineWrapper} ><Shimmer /></div>
                <div className={styles.paraLineWrapper} ><Shimmer /></div>
            </div>
        )
    }
    const CodeBlock = () => {
        return (
            <div className={styles.codeBlockWrapper}>
                <div className={styles.codeDiv}  ><Shimmer /></div>
            </div>
        )
    }


    return (
        <div className={styles.skeletonWrapper} >
            <PrimaryTitleSKeleton />
            <ParagraphWrapper />
            <ParagraphWrapper />
            <CodeBlock />
            <PrimaryTitleSKeleton />
            <ParagraphWrapper />
            <ParagraphWrapper />
            <ParagraphWrapper />
            <ParagraphWrapper />
            <ParagraphWrapper />
        </div>
    )
}

export default SkeletonComponent