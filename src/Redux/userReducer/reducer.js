import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./actionType";

const initialState = {
    users: [],
    isAuth : false,
    isLoading: false,
    isError: false,
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_REQUEST : return { ...state , isLoading : true };
        case USER_SUCCESS : return { ...state , isLoading : false , users : payload , isAuth : true };
        case USER_FAILURE : return { ...state , isLoading : false , isError : true}
        default: return state;
    }
}