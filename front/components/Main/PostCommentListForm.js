import React from 'react';
import PropTypes from 'prop-types';
import { Comment, List, Pagination } from 'antd';

const PostCommentListForm = ({ singleContent }) => {
    return (
        <div className='post-comment-list-form'>
            <List
                itemLayout="horizontal"
                dataSource={singleContent.Comments}
                header={`${singleContent.Comments.length}개의 댓글`}
                renderItem={item => (
                    <li>
                        <Comment
                            key={`${item.datetime}-comment`}
                            actions={[<span>댓글달기</span>]}
                            author={[<p key="1-user">{item.User.nickname}<span style={{backgroundColor: "#c86143", color:"white", padding: "0 0.2rem", marginLeft:"0.2rem"}}>{item.User.type}</span></p>]}
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

PostCommentListForm.propTypes = {
    singleContent: PropTypes.shape({
        id: PropTypes.number,
        category: PropTypes.string,
        User: PropTypes.object,
        title: PropTypes.string,
        content: PropTypes.arrayOf(PropTypes.object),
        likes: PropTypes.number,
        Comments: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCommentListForm;