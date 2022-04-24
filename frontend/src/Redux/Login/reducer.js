import {LOGIN, LOGOUT} from './action';

const initialState = {
    user: null,
    isLoggedIn: false
}

const reducer = (store = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...store,
                user: action.payload,
                isLoggedIn: true
            }
        case LOGOUT:
            return {
                ...store,
                user: null,
                isLoggedIn: false
            }
        default:
            return store;
    }
}

export  {reducer};

