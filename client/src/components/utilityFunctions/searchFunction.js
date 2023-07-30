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

//     return result;
// }

function searchKeyword(keyword) {
    const keywordLowered = keyword.toLowerCase();

    const result = coursesList.reduce((acc, course, courseIndex) => {
        if (course.title.toLowerCase().includes(keywordLowered)) {
            // Add course information to the result array
            acc.push({
                courseIndex,
                courseTitle: course.title,
                courseFolderName: course.courseFolderName,
                searchItemType: 'course'
            });
        }

        const modulesWithMatchingTopics = course.modulesList.reduce((accModules, module, moduleIndex) => {
            if (module.module_title.toLowerCase().includes(keywordLowered)) {
                // Add module information to the result array
                accModules.push({
                    courseIndex,
                    courseTitle: course.title,
                    courseFolderName: course.courseFolderName,
                    moduleIndex,
                    moduleTitle: module.module_title,
                    moduleFolderName: module.moduleFolderName,
                    searchItemType: 'chapter'
                });
            }

            const topicsWithMatchingKeywords = module.topicsList.filter(topic =>
                topic.topic_name.toLowerCase().includes(keywordLowered)
            );

            if (topicsWithMatchingKeywords.length > 0) {
                // Add topics information to the result array
                accModules.push(
                    ...topicsWithMatchingKeywords.map((topic, topicIndex) => ({
                        courseIndex,
                        courseTitle: course.title,
                        courseFolderName: course.courseFolderName,
                        moduleIndex,
                        moduleTitle: module.module_title,
                        moduleFolderName: module.moduleFolderName,
                        topicIndex,
                        topicName: topic.topic_name,
                        topicFileName: topic.topicFileName,
                        searchItemType: 'topic'
                    }))
                );
            }

            return accModules;
        }, []);

        acc.push(...modulesWithMatchingTopics);

        return acc;
    }, []);

    return result;
}



export { searchKeyword };
