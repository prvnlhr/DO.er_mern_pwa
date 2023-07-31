import { coursesList } from "../../courseData/courseData";



// function searchKeyword(keyword) {
//     const result = [];

//     const keywordLowered = keyword.toLowerCase();

//     // Search for matching course titles
//     coursesList.forEach((course, courseIndex) => {
//         if (course.title.toLowerCase().includes(keywordLowered)) {
//             // Add course information to the result array
//             result.push({
//                 courseIndex,
//                 courseTitle: course.title,
//                 courseFolderName: course.courseFolderName,
//                 searchItemType: 'course'
//             });
//         }

//         // Search for matching module titles within the course
//         course.modulesList.forEach((module, moduleIndex) => {
//             if (module.module_title.toLowerCase().includes(keywordLowered)) {
//                 // Add module information to the result array
//                 result.push({
//                     courseIndex,
//                     courseTitle: course.title,
//                     courseFolderName: course.courseFolderName,
//                     moduleIndex,
//                     moduleTitle: module.module_title,
//                     moduleFolderName: module.moduleFolderName,
//                     searchItemType: 'chapter'

//                 });
//             }

//             // Search for matching topic names within the module
//             module.topicsList.forEach((topic, topicIndex) => {
//                 if (topic.topic_name.toLowerCase().includes(keywordLowered)) {
//                     // Add topic information to the result array
//                     result.push({
//                         courseIndex,
//                         courseTitle: course.title,
//                         courseFolderName: course.courseFolderName,
//                         moduleIndex,
//                         moduleTitle: module.module_title,
//                         moduleFolderName: module.moduleFolderName,
//                         topicIndex,
//                         topicName: topic.topic_name,
//                         topicFileName: topic.topicFileName,
//                         searchItemType: 'topic'

//                     });
//                 }
//             });
//         });
//     });

//     console.log('og-searchItem', result)

//     return result;
// }

// function searchKeyword(keyword) {

//     const keywordLowered = keyword.toLowerCase();

//     const result = coursesList.reduce((acc, course, courseIndex) => {
//         if (course.title.toLowerCase().includes(keywordLowered)) {
//             // Add course information to the result array
//             acc.push({
//                 courseIndex,
//                 courseTitle: course.title,
//                 courseFolderName: course.courseFolderName,
//                 searchItemType: 'course'
//             });

//         }


//         const modulesWithMatchingTopics = course.modulesList.reduce((accModules, module, moduleIndex) => {
//             if (module.module_title.toLowerCase().includes(keywordLowered)) {
//                 // Add module information to the result array
//                 accModules.push({
//                     courseIndex,
//                     courseTitle: course.title,
//                     courseFolderName: course.courseFolderName,
//                     moduleIndex,
//                     moduleTitle: module.module_title,
//                     moduleFolderName: module.moduleFolderName,
//                     searchItemType: 'chapter'
//                 });
//             }

//             const topicsWithMatchingKeywords = module.topicsList.filter(topic =>
//                 topic.topic_name.toLowerCase().includes(keywordLowered)
//             );

//             if (topicsWithMatchingKeywords.length > 0) {
//                 // Add topics information to the result array
//                 accModules.push(
//                     ...topicsWithMatchingKeywords.map((topic, topicIndex) => ({
//                         courseIndex,
//                         courseTitle: course.title,
//                         courseFolderName: course.courseFolderName,
//                         moduleIndex,
//                         moduleTitle: module.module_title,
//                         moduleFolderName: module.moduleFolderName,
//                         topicIndex,
//                         topicName: topic.topic_name,
//                         topicFileName: topic.topicFileName,
//                         searchItemType: 'topic'
//                     }))
//                 );
//             }

//             return accModules;
//         }, []);

//         acc.push(...modulesWithMatchingTopics);
//         console.log('og-searchItem', acc)
//         return acc;
//     }, []);

//     return result;
// }


// function searchKeyword(keyword) {
//     const keywordLower = keyword.toLowerCase(); // Convert the keyword to lowercase

//     const result = [];

//     // Helper function to add information to the result array
//     const addToResult = (courseIndex = 0, moduleIndex = 0, topicIndex = 0,) => {
//         const course = coursesList[courseIndex];
//         const module = course?.modulesList[moduleIndex];
//         const topic = module?.topicsList[topicIndex];

//         result.push({
//             courseIndex,
//             courseTitle: course?.title,
//             courseFolderName: course?.courseFolderName,
//             moduleIndex,
//             moduleTitle: module?.module_title,
//             moduleFolderName: module?.moduleFolderName,
//             topicIndex,
//             topicName: topic?.topic_name,
//             topicFileName: topic?.topicFileName,
//         });
//     };

//     // Iterate through the courses and their modules/topics in a single loop
//     coursesList.forEach((course, courseIndex) => {
//         const courseTitleLower = course.title.toLowerCase();

//         if (courseTitleLower.includes(keywordLower)) {
//             addToResult(courseIndex);
//         }

//         course.modulesList.forEach((module, moduleIndex) => {
//             const moduleTitleLower = module.module_title.toLowerCase();

//             if (moduleTitleLower.includes(keywordLower)) {
//                 addToResult(courseIndex, moduleIndex);
//             }

//             module.topicsList.forEach((topic, topicIndex) => {
//                 const topicNameLower = topic.topic_name.toLowerCase();

//                 if (topicNameLower.includes(keywordLower)) {
//                     addToResult(courseIndex, moduleIndex, topicIndex);
//                 }
//             });
//         });
//     });
//     // console.log('og-searchItem', result)
//     return result;
// }

function searchKeyword(keyword) {
    const keywordLower = keyword.toLowerCase(); // Convert the keyword to lowercase

    const result = [];

    // Helper function to add information to the result array
    const addToResult = (searchItemType, courseIndex, moduleIndex, topicIndex) => {
        const course = coursesList[courseIndex];
        const courseItem = {
            searchItemType,
            courseIndex,
            courseTitle: course.title,
        };

        if (searchItemType === 'course') {
            result.push(courseItem);
        }
        else {

            const module = course.modulesList[moduleIndex];
           
            const moduleItem = {
                ...courseItem,
                moduleIndex,
                moduleTitle: module.module_title,
                moduleFolderName: module.moduleFolderName,
            };

            if (searchItemType === 'chapter') {
                result.push(moduleItem);
            }
            else if (searchItemType === 'topic') {
                const topic = module.topicsList[topicIndex];
                const topicItem = {
                    ...moduleItem,
                    topicIndex,
                    topicName: topic.topic_name,
                    topicFileName: topic.topicFileName,
                };
                result.push(topicItem);
            }
        }
    };

    // Iterate through the courses and their modules/topics in a single loop
    coursesList.forEach((course, courseIndex) => {
        const courseTitleLower = course.title.toLowerCase();

        if (courseTitleLower.includes(keywordLower)) {
            addToResult('course', courseIndex);
        }

        course.modulesList.forEach((module, moduleIndex) => {
            const moduleTitleLower = module.module_title.toLowerCase();

            if (moduleTitleLower.includes(keywordLower)) {
                addToResult('chapter', courseIndex, moduleIndex);
            }

            module.topicsList.forEach((topic, topicIndex) => {

                const topicNameLower = topic.topic_name.toLowerCase();

                if (topicNameLower.includes(keywordLower)) {
                    addToResult('topic', courseIndex, moduleIndex, topicIndex);
                }
            });
        });
    });
    console.log('og-searchItem', result)
    return result;
}





export { searchKeyword };
