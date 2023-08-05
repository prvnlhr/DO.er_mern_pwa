import { coursesList } from "../../courseData/courseData";



function searchKeyword(keyword) {
    const keywordLower = keyword.toLowerCase(); // Convert the keyword to lowercase

    const result = [];

    // Helper function to add information to the result array
    const addToResult = (searchItemType, courseIndex, chapterIndex, topicIndex) => {
        const course = coursesList[courseIndex];
       
        const courseItem = {
            searchItemType,
            courseIndex,
            courseName: course.courseName,
        };

        if (searchItemType === 'course') {
            result.push(courseItem);
        }
        else {

            const chapter = course.chaptersList[chapterIndex];

            const chapterItem = {
                ...courseItem,
                chapterIndex,
                chapterName: chapter.chapterName,
                chapterFolderName: chapter.chapterFolderName,
            };

            if (searchItemType === 'chapter') {
                result.push(chapterItem);
            }
            else if (searchItemType === 'topic') {
                const topic = chapter.topicsList[topicIndex];
                const topicItem = {
                    ...chapterItem,
                    topicIndex,
                    topicName: topic.topicName,
                    topicFileName: topic.topicFileName,
                };
                result.push(topicItem);
            }
        }
    };

    // Iterate through the courses and their chapters/topics in a single loop
    coursesList.forEach((course, courseIndex) => {
        const courseTitleLower = course.courseName.toLowerCase();

        if (courseTitleLower.includes(keywordLower)) {
            addToResult('course', courseIndex);
        }

        course.chaptersList.forEach((chapter, chapterIndex) => {
            const chapterTitleLower = chapter.chapterName.toLowerCase();

            if (chapterTitleLower.includes(keywordLower)) {
                addToResult('chapter', courseIndex, chapterIndex);
            }

            chapter.topicsList.forEach((topic, topicIndex) => {

                const topicNameLower = topic.topicName.toLowerCase();

                if (topicNameLower.includes(keywordLower)) {
                    addToResult('topic', courseIndex, chapterIndex, topicIndex);
                }
            });
        });
    });
    console.log('og-searchItem', result)
    return result;
}





export { searchKeyword };
