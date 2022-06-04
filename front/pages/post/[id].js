import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import PostContentForm from '../../components/Main/PostContentForm';
import PostCommentForm from '../../components/Main/PostCommentForm';
import PostCommentListForm from '../../components/Main/PostCommentListForm';
import { useSelector } from 'react-redux';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const { singlePost } = useSelector((state) => state.post);

    return (
        <Fragment>
            <PostContentForm singlePost={singlePost} />
            <PostCommentForm singlePost={singlePost} />
            <PostCommentListForm singlePost={singlePost}/>
        </Fragment>
    );
};

export default Post;