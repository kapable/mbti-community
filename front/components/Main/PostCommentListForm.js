import React from 'react';
import { Avatar, Comment, List, Pagination } from 'antd';

const PostCommentListForm = () => {
    const data = [
        {
            actions: [<span>댓글달기</span>],
            user: [<p key="1-user">나야아<span style={{backgroundColor: "#c86143", color:"white", padding: "0 0.2rem", marginLeft:"0.2rem"}}>ESTJ</span></p>],
            comment: "그건 말이 안돼죠!",
            datetime:1
        },
        {
            actions: [<span>댓글달기</span>],
            user: [<p key="2-user">너어어<span style={{backgroundColor: "#c86143", color:"white", padding: "0 0.2rem", marginLeft:"0.2rem"}}>INTP</span></p>],
            comment: "그건 말이 돼죠!",
            datetime:2
        },
        {
            actions: [<span>댓글달기</span>],
            user: [<p key="3-user">니이이<span style={{backgroundColor: "#c86143", color:"white", padding: "0 0.2rem", marginLeft:"0.2rem"}}>ENFP</span></p>],
            comment: "그건 말이 안돼죠!",
            datetime:3
        },
    ]
    return (
        <div className='post-comment-list-form'>
            <List
                itemLayout="horizontal"
                dataSource={data}
                header={`${data.length}개의 댓글`}
                renderItem={item => (
                    <li>
                        <Comment
                            key={`${item.datetime}-comment`}
                            actions={item.actions}
                            author={item.user}
                            content={item.comment}
                            datetime={item.datetime}
                        />
                    </li>
                )}
            />
            <Pagination responsive style={{width: "fit-content", margin: "1.5rem auto"}} pageSize={3} total={15} />
        </div>
    );
};

export default PostCommentListForm;