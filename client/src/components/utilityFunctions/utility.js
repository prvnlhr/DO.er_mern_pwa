

const getMarkDownFilex = async (courseFolder, moduleFolder, topicFileName) => {
    // const res = await import(`../../courseData/coursesMarkDown/${courseFolder}/${moduleFolder}/${topicFileName}.md`);
    // try {
    //     const response = await fetch(res.default);
    //     const response_1 = await response.text();
    //     return response_1;
    // } catch (err) {
    //     return console.log(err);
    // }


};

const getMarkDownFile = (courseFolder, moduleFolder, topicFileName) => {
    return import(`../../courseData/coursesMarkDown/${courseFolder}/${moduleFolder}/${topicFileName}.md`)
        .then(res =>
            fetch(res.default)
                .then(response => response.text())
                .then(response => response)
                .catch(err => console.log(err))
        );
};


export { getMarkDownFile };
