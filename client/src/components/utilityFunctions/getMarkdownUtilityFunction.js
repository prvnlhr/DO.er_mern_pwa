import { coursesList } from "../../courseData/courseData"

const setMarkDownFile = (currentCourseIndex = 0, currentCourseModuleIndex = 0, currentCourseTopicIndex = 0, updateCurrentCourseData) => {


    const courseFolder = coursesList[currentCourseIndex].courseFolderName;
    const moduleFolder = coursesList[currentCourseIndex].modulesList[currentCourseModuleIndex].moduleFolderName;
    const topicFileName = coursesList[currentCourseIndex].modulesList[currentCourseModuleIndex].topicsList[currentCourseTopicIndex].topicFileName;

    // console.log('getMarkDwnFile', currentCourseIndex, currentCourseModuleIndex, currentCourseTopicIndex);
    // console.log(courseFolder, moduleFolder, topicFileName);

    return import(`../../courseData/coursesMarkDown/${courseFolder}/${moduleFolder}/${topicFileName}.md`)
        .then(res =>
            fetch(res.default)
                .then(response => response.text())
                .then(response => updateCurrentCourseData('markDownContents', response))
                .catch(err => console.log(err))
        );
};


export { setMarkDownFile };
