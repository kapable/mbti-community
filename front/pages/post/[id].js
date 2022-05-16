import React, { Fragment } from 'react';
import PostContentForm from '../../components/Main/PostContentForm';
import PostCommentForm from '../../components/Main/PostCommentForm';

const Post = () => {
    return (
        <Fragment>
            <PostContentForm />
            <PostCommentForm />
            {/* <PostCommentListForm /> */}
        </Fragment>
    );
};

export default Post;