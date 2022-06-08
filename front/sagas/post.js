import axios from 'axios';
import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import {
    // LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    // UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST,
    // UPLOAD_THUMBNAIL_SUCCESS, UPLOAD_THUMBNAIL_FAILURE, UPLOAD_THUMBNAIL_REQUEST,
    LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
    LOAD_HOT_POSTS_REQUEST, LOAD_HOT_POSTS_SUCCESS, LOAD_HOT_POSTS_FAILURE,
    LOAD_CATEGORY_HOT_POSTS_REQUEST, LOAD_CATEGORY_HOT_POSTS_SUCCESS, LOAD_CATEGORY_HOT_POSTS_FAILURE,
    LOAD_CATEGORY_NEW_POSTS_REQUEST, LOAD_CATEGORY_NEW_POSTS_SUCCESS, LOAD_CATEGORY_NEW_POSTS_FAILURE,
    LOAD_MY_POSTS_REQUEST, LOAD_MY_POSTS_SUCCESS, LOAD_MY_POSTS_FAILURE,
    LOAD_MY_LIKE_POSTS_REQUEST, LOAD_MY_LIKE_POSTS_SUCCESS, LOAD_MY_LIKE_POSTS_FAILURE,
    LOAD_MY_COMMENTS_REQUEST, LOAD_MY_COMMENTS_SUCCESS, LOAD_MY_COMMENTS_FAILURE,
    // SET_POST_TITLE_REQUEST, SET_POST_TITLE_SUCCESS, SET_POST_TITLE_FAILURE,
    // SET_POST_TEXT_SUCCESS, SET_POST_TEXT_FAILURE, SET_POST_TEXT_REQUEST,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';
import { generateDummyPost, dummySinglePost } from '../reducers/post';

function loadPostsAPI(data) {
    return axios.get(`/posts/${data.data}?lastId=${data.lastId || 0}`);
}

function* loadPosts(action) {
    try {
        // const result = yield call(loadPostsAPI, action);
        yield delay(1000);
        yield put({
            // type: LOAD_POSTS_SUCCESS,
            // data: result.data,
        })
    } catch (err) {
        console.log(err)
        yield put({
            // type: LOAD_POSTS_FAILURE,
            // error: err.response
        })
    };
};

function loadHotPostsAPI(data) {
    return axios.get(`/posts/${data.data}?lastId=${data.lastId || 0}`);
}

function* loadHotPosts(action) {
    try {
        // const result = yield call(loadHotPostsAPI, action);
        yield delay(1000);
        yield put({
            type: LOAD_HOT_POSTS_SUCCESS,
            data: generateDummyPost(10)//result.data,
        })
    } catch (err) {
        console.log(err)
        yield put({
            type: LOAD_HOT_POSTS_FAILURE,
            error: err.response
        })
    };
};

function loadCategoryHotPostsAPI(data) {
    return axios.get(`/posts/${data.data}?lastId=${data.lastId || 0}`);
}

function* loadCategoryHotPosts(action) {
    try {
        // const result = yield call(loadCategoryHotPostsAPI, action);
        console.log('HOT POSTS', action.category);
        yield delay(1000);
        yield put({
            type: LOAD_CATEGORY_HOT_POSTS_SUCCESS,
            data: generateDummyPost(15)//result.data,
        })
    } catch (err) {
        console.log(err)
        yield put({
            type: LOAD_CATEGORY_HOT_POSTS_FAILURE,
            error: err.response
        })
    };
};

function loadCategoryNewPostsAPI(data) {
    return axios.get(`/posts/${data.data}?lastId=${data.lastId || 0}`);
}

function* loadCategoryNewPosts(action) {
    try {
        // const result = yield call(loadCategoryNewPostsAPI, action);
        console.log('NEW POSTS', action.category);
        yield delay(1000);
        yield put({
            type: LOAD_CATEGORY_NEW_POSTS_SUCCESS,
            data: generateDummyPost(15)//result.data,
        })
    } catch (err) {
        console.log(err)
        yield put({
            type: LOAD_CATEGORY_NEW_POSTS_FAILURE,
            error: err.response
        })
    };
};

function loadMyPostsAPI(data) {
    return axios.get(`/posts/${data.data}?lastId=${data.lastId || 0}`);
}

function* loadMyPosts(action) {
    try {
        // const result = yield call(loadMyPostsAPI, action);
        yield delay(1000);
        yield put({
            type: LOAD_MY_POSTS_SUCCESS,
            data: generateDummyPost(15)//result.data,
        })
    } catch (err) {
        console.log(err)
        yield put({
            type: LOAD_MY_POSTS_FAILURE,
            error: err.response
        })
    };
};

function loadMyLikePostsAPI(data) {
    return axios.get(`/posts/${data.data}?lastId=${data.lastId || 0}`);
}

function* loadMyLikePosts(action) {
    try {
        // const result = yield call(loadMyLikePostsAPI, action);
        yield delay(1000);
        yield put({
            type: LOAD_MY_LIKE_POSTS_SUCCESS,
            data: generateDummyPost(10)//result.data,
        })
    } catch (err) {
        console.log(err)
        yield put({
            type: LOAD_MY_LIKE_POSTS_FAILURE,
            error: err.response
        })
    };
};

function loadMyCommentsAPI(data) {
    return axios.get(`/posts/${data.data}?lastId=${data.lastId || 0}`);
}

function* loadMyComments(action) {
    try {
        // const result = yield call(loadMyCommentsAPI, action);
        yield delay(1000);
        yield put({
            type: LOAD_MY_COMMENTS_SUCCESS,
            data: generateDummyPost(15)//result.data,
        })
    } catch (err) {
        console.log(err)
        yield put({
            type: LOAD_MY_COMMENTS_FAILURE,
            error: err.response
        })
    };
};

function loadPostAPI(data) {
    return axios.get(`/post/${data}`);
}

function* loadPost(action) {
    try {
        // const result = yield call(loadPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: dummySinglePost(action.id)//result.data,
        })
    } catch (err) {
        console.log(err)
        yield put({
            type: LOAD_POST_FAILURE,
            error: err.response
        })
    };
};

function addPostAPI(data) {
    return axios.post(`/post`, data);
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        console.log(action.data);
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            data: action.data//result.data,
        })
        // yield put({
            
        //     type: ADD_POST_TO_ME,
        //     data: action.data//result.data.id,
        // })
    } catch (err) {
        console.log(err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data
        })
    };
};

function removePostAPI(data) {
    return axios.delete(`/post/${data}`);
}

function* removePost(action) {
    try {
        // const result = yield call(removePostAPI, action.data);
        yield delay(1000);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data//result.data
        })
        // yield put({
        //     type: REMOVE_POST_OF_ME,
        //     data: action.data
        // })
    } catch (err) {
        console.log(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data
        })
    }
}

function setPostTitleAPI(data) {
    return axios.patch(`/post/title`, data);
}

function* setPostTitle(action) {
    try {
        // const result = yield call(setPostTitleAPI, action.data);
        yield delay(1000);
        yield put({
            // type: SET_POST_TITLE_SUCCESS,
            // data: result.data
        });
    } catch (err) {
        console.log(err);
        yield put({
            // type: SET_POST_TITLE_FAILURE,
            // error: err.response.data
        })
    }
}

function setPostTextAPI(data) {
    return axios.patch(`/post/text`, data);
}

function* setPostText(action) {
    try {
        // const result = yield call(setPostTextAPI, action.data);
        yield delay(1000);
        yield put({
            // type: SET_POST_TEXT_SUCCESS,
            // data: result.data
        });
    } catch (err) {
        console.log(err);
        yield put({
            // type: SET_POST_TEXT_FAILURE,
            // error: err.response.data
        })
    }
}

function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
};

function* addComment(action) {
    try {
        // const result = yield call(addCommentAPI, action.data);
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data//result.data,
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data
        })
    };
};

function uploadImagesAPI(data) {
    return axios.post(`/post/images`, data);
};

function* uploadImages(action) {
    try {
        // const result = yield call(uploadImagesAPI, action.data);
        yield delay(1000);
        yield put({
            // type: UPLOAD_IMAGES_SUCCESS,
            // data: result.data,
        })
    } catch (err) {
        console.log(err);
        yield put({
            // type: UPLOAD_IMAGES_FAILURE,
            // error: err.response.data
        })
    };
};

function uploadThumbnailAPI(data) {
    return axios.post(`/post/thumbnail`, data);
};

function* uploadThumbnail(action) {
    try {
        // const result = yield call(uploadThumbnailAPI, action.data);
        yield delay(1000);
        yield put({
            // type: UPLOAD_THUMBNAIL_SUCCESS,
            // data: result.data,
        })
    } catch (err) {
        console.log(err);
        yield put({
            // type: UPLOAD_THUMBNAIL_FAILURE,
            // error: err.response.data
        })
    };
};

function* watchLoadPosts() {
    // yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchLoadHotPosts() {
    yield takeLatest(LOAD_HOT_POSTS_REQUEST, loadHotPosts);
}

function* watchLoadCategoryHotPosts() {
    yield takeLatest(LOAD_CATEGORY_HOT_POSTS_REQUEST, loadCategoryHotPosts);
}

function* watchLoadCategoryNewPosts() {
    yield takeLatest(LOAD_CATEGORY_NEW_POSTS_REQUEST, loadCategoryNewPosts);
}

function* watchLoadMyPosts() {
    yield takeLatest(LOAD_MY_POSTS_REQUEST, loadMyPosts);
}

function* watchLoadMyLikePosts() {
    yield takeLatest(LOAD_MY_LIKE_POSTS_REQUEST, loadMyLikePosts);
}

function* watchLoadMyComments() {
    yield takeLatest(LOAD_MY_COMMENTS_REQUEST, loadMyComments);
}

function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchSetPostTitle() {
    // yield takeLatest(SET_POST_TITLE_REQUEST, setPostTitle);
}

function* watchSetPostText() {
    // yield takeLatest(SET_POST_TEXT_REQUEST, setPostText);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchUploadImages() {
    // yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchUploadThumbnail() {
    // yield takeLatest(UPLOAD_THUMBNAIL_REQUEST, uploadThumbnail);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadPosts),
        fork(watchLoadHotPosts),
        fork(watchLoadCategoryHotPosts),
        fork(watchLoadCategoryNewPosts),
        fork(watchLoadMyPosts),
        fork(watchLoadMyLikePosts),
        fork(watchLoadMyComments),
        fork(watchLoadPost),
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchSetPostTitle),
        fork(watchSetPostText),
        fork(watchAddComment),
        fork(watchUploadImages),
        fork(watchUploadThumbnail),
    ])
}