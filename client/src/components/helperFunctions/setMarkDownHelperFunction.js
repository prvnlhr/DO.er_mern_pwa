import { coursesList } from "../../courseData/courseData"
import { updateReduxState } from "./reduxDispatchHelper"
const markdownCache = new Map();

const setMarkDownFile = async (dispatch, currentCourseIndex = 0, currentChapterIndex = 0, currentTopicIndex = 0) => {

    const courseFolder = coursesList[currentCourseIndex].courseFolderName;
    const chapterFolder = coursesList[currentCourseIndex].chaptersList[currentChapterIndex].chapterFolderName;
    const topicFileName = coursesList[currentCourseIndex].chaptersList[currentChapterIndex].topicsList[currentTopicIndex].topicFileName;

    const cacheKey = `${courseFolder}/${chapterFolder}/${topicFileName}`;


    // Check if the markdown content is already in the cache
    if (markdownCache.has(cacheKey)) {
        const cachedContents = markdownCache.get(cacheKey);
        updateReduxState(dispatch,
            {
                data: {
                    'currentMarkdownContent': cachedContents,
                    'isMarkDownLoading': false,
                }
            }
        )


        return;
    }

    try {
        updateReduxState(dispatch,
            {
                data: {
                    'isMarkDownLoading': true,
                }
            }
        )


        const markdownModule = await import(`../../courseData/coursesMarkDown/${courseFolder}/${chapterFolder}/${topicFileName}.md`);
        const markdownContents = await fetch(markdownModule.default).then(response => response.text());

        markdownCache.set(cacheKey, markdownContents);
       
        updateReduxState(dispatch,
            {
                data: {
                    'currentMarkdownContent': markdownContents,
                    'isMarkDownLoading': false,
                }
            }
        )

    } catch (error) {
        console.error(error);
        updateReduxState(dispatch,
            {
                data: {
                    'isMarkDownLoading': false,
                }
            }
        )
    }
};

export { setMarkDownFile };
