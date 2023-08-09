import { createContext, useState, useContext } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {

    const [currentCourseData, setCurrentCourseData] = useState({
        currentCourseIndex: 0,
        currentCourseModuleIndex: 0,
        currentCourseTopicIndex: 0,
        markDownContents: ``,
        searchResult: [],
        markDownIsLoading: false,
    });

    const updateCurrentCourseData = (key, value) => {
        // console.log('update State', key)
        setCurrentCourseData((prevState) => ({
            ...prevState,
            [key]: value
        }))
    }

    return (
        <CourseContext.Provider
            value={{
                currentCourseData,
                setCurrentCourseData,
                updateCurrentCourseData
            }}>
            {children}
        </CourseContext.Provider>
    );
};

export default CourseContext;

export const useCourseContext = () => {
    return useContext(CourseContext);
};
