import { updatedListWithID as jsChapterList } from "./chapters/javascript"
import { cplusplusOppsChapterList } from "./chapters/cplusplusOOPS"
import { addUUIDToCourses } from "./helperFunction/createUniqueObjectId"
import { logosArray } from "../components/courseLogo/logoList"

const courses = [
    {
        courseName: 'JavaScript',
        courseLogo: logosArray[0],
        courseDescription: 'Master JavaScript: Learn the fundamentals and build dynamic web applications with real-world projects.',
        time_required: '10h 9m',
        chaptersList: jsChapterList,
        courseFolderName: 'javascript'
    },
    {
        courseName: 'C++ Object Oriented Programming',
        courseLogo: logosArray[1],
        courseDescription: 'Uncover the principles of Object-Oriented Programming in C++ and learn to create efficient, modular applications with classes, inheritance, and encapsulation. Elevate your coding skills and architect robust programs with our C++ OOPS course.',
        time_required: '4h 20m',
        chaptersList: cplusplusOppsChapterList,
        courseFolderName: 'cpluplus_oops'
    },
];

const updatedCourseListWithID = addUUIDToCourses(courses);


export { updatedCourseListWithID as coursesList };


