export const initialState = {
    logInLoading: false,
    logInDone: false,
    logInError: false,
    logOutLoading: false,
    logOutDone: false,
    logOutError: false,
    myInfo: null,
    signUpData: {},
    loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';


export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
        }
};

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
        }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoggedIn: true,
                myInfo: action.data,
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                myInfo: action.data,
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                isLoggedIn: true,
                myInfo: action.data,
            };
        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoggedIn: false,
                myInfo: null,
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                myInfo: null,
            };
        case LOG_OUT_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                myInfo: null,
            };
        default:
            return state;
    }
};

export default reducer;