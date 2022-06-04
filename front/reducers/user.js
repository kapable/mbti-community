import produce from '../util/produce';

export const initialState = {
    logInLoading: false,
    logInDone: false,
    logInError: false,
    logOutLoading: false,
    logOutDone: false,
    logOutError: false,
    signUpLoading: false,
    signUpDone: false,
    signUpError: false,
    changeNicknameLoading: false,
    changeNicknameDone: false,
    changeNicknameError: false,
    changeDescriptionLoading: false,
    changeDescriptionDone: false,
    changeDescriptionError: false,
    followLoading: false,
    followDone: false,
    followError: false,
    unfollowLoading: false,
    unfollowDone: false,
    unfollowError: false,
    loadUserInfoLoading: false,
    loadUserInfoDone: false,
    loadUserInfoError: false,
    myInfo: null,
    userInfo: null,
    signUpData: {},
    loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const CHANGE_DESCRIPTION_REQUEST = 'CHANGE_DESCRIPTION_REQUEST';
export const CHANGE_DESCRIPTION_SUCCESS = 'CHANGE_DESCRIPTION_SUCCESS';
export const CHANGE_DESCRIPTION_FAILURE = 'CHANGE_DESCRIPTION_FAILURE';

export const LOAD_USER_INFO_REQUEST = 'LOAD_USER_INFO_REQUEST';
export const LOAD_USER_INFO_SUCCESS = 'LOAD_USER_INFO_SUCCESS';
export const LOAD_USER_INFO_FAILURE = 'LOAD_USER_INFO_FAILURE';


const dummyUser = (data) => ({
    ...data,
    nickname: 'BESEEYONG',
    id: 10,
    type: 'ISTJ',
    description: '안녕하세요! 인간 엔팁 웡아잉입니다! 고민 해결 해드릴게요! 팔로우 부탁드립니다!',
    Posts: [],
    Followings: [],
    Followers: [],
});


const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOG_IN_REQUEST:
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.logInDone = true;
                draft.myInfo = dummyUser(action.data)//action.data;
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.logInDone = false;
                draft.myInfo = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpDone = false;
                draft.signUpError = action.error;
                break;
            case CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading = true;
                draft.changeNicknameDone = false;
                draft.changeNicknameError = null;
                break;
            case CHANGE_NICKNAME_SUCCESS:
                draft.changeNicknameLoading = false;
                draft.changeNicknameDone = true;
                draft.nickname = action.data.data;
                break;
            case CHANGE_NICKNAME_FAILURE:
                draft.changeNicknameLoading = false;
                draft.changeNicknameDone = false;
                draft.changeNicknameError = action.error;
                break;
            case CHANGE_DESCRIPTION_REQUEST:
                draft.changeDescriptionLoading = true;
                draft.changeDescriptionDone = false;
                draft.changeDescriptionError = null;
                break;
            case CHANGE_DESCRIPTION_SUCCESS:
                draft.changeDescriptionLoading = false;
                draft.changeDescriptionDone = true;
                draft.description = action.data.data;
                break;
            case CHANGE_DESCRIPTION_SUCCESS:
                draft.changeDescriptionLoading = false;
                draft.changeDescriptionDone = false;
                draft.changeDescriptionError = action.error;
                break;
            case FOLLOW_REQUEST:
                draft.followLoading = true;
                draft.followDone = false;
                draft.followError = null;
                break;
            case FOLLOW_SUCCESS:
                draft.followLoading = false;
                draft.followDone = true;
                draft.myInfo = dummyUser(action.data)//action.data;
                break;
            case FOLLOW_FAILURE:
                draft.followLoading = false;
                draft.followError = action.error;
                break;
            case UNFOLLOW_REQUEST:
                draft.unfollowLoading = true;
                draft.unfollowDone = false;
                draft.unfollowError = null;
                break;
            case UNFOLLOW_SUCCESS:
                draft.unfollowLoading = false;
                draft.unfollowDone = true;
                draft.followDone = false;
                draft.myInfo = null;
                break;
            case UNFOLLOW_FAILURE:
                draft.unfollowLoading = false;
                draft.unfollowError = action.error;
            case LOAD_USER_INFO_REQUEST:
                draft.loadUserInfoLoading = true;
                draft.loadUserInfoDone = false;
                draft.loadUserInfoError = null;
                break;
            case LOAD_USER_INFO_SUCCESS:
                draft.loadUserInfoLoading = false;
                draft.loadUserInfoDone = true;
                draft.userInfo = dummyUser()//action?.data || null;
                break;
            case LOAD_USER_INFO_FAILURE:
                draft.loadUserInfoLoading = false;
                draft.loadUserInfoDone = false;
                draft.loadUserInfoError = action.error;
                break;
            default:
                break;
        };
    });
};

export default reducer;