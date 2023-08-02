import { coursesList } from "../../courseData/courseData"





const markdownCache = new Map();

const setMarkDownFile = async (currentCourseIndex = 0, currentCourseModuleIndex = 0, currentCourseTopicIndex = 0, updateCurrentCourseData) => {
    const courseFolder = coursesList[currentCourseIndex].courseFolderName;
    const moduleFolder = coursesList[currentCourseIndex].modulesList[currentCourseModuleIndex].moduleFolderName;
    const topicFileName = coursesList[currentCourseIndex].modulesList[currentCourseModuleIndex].topicsList[currentCourseTopicIndex].topicFileName;

    const cacheKey = `${courseFolder}/${moduleFolder}/${topicFileName}`;

    // Check if the markdown content is already in the cache
    if (markdownCache.has(cacheKey)) {
        console.log('already there')
        const cachedContents = markdownCache.get(cacheKey);
        updateCurrentCourseData('markDownContents', cachedContents);
        updateCurrentCourseData('markDownIsLoading', false)
        return;
    }

    try {
        // Fetch the markdown file
        updateCurrentCourseData('markDownIsLoading', true)

        const markdownModule = await import(`../../courseData/coursesMarkDown/${courseFolder}/${moduleFolder}/${topicFileName}.md`);
        const markdownContents = await fetch(markdownModule.default).then(response => response.text());
        // console.log(markdownContents)

        // Cache the fetched markdown content
        markdownCache.set(cacheKey, markdownContents);

        // Update the state with the markdown content
        updateCurrentCourseData('markDownContents', markdownContents);
        updateCurrentCourseData('markDownIsLoading', false)

    } catch (error) {
        console.error(error);
        updateCurrentCourseData('markDownIsLoading', false)

    }
};

export { setMarkDownFile };
