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

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id:Math.floor(Math.random() * 100) + 5,
    category: categories[Math.floor(Math.random() * categories.length) + 1],
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
            type: 'ENTP',
        },
        comment: faker.lorem.sentence(),
        datetime: faker.date.recent(),
    }))
}));

initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(100));

// initialState.totalHotTen = initialState.totalHotTen.concat(generateDummyPost(10));

initialState.categoryHotPosts = initialState.categoryHotPosts.concat(generateDummyPost(15));

initialState.myPosts = initialState.myPosts.concat(generateDummyPost(15));

// initialState.myLikePosts = initialState.myLikePosts.concat(generateDummyPost(15));

initialState.myComments = initialState.myComments.concat(generateDummyPost(15));

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
    id:shortId.generate(),
    category: data.category,
    User: {
        id:5,
        nickname: data.userId,
    },
    title:data.title,
    Content: data.contents,
    likes: 0,
    Comments: []
});

const dummySinglePost = (id) => ({
    id: parseInt(id),
    category: 'ENFJ',
    User: {
        id:10,
        nickname: 'be_seeyong',
    },
    title:'엔프제 남친에게 서운할 때 어떻게 해야 하나요 ㅠㅠ',
    Content: [
        {
            id: "5jvmbJbK4Q",
            type: "paragraph",
            data: {
                text: "엔프제 남친에게 서운할 때 마리야"
            }
        },
        {
            id: "_NVkfm0kkf",
            type: "paragraph",
            data: {
                text: "가나다라마바사아자아자 화이팅!&nbsp;"
            }
        },
        {
            id: "FF1iyF3VwasdfN",
            type: "image",
            data: {
                file: {
                    url: "https://codex.so/public/app/img/external/codex2x.png"
                },
                caption: "",
                withBorder: false,
                stretched: false,
                withBackground: false
            }
        },
        {
            id: "SkQzn3tbvZ",
            type: "paragraph",
            data: {
                text: "is good!"
            }
        },
        {
            id: "FF1iyF3VwN",
            type: "image",
            data: {
                file: {
                    url: "https://codex.so/public/app/img/external/codex2x.png"
                },
                caption: "",
                withBorder: false,
                stretched: false,
                withBackground: false
            }
        },
    ],
    likes: Math.floor(Math.random() * 100) + 5,
    views: Math.floor(Math.random() * 100) + 5,
    Comments: [{
        id:45,
        User: {
            id:90,
            nickname: 'Donkey',
            type: 'ENTP',
        },
        comment: '그건 말이 안돼요!',
        datetime: 3,
    },
    {
        id:46,
        User: {
            id:98,
            nickname: '딜로미',
            type: 'ESTP',
        },
        comment: '그건 말이 되죠!',
        datetime: 2,
    },
    {
        id:47,
        User: {
            id:92,
            nickname: '정구리',
            type: 'INFP',
        },
        comment: '그건 말이 될까요?!!',
        datetime: 1,
    },]
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
                draft.mainPosts.unshift(dummyPost(action.data));
                // draft.mainPosts.unshift(action.data);
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
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
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
                // const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
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
                // draft.singlePost = action.data;
                draft.singlePost = dummySinglePost(action.data);
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
                // draft.mainPosts = action.data;
                draft.totalHotTen = draft.totalHotTen.concat(action.data).slice(0).sort((a, b) => (b.views - a.views));
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
                // draft.mainPosts = action.data;
                draft.categoryHotPosts = draft.categoryHotPosts.slice(0).sort((a, b) => (b.views - a.views));
                draft.loadCategoryHotPostsDone = true;
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
                // draft.mainPosts = action.data;
                draft.loadCategoryNewPostsDone = true;
                draft.loadCategoryNewPostsLoading = false;
                break;
            case LOAD_CATEGORY_NEW_POSTS_FAILURE:
                draft.loadCategoryNewPostsLoading = false;
                draft.loadCategoryNewPostsError = action.error;
                break;
            case LOAD_MY_POSTS_REQUEST:
                draft.loadMyPostsLoading = true;
                draft.loadMyPostsDone = false;
                draft.loadMyPostsError = null;
                break;
            case LOAD_MY_POSTS_SUCCESS:
                // draft.mainPosts = action.data;
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
                // draft.mainPosts = action.data;
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