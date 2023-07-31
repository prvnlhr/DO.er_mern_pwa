// import { useEffect } from 'react';
// import { useCourseContext } from '../appState/appContext';
// import { coursesList } from '../courseData/courseData';

// const useMarkdownLoader = (
//     currentCourseIndex = 0,
//     currentCourseModuleIndex = 0,
//     currentTopicIndex = 0
// ) => {

//     const { updateCurrentCourseData } = useCourseContext();

//     useEffect(() => {

//         const setMarkDownFile = async () => {
//             try {
//                 const courseFolder = coursesList[currentCourseIndex].courseFolderName;
//                 const moduleFolder = coursesList[currentCourseIndex].modulesList[currentCourseModuleIndex].moduleFolderName;
//                 const topicFileName = coursesList[currentCourseIndex].modulesList[currentCourseModuleIndex].topicsList[currentTopicIndex].topicFileName;

//                 const res = await import(`../../courseData/coursesMarkDown/${courseFolder}/${moduleFolder}/${topicFileName}.md`);
//                 const response = await fetch(res.default);
//                 const markdownText = await response.text();

//                 updateCurrentCourseData('markDownContents', markdownText);

//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         setMarkDownFile();
//     }, [currentCourseIndex, currentCourseModuleIndex, currentTopicIndex, updateCurrentCourseData]);
// };

// export { useMarkdownLoader };
