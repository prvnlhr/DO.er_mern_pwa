import React from 'react';
import styles from "./styles/bookmarkCardStyles.module.css";
import ChevronIcon from "../icons/ChevronIcon";
import TiltedArrowIcon from '../icons/TiltedArrowIcon';
import { useNavigate } from 'react-router-dom';
import { updateReduxState } from "../helperFunctions/reduxDispatchHelper"
import { setMarkDownFile } from "../helperFunctions/setMarkDownHelperFunction"
import { useSelector, useDispatch } from 'react-redux';

const BookmarkCard = ({ courseIndex, chapterIndex, courseData, chapterData }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleArrowLinkClicked = () => {
        console.log('clicked', courseIndex, chapterIndex);

        // > 1.  set clicked module card index
        updateReduxState(dispatch, { data: { 'currentChapterIndex': chapterIndex } });

        //> 2. then -> navigate to topics page
        setMarkDownFile(dispatch, courseIndex, chapterIndex, 0);

        //> 3. then -> navigate
        navigate("/user/topic")
    }


    return (
        <div className={styles.bookmarkCardOuterwrapper} >
            <div className={styles.bookmarkCardInnerwrapper} >
                <div className={styles.courseNameBreadCrumWrapper} >
                    <div className={styles.breadCrumElementWrapper} >
                        <div className={styles.courseNameWrapper} >
                            <p>{courseData?.courseName}</p>
                        </div>
                        <div className={styles.chevronIconWrapper} >
                            <div className={styles.chevronIconDiv} >
                                <ChevronIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.chapterNameWrapper} >
                    <p>{chapterData?.chapterName}</p>
                </div>
                <div className={styles.topicsCountWrapper} >
                    <p>{chapterData.topicsList.length} Topics</p>
                </div>
                <div className={styles.arrowLinkWrapper} >
                    <div className={styles.arrowLinkIconDiv} onClick={handleArrowLinkClicked} >
                        <TiltedArrowIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookmarkCard