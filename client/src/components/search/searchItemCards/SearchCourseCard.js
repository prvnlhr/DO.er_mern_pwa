import React from 'react'
import styles from "./styles/searchCourseCardStyles.module.css"
import ClockIconLined from "./ClockIconLined"
import DocIconLined from "./DocIconLined"
import BreadCrumIcon from "./BreadCrumIcon"
import LinkIcon from "./LinkIcon"
const SearchCourseCard = ({ searchItemData, handleCardArrowLinkClicked }) => {

    const BreadCrumElement = ({ innerText }) => {
        return (
            <div className={styles.breadCrumElementWrapper} >
                <div className={styles.breadCrumTextWrapper} >
                    <p className={styles.breadCrumText} >{innerText}</p>
                </div>
                <div className={styles.breadCrumIconWrapper} >
                    <div className={styles.breadCrumIconDiv} >
                        <BreadCrumIcon />
                    </div>
                </div>
            </div>
        )
    }

    const SearchKeyElement = ({ innerText }) => {

        return (
            <div className={styles.breadCrumSearchKeyElementWrapper} >
                <div className={styles.breadCrumTextWrapper} >
                    <p className={styles.searchKeyTextBlack} >{innerText}</p>
                </div>
                <div className={styles.breadCrumIconWrapper} >
                    <div className={styles.breadCrumIconDiv} >
                        <BreadCrumIcon />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.searchItemWrapper} >
            <div className={styles.searchItemInnerWrapper}>

                <div className={styles.breadCrumWrapper} >
                    <BreadCrumElement innerText={searchItemData.courseTitle} />
                </div>



                <div className={styles.searchKeyValueWrapper} >
                    <SearchKeyElement innerText={'Course'} />
                    <div className={styles.searchValueContainer} >
                        <p>{searchItemData.courseTitle}</p>
                    </div>
                </div>



                <div className={styles.infoElementWrapper} >

                    {/* <--info element 1---------------------> */}
                    <div className={styles.infoElementContainer} >
                        <div className={styles.infoElementInnerContainer} >
                            <div className={styles.infoIconContainer} >
                                <div className={styles.infoIconDiv} >
                                    <ClockIconLined />
                                </div>
                            </div>
                            <div className={styles.infoTextContainer} >
                                <p>{'12 min.'}</p>
                            </div>
                        </div>
                    </div>
                    {/* <---------------------------------> */}

                    {/* <--info element 2---------------------> */}
                    <div className={styles.infoElementContainer} >
                        <div className={styles.infoElementInnerContainer} >
                            <div className={styles.infoIconContainer} >
                                <div className={styles.infoIconDiv} >
                                    <DocIconLined />
                                </div>
                            </div>
                            <div className={styles.infoTextContainer} >
                                <p>{'9 Chapters'}</p>
                            </div>
                        </div>
                    </div>
                    {/* <---------------------------------> */}


                </div>



                <div className={styles.linkWrapper} >
                    <div className={styles.linkIconContainer} >
                        <div className={styles.linkIconDiv} onClick={() => handleCardArrowLinkClicked(searchItemData)}  >
                            <LinkIcon />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default SearchCourseCard