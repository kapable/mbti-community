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
            }
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
    postAdded: null,
    imagePaths: [],
};

const ADD_POST = 'ADD_POST'
export const addPost = {
    type: ADD_POST,
};

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
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    };
};

export default reducer;