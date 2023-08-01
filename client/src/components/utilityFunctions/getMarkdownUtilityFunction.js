import { coursesList } from "../../courseData/courseData"

// const setMarkDownFile = (currentCourseIndex = 0, currentCourseModuleIndex = 0, currentCourseTopicIndex = 0, updateCurrentCourseData) => {


//     const courseFolder = coursesList[currentCourseIndex].courseFolderName;
//     const moduleFolder = coursesList[currentCourseIndex].modulesList[currentCourseModuleIndex].moduleFolderName;
//     const topicFileName = coursesList[currentCourseIndex].modulesList[currentCourseModuleIndex].topicsList[currentCourseTopicIndex].topicFileName;


//     return import(`../../courseData/coursesMarkDown/${courseFolder}/${moduleFolder}/${topicFileName}.md`)
//         .then(res =>
//             fetch(res.default)
//                 .then(response => response.text())
//                 .then(response => updateCurrentCourseData('markDownContents', response))
//                 .catch(err => console.log(err))
//         );
// };


// export { setMarkDownFile };



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
        return;
    }

    try {
        // Fetch the markdown file
        const markdownModule = await import(`../../courseData/coursesMarkDown/${courseFolder}/${moduleFolder}/${topicFileName}.md`);
        const markdownContents = await fetch(markdownModule.default).then(response => response.text());
        // console.log(markdownContents)

        // Cache the fetched markdown content
        markdownCache.set(cacheKey, markdownContents);

        // Update the state with the markdown content
        updateCurrentCourseData('markDownContents', markdownContents);
    } catch (error) {
        console.error(error);
    }
};

export { setMarkDownFile };
