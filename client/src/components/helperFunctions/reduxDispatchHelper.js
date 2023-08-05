import { updateCourseState } from "../../redux/features/course/courseSlice"
const updateReduxState = (dispatch, data) => {
    dispatch(updateCourseState(data));
}

export { updateReduxState };