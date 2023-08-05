import axios from "axios";

// let url = process.env.REACT_APP_BASE_URL;
let url = 'http://localhost:9000';

const API = axios.create({
    baseURL: url,
})


export const verifyUserAuth = () =>
    API.get("/api/auth/verifyAuth");


export const updateCourseProgress = (data) =>
    API.post("/api/course/markProgress", data);


export const getCourseData = (user_id) =>
    API.get(`/api/course/getCourseData/${user_id}`);


export const addNewUser = (name, phoneNumber) =>
    API.post("/api/user/addUser", { name, phoneNumber }
    );

export const getUserData = () =>
    API.get("/api/user/getUser");

export const updateTimeSpent = (data) =>
    API.post("/api/course/updateTimeSpent", data);


