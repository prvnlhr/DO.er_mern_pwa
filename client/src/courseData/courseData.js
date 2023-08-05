import { updatedListWithID as jsChapterList } from "./chapters/javascript"
import { cplusplusModulesList } from "./chapters/cplusplus"
import { addUUIDToCourses } from "./helperFunction/createUniqueObjectId"


const courses = [
    {
        courseName: 'JavaScript',
        courseLogo: '',
        courseDescription: 'Master JavaScript: Learn the fundamentals and build dynamic web applications with real-world projects.',
        time_required: '7h 25min',
        chaptersList: jsChapterList,
        courseFolderName: 'javascript'
    },
    // {
    //     courseName: 'C++',
    //     courseLogo: '',
    //     courseDescription: 'Unlock the World of C++: Dive into the C++ programming language, from basics to advanced concepts, and create powerful applications.',
    //     time_required: '12h 7min',
    //     chaptersList: cplusplusModulesList,
    //     courseFolderName: 'cplusplus'
    // },
];

const updatedCourseListWithID = addUUIDToCourses(courses);


export { updatedCourseListWithID as coursesList };


