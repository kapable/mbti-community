import produce from '../util/produce';
import shortId from 'shortid';
import faker from '@withshepherd/faker'

faker.locale = "ko";

export const initialState = {
    mainPosts: [{
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
    }],
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
};

initialState.mainPosts = initialState.mainPosts.concat(
    Array(100).fill().map(() => ({
        id:Math.floor(Math.random() * 100) + 5,
        category: 'ENFJ',
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
    }))
);

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
            default:
                break;
        };
    });
};

export default reducer;