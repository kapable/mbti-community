import React from 'react';
import PropTypes from 'prop-types';
import { Comment, List, Pagination } from 'antd';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { categoriesColorObj } from '../../reducers/user';

moment.locale('ko');

const PostCommentListForm = ({ singlePost }) => {

    return (
        <div className='post-comment-list-form'>
            <List
                itemLayout="horizontal"
                dataSource={singlePost.Comments}
                header={`${singlePost.Comments.length}개의 댓글`}
                renderItem={item => (
                    <li>
                        <Comment
                            key={`${item.datetime}-comment`}
                            actions={[<span>댓글달기</span>]}
                            author={[<p key="1-user">{item.User.nickname}<span style={{backgroundColor: categoriesColorObj[item.User.type], color:"white", padding: "0 0.2rem", marginLeft:"0.2rem"}}>{item.User.type}</span></p>]}
                            content={item.comment}
                            datetime={moment(item.datetime).format('YYYY-MM-DD')}
                        />
                    </li>
                )}
            />
            <Pagination responsive style={{width: "fit-content", margin: "1.5rem auto"}} pageSize={3} total={15} />
        </div>
    );
};

PostCommentListForm.propTypes = {
    singlePost: PropTypes.shape({
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