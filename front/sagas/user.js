import axios from 'axios';
import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import {
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE,
    CHANGE_DESCRIPTION_REQUEST, CHANGE_DESCRIPTION_SUCCESS, CHANGE_DESCRIPTION_FAILURE,
    FOLLOW_REQUEST ,FOLLOW_SUCCESS ,FOLLOW_FAILURE,
    UNFOLLOW_REQUEST ,UNFOLLOW_SUCCESS ,UNFOLLOW_FAILURE,
    // LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE,
    LOAD_USER_INFO_REQUEST, LOAD_USER_INFO_SUCCESS, LOAD_USER_INFO_FAILURE
} from '../reducers/user';

function logInAPI(data) {
    return axios.post(`/user/login`, data);
}

function* logIn(action) {
    try {
        // const result = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data// result.data
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data
        })
    }
}

function logOutAPI() {
    return axios.post(`/user/logout`);
}

function* logOut() {
    try {
        // yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data
        })
    }
}

function signUpAPI(data) {
    return axios.post(`/user`, data);
}

function* signUp(action) {
    try {
        // const result = yield call(signUpAPI, action.data);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data
        })
    }
}

function loadMyInfoAPI() {
    return axios.get(`/user`);
}

function* loadMyInfo(action) {
    try {
        // const result = yield call(loadMyInfoAPI, action.data);
        yield delay(1000);
        yield put({
            // type: LOAD_MY_INFO_SUCCESS,
            // data: result?.data || null
        })
    } catch (err) {
        console.log(err);
        yield put({
            // type: LOAD_MY_INFO_FAILURE,
            // error: err.response.data
        })
    }
};

function loadUserInfoAPI() {
    return axios.get(`/user`);
}

function* loadUserInfo(action) {
    try {
        // const result = yield call(loadUserInfoAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOAD_USER_INFO_SUCCESS,
            data: action.data//result?.data || null
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: LOAD_USER_INFO_FAILURE,
            error: err.response.data
        })
    }
};

function changeNicknameAPI(data) {
    return axios.patch(`/user/nickname`, { nickname: data });
}

function* changeNickname(action) {
    try {
        // const result = yield call(changeNicknameAPI, action.data);
        yield delay(1000);
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: action.data//result.data,
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data
        })
    }
}

function changeDescriptionAPI(data) {
    return axios.patch(`/user/description`, { description: data });
}

function* changeDescription(action) {
    try {
        // const result = yield call(changeDescriptionAPI, action.data);
        yield delay(1000);
        yield put({
            type: CHANGE_DESCRIPTION_SUCCESS,
            data: action.data//result.data,
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: CHANGE_DESCRIPTION_FAILURE,
            error: err.response.data
        })
    }
}

function followAPI(data) {
    return axios.post(`/user/follow`, data);
}

function* follow(action) {
    try {
        // const result = yield call(followAPI, action.data);
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data// result.data
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data
        })
    }
}

function unfollowAPI() {
    return axios.post(`/user/Unfollow`);
}

function* unfollow() {
    try {
        // yield call(unfollowAPI);
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data
        })
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp)
}

function* watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname)
}

function* watchChangeDescription() {
    yield takeLatest(CHANGE_DESCRIPTION_REQUEST, changeDescription)
}

function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow)
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow)
}

function* watchLoadMyInfo() {
    // yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo)
}

function* watchLoadUserInfo() {
    yield takeLatest(LOAD_USER_INFO_REQUEST, loadUserInfo)
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignUp),
        fork(watchChangeNickname),
        fork(watchChangeDescription),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLoadMyInfo),
        fork(watchLoadUserInfo),
    ])
}