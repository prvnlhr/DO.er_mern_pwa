import { javascriptModulesList } from "./modules/javascript"
import { cplusplusModulesList } from "./modules/cplusplus"

const courses = [
    {
        id: 't2u0h5zp9v',
        title: 'JavaScript',
        courseLogo: '',
        courseDescription: 'Master JavaScript: Learn the fundamentals and build dynamic web applications with real-world projects.',
        time_required: '7h 25min',
        modulesList: javascriptModulesList,
        courseFolderName: 'javascript'
    },
    {
        id: 't2u0h5zp9v',
        title: 'C++',
        courseLogo: '',
        courseDescription: 'Unlock the World of C++: Dive into the C++ programming language, from basics to advanced concepts, and create powerful applications.',
        time_required: '12h 7min',
        modulesList: cplusplusModulesList,
        courseFolderName: 'cplusplus'
    },
];


export { courses as coursesList };
