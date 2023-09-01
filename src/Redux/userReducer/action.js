import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./actionType"
import { BE_BASE_URL } from "../../Base Url";
import Cookies from 'js-cookie';
import axios from "axios";
//USER SIGNUP REQUEST
export const addUser = (userInfo) => (dispatch) => {
    dispatch({ type: USER_REQUEST });
    return axios.post(`${BE_BASE_URL}api/user/signup`, userInfo)
        .then((response) => {
            dispatch({ type: USER_SUCCESS })
            console.log(response)
        })
        .catch((error) => {
            dispatch({ type: USER_FAILURE })
        })
}
//USER LOGIN REQUEST

// export const loginUser = (userInfo) => (dispatch) => {
//     dispatch({ type: USER_REQUEST });
//     axios.post(`${BE_BASE_URL}api/user/login`, userInfo)
//         .then((response) => {
//             dispatch({ type: USER_SUCCESS, payload:response })
//             // console.log(response)
//             Cookies.set('userInfo', JSON.stringify(response.data));
//         })
//         .catch((error) => {
//             dispatch({ type: USER_FAILURE })
//         })
// }