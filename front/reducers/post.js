import produce from '../util/produce';
import shortId from 'shortid';
import faker from '@withshepherd/faker'

faker.locale = "ko";

export const initialState = {
    mainPosts: [],
    singlePost: {
        id:null,
        category: '',
        User: {
            id:null,
            nickname: '',
        },
        title:'',
        Content: [],
        likes: null,
        views: null,
        Comments: []
    },
    totalHotTen: [],
    totalHotTenHasMorePosts: true,
    categoryHotPosts: [],
    categoryHotHasMorePosts: true,
    categoryNewPosts: [],
    categoryNewHasMorePosts: true,
    myPosts:[],
    myHasMorePosts: true,
    myLikePosts:[],
    myLikeHasMorePosts: true,
    myComments:[],
    myCommentsHasMorePosts: true,
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: false,
    removePostLoading: false,
    removePostDone: false,
    removePostError: false,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: false,
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: false,
    loadHotPostsLoading: false,
    loadHotPostsDone: false,
    loadHotPostsError: false,
    loadCategoryHotPostsLoading: false,
    loadCategoryHotPostsDone: false,
    loadCategoryHotPostsError: false,
    loadCategoryNewPostsLoading: false,
    loadCategoryNewPostsDone: false,
    loadCategoryNewPostsError: false,
    loadMyPostsLoading: false,
    loadMyPostsDone: false,
    loadMyPostsError: false,
    loadMyLikePostsLoading: false,
    loadMyLikePostsDone: false,
    loadMyLikePostsError: false,
    loadMyCommentsLoading: false,
    loadMyCommentsDone: false,
    loadMyCommentsError: false,
};

const categories = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
const Categories = {
    "Hot 게시글" : [],
    "MBTI" : ['MBTI', 'ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'],
    "이슈두들링" : ['이슈', 'A'],
    "뒷담두들링" : ['뒷담', 'A'],
    "연애두들링" : ["연애", 'A'],
    "정보두들링" : ["정보", 'A'],
    "19두들링" : ["19", 'A'],
};

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id:Math.floor(Math.random() * 100) + 5,
    category: Object.keys(Categories)[Math.floor(Math.random() * Object.keys(Categories).length) + 1],
    subCategory: '이슈',
    User: {
        id: Math.floor(Math.random() * 100) + 5,
        nickname: faker.name.findName(),
    },
    title: faker.lorem.sentence(),
    Content: Array(5).fill().map(() => ({
        id: Math.floor(Math.random() * 100) + 5,
        type: "paragraph",
        data: {
            text: faker.lorem.sentence()
        }
    })),
    likes: Math.floor(Math.random() * 100) + 5,
    views: Math.floor(Math.random() * 100) + 5,
    Comments: Array(10).fill().map(() => ({
        id:Math.floor(Math.random() * 100) + 5,
        User: {
            id:Math.floor(Math.random() * 100) + 5,
            nickname: faker.name.lastName(),
            type: categories[Math.floor(Math.random() * categories.length) + 1],
        },
        comment: faker.lorem.sentence(),
        datetime: faker.date.recent(),
    }))
}));

export const dummySinglePost = (id) => ({
    id: parseInt(id),
    category: 'ENFJ',
    subCategory: '이슈',
    User: {
        id:Math.floor(Math.random() * 100) + 5,
        nickname: faker.name.findName(),
    },
    title:faker.lorem.sentence(),
    Content: Array(5).fill().map(() => ({
        id: Math.floor(Math.random() * 100) + 5,
        type: "paragraph",
        data: {
            text: faker.lorem.sentence()
        }
    })),
    likes: Math.floor(Math.random() * 100) + 5,
    views: Math.floor(Math.random() * 100) + 5,
    Comments: Array(10).fill().map(() => ({
        id:Math.floor(Math.random() * 100) + 5,
        User: {
            id:Math.floor(Math.random() * 100) + 5,
            nickname: faker.name.lastName(),
            type: categories[Math.floor(Math.random() * categories.length) + 1],
        },
        comment: faker.lorem.sentence(),
        datetime: faker.date.recent(),
    }))
});

initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(100));

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_HOT_POSTS_REQUEST = 'LOAD_HOT_POSTS_REQUEST';
export const LOAD_HOT_POSTS_SUCCESS = 'LOAD_HOT_POSTS_SUCCESS';
export const LOAD_HOT_POSTS_FAILURE = 'LOAD_HOT_POSTS_FAILURE';

export const LOAD_CATEGORY_HOT_POSTS_REQUEST = 'LOAD_CATEGORY_HOT_POSTS_REQUEST';
export const LOAD_CATEGORY_HOT_POSTS_SUCCESS = 'LOAD_CATEGORY_HOT_POSTS_SUCCESS';
export const LOAD_CATEGORY_HOT_POSTS_FAILURE = 'LOAD_CATEGORY_HOT_POSTS_FAILURE';

export const LOAD_CATEGORY_NEW_POSTS_REQUEST = 'LOAD_CATEGORY_NEW_POSTS_REQUEST';
export const LOAD_CATEGORY_NEW_POSTS_SUCCESS = 'LOAD_CATEGORY_NEW_POSTS_SUCCESS';
export const LOAD_CATEGORY_NEW_POSTS_FAILURE = 'LOAD_CATEGORY_NEW_POSTS_FAILURE';

export const RESET_CATEGORY_NEW_POSTS = 'RESET_CATEGORY_NEW_POSTS';

export const LOAD_MY_POSTS_REQUEST = 'LOAD_MY_POSTS_REQUEST';
export const LOAD_MY_POSTS_SUCCESS = 'LOAD_MY_POSTS_SUCCESS';
export const LOAD_MY_POSTS_FAILURE = 'LOAD_MY_POSTS_FAILURE';

export const LOAD_MY_LIKE_POSTS_REQUEST = 'LOAD_MY_LIKE_POSTS_REQUEST';
export const LOAD_MY_LIKE_POSTS_SUCCESS = 'LOAD_MY_LIKE_POSTS_SUCCESS';
export const LOAD_MY_LIKE_POSTS_FAILURE = 'LOAD_MY_LIKE_POSTS_FAILURE';

export const LOAD_MY_COMMENTS_REQUEST = 'LOAD_MY_COMMENTS_REQUEST';
export const LOAD_MY_COMMENTS_SUCCESS = 'LOAD_MY_COMMENTS_SUCCESS';
export const LOAD_MY_COMMENTS_FAILURE = 'LOAD_MY_COMMENTS_FAILURE';

const dummyPost = (data) => ({
    id: Math.floor(Math.random() * 100) + 5,
    category: data.category,
    subCategory: data.subCategory,
    User: {
        id: parseInt(data.userId),
        nickname: faker.name.findName(),
    },
    title:data.title,
    Content: data.contents,
    likes: 0,
    views: 0,
    Comments: []
});

const dummyComment = (data) => ({
    id:data.postId,
    User: {
        id:data.userId,
        nickname: 'key',
        type: 'ENTJ',
    },
    comment: data.content,
    datetime: 3,
})

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.myPosts.unshift(dummyPost(action.data));
                draft.addPostDone = true;
                draft.addPostLoading = false;
                draft.imagePaths = [];
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.myPosts = draft.myPosts.filter((v) => v.id !== action.data.PostId);
                draft.removePostDone = true;
                draft.removePostLoading = false;
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:
                draft.singlePost.Comments.unshift(dummyComment(action.data));
                // draft.singlePost.Comments.unshift(action.data);
                // const post = draft.myPosts.find((v) => v.id === action.data.PostId);
                // post.Comments.unshift(action.data);
                draft.addCommentDone = true;
                draft.addCommentLoading = false;
                break;
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
            case LOAD_POST_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.loadPostError = null;
                break;
            case LOAD_POST_SUCCESS:
                draft.singlePost = action.data;
                draft.loadPostDone = true;
                draft.loadPostLoading = false;
                // draft.hasMorePosts = action.data.length === 10;
                break;
            case LOAD_POST_FAILURE:
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;
            case LOAD_HOT_POSTS_REQUEST:
                draft.loadHotPostsLoading = true;
                draft.loadHotPostsDone = false;
                draft.loadHotPostsError = null;
                break;
            case LOAD_HOT_POSTS_SUCCESS:
                draft.totalHotTen = action.data.slice(0).sort((a, b) => (b.views - a.views));
                draft.loadHotPostsDone = true;
                draft.loadHotPostsLoading = false;
                break;
            case LOAD_HOT_POSTS_FAILURE:
                draft.loadHotPostsLoading = false;
                draft.loadHotPostsError = action.error;
                break;
            case LOAD_CATEGORY_HOT_POSTS_REQUEST:
                draft.loadCategoryHotPostsLoading = true;
                draft.loadCategoryHotPostsDone = false;
                draft.loadCategoryHotPostsError = null;
                break;
            case LOAD_CATEGORY_HOT_POSTS_SUCCESS:
                draft.categoryHotPosts = action.data.slice(0).sort((a, b) => (b.views - a.views));
                draft.loadCategoryHotPostsDoneG = true;
                draft.loadCategoryHotPostsLoading = false;
                break;
            case LOAD_CATEGORY_HOT_POSTS_FAILURE:
                draft.loadCategoryHotPostsLoading = false;
                draft.loadCategoryHotPostsError = action.error;
                break;
            case LOAD_CATEGORY_NEW_POSTS_REQUEST:
                draft.loadCategoryNewPostsLoading = true;
                draft.loadCategoryNewPostsDone = false;
                draft.loadCategoryNewPostsError = null;
                break;
            case LOAD_CATEGORY_NEW_POSTS_SUCCESS:
                draft.categoryNewPosts = draft.categoryNewPosts.concat(action.data); //action.data.slice(0).sort((a, b) => (b.views - a.views)); 
                draft.categoryNewHasMorePosts = draft.categoryNewPosts.length < 50;
                draft.loadCategoryNewPostsDone = true;
                draft.loadCategoryNewPostsLoading = false;
                break;
            case LOAD_CATEGORY_NEW_POSTS_FAILURE:
                draft.loadCategoryNewPostsLoading = false;
                draft.loadCategoryNewPostsError = action.error;
                break;
            case RESET_CATEGORY_NEW_POSTS:
                draft.loadCategoryNewPostsLoading = false;
                draft.categoryNewPosts = [];
            case LOAD_MY_POSTS_REQUEST:
                draft.loadMyPostsLoading = true;
                draft.loadMyPostsDone = false;
                draft.loadMyPostsError = null;
                break;
            case LOAD_MY_POSTS_SUCCESS:
                draft.myPosts = draft.myPosts.concat(action.data);
                draft.myHasMorePosts = draft.myPosts.length < 50;
                draft.loadMyPostsDone = true;
                draft.loadMyPostsLoading = false;
                break;
            case LOAD_MY_POSTS_FAILURE:
                draft.loadMyPostsLoading = false;
                draft.loadMyPostsError = action.error;
                break;
            case LOAD_MY_LIKE_POSTS_REQUEST:
                draft.loadMyLikePostsLoading = true;
                draft.loadMyLikePostsDone = false;
                draft.loadMyLikePostsError = null;
                break;
            case LOAD_MY_LIKE_POSTS_SUCCESS:
                draft.myLikePosts = draft.myLikePosts.concat(action.data);
                draft.myLikeHasMorePosts = draft.myLikePosts.length < 50;
                draft.loadMyLikePostsDone = true;
                draft.loadMyLikePostsLoading = false;
                break;
            case LOAD_MY_LIKE_POSTS_FAILURE:
                draft.loadMyLikePostsLoading = false;
                draft.loadMyLikePostsError = action.error;
                break;
            case LOAD_MY_COMMENTS_REQUEST:
                draft.loadMyCommentsLoading = true;
                draft.loadMyCommentsDone = false;
                draft.loadMyCommentsError = null;
                break;
            case LOAD_MY_COMMENTS_SUCCESS:
                draft.myComments = draft.myComments.concat(action.data);
                draft.myCommentsHasMorePosts = draft.myComments.length < 50;
                draft.loadMyCommentsDone = true;
                draft.loadMyCommentsLoading = false;
                break;
            case LOAD_MY_COMMENTS_FAILURE:
                draft.loadMyCommentsLoading = false;
                draft.loadMyCommentsError = action.error;
                break;
            default:
                break;
        };
    });
};

export default reducer;