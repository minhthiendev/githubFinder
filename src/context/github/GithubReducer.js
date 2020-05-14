import { SET_LOADING, SEARCH_USERS, CLEAR_USERS, GET_USER } from "../types";


export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.users,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                loading: false,
                users: []
            }
        case GET_USER:
            return {
                ...state,
                loading: false,
                user: action.user
            }
        default:
            return state;
    }
};
