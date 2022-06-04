import produce from '../util/produce';

export const initialState = {
    mainPosts: [{
        id:1,
        category: 'ENFJ',
        User: {
            id:1,
            nickname: 'be_seeyong',
        },
        title:'엔프제 남친에게 서운할 때 어떻게 해야 하나요 ㅠㅠ',
        content: [
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
        likes: 30,
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
    }],
    singlePost: {},
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: false,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: false,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const dummyPost = {
    id:3,
    category: 'INFP',
    User: {
        id:5,
        nickname: 'seeyong',
    },
    title:'ㅑㅑㅑㅑ 남친에게 서운할 때 어떻게 해야 하나요 ㅠㅠ',
    content: [
        {
            id: "5jvmbJbK4Q",
            type: "paragraph",
            data: {
                text: "!!asdf"
            }
        },
        {
            id: "_NVkfm0kkf",
            type: "paragraph",
            data: {
                text: "!!!this&nbsp;"
            }
        },
        {
            id: "SkQzn3tbvZ",
            type: "paragraph",
            data: {
                text: "!!!is good!"
            }
        }
    ],
    likes: 0,
    Comments: []
}

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.mainPosts.unshift(action.data);
                draft.addPostDone = true;
                draft.addPostLoading = false;
                draft.imagePaths = [];
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:
                draft.singlePost.Comments.unshift(action.data);
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Comments.unshift(action.data);
                draft.addCommentDone = true;
                draft.addCommentLoading = false;
                break;
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
            default:
                break;
        };
    });
};

export default reducer;