import { v4 as uuidv4 } from "uuid";

const addUUIDToCourses = (dataArray) => {
    return dataArray.map((dataItem) => ({
        ...dataItem,
        _id: uuidv4(),
    }));
};

const addUUIDToChapters = (modulesArray) => {
    return modulesArray.map((module) => ({
        ...module,
        id: uuidv4(),
        topicsList: module.topicsList.map((topic) => ({
            ...topic,
            _id: uuidv4(),
        })),
    }));
};

export { addUUIDToChapters, addUUIDToCourses };
