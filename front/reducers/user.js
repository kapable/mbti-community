import produce from '../util/produce';
import faker from '@withshepherd/faker'

faker.locale = "ko";

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
    loadFollowerListLoading:false,
    loadFollowerListDone:false,
    loadFollowerListError:false,
    loadFollowingListLoading:false,
    loadFollowingListDone:false,
    loadFollowingListError:false,
    myInfo: null,
    userInfo: {
        email:'',
        nickname: '',
        id: null,
        type: '',
        description: '',
        Posts: [{}],
        Followings: [{}],
        Followers: [{}],
    },
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

export const LOAD_FOLLOWER_LIST_REQUEST = 'LOAD_FOLLOWER_LIST_REQUEST';
export const LOAD_FOLLOWER_LIST_SUCCESS = 'LOAD_FOLLOWER_LIST_SUCCESS';
export const LOAD_FOLLOWER_LIST_FAILURE = 'LOAD_FOLLOWER_LIST_FAILURE';

export const LOAD_FOLLOWING_LIST_REQUEST = 'LOAD_FOLLOWING_LIST_REQUEST';
export const LOAD_FOLLOWING_LIST_SUCCESS = 'LOAD_FOLLOWING_LIST_SUCCESS';
export const LOAD_FOLLOWING_LIST_FAILURE = 'LOAD_FOLLOWING_LIST_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const categoriesColorObj = {'ENFJ':'#52ceb0', 'ENFP':'#ffa348', 'ENTJ':'#3462a3', 'ENTP':'#dd5843', 'ESFJ':'#ffcfcf', 'ESFP':'#e0707e', 'ESTJ':'#587a4b', 'ESTP':'#ff977b', 'INFJ':'#c2dbff', 'INFP':'#277a64', 'INTJ':'#b9b0ff', 'INTP':'#7fc2f4', 'ISFJ':'#ffcf73', 'ISFP':'#a6be6f', 'ISTJ':' #a6be6f', 'ISTP':'#4690b4'};
const categoriesArr = Object.keys(categoriesColorObj);
export const dummyUser = (data) => ({
    ...data,
    nickname: 'BESEEYONG',
    id: Math.floor(Math.random() * 100) + 5,
    type: categoriesArr[Math.floor(Math.random() * categoriesArr.length)],
    description: '안녕하세요! 인간 엔팁 웡아잉입니다! 고민 해결 해드릴게요! 팔로우 부탁드립니다!',
    Posts: [{ id: 1 }],
    Followings: [{ nickname: faker.name.findName(), type: 'ESTP' }, { nickname: faker.name.findName(), type: 'ESTP' }, { nickname: faker.name.findName(), type: 'ESTP' }],
    Followers: [{ nickname: faker.name.findName(), type: 'ESTP' }, { nickname: faker.name.findName(), type: 'ESTP' }, { nickname: faker.name.findName(), type: 'ESTP' }],
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
                draft.myInfo = action.data;
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
                draft.userInfo = action?.data || null;
                break;
            case LOAD_USER_INFO_FAILURE:
                draft.loadUserInfoLoading = false;
                draft.loadUserInfoDone = false;
                draft.loadUserInfoError = action.error;
                break;
            case LOAD_FOLLOWER_LIST_REQUEST:
                draft.loadFollowerListLoading = true;
                draft.loadFollowerListDone = false;
                draft.loadFollowerListError = null;
                break;
            case LOAD_FOLLOWER_LIST_SUCCESS:
                draft.loadFollowerListLoading = false;
                draft.loadFollowerListDone = true;
                draft.userInfo = dummyUser()//action?.data || null;
                break;
            case LOAD_FOLLOWER_LIST_FAILURE:
                draft.loadFollowerListLoading = false;
                draft.loadFollowerListDone = false;
                draft.loadFollowerListError = action.error;
                break;
            case LOAD_FOLLOWING_LIST_REQUEST:
                draft.loadFollowingListLoading = true;
                draft.loadFollowingListDone = false;
                draft.loadFollowingListError = null;
                break;
            case LOAD_FOLLOWING_LIST_SUCCESS:
                draft.loadFollowingListLoading = false;
                draft.loadFollowingListDone = true;
                draft.userInfo = dummyUser()//action?.data || null;
                break;
            case LOAD_FOLLOWING_LIST_FAILURE:
                draft.loadFollowingListLoading = false;
                draft.loadFollowingListDone = false;
                draft.loadFollowingListError = action.error;
                break;
            default:
                break;
        };
    });
};

export default reducer;