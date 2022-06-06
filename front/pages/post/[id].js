import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import PostContentForm from '../../components/Main/PostContentForm';
import PostCommentForm from '../../components/Main/PostCommentForm';
import PostCommentListForm from '../../components/Main/PostCommentListForm';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POST_REQUEST } from '../../reducers/post';

const Post = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        dispatch({
            type: LOAD_POST_REQUEST,
            data: id,
        })
    }, []);
    const { singlePost } = useSelector((state) => state.post);

    return (
        <Fragment>
            <PostContentForm singlePost={singlePost}/>
            <PostCommentForm singlePost={singlePost}/>
            <PostCommentListForm singlePost={singlePost}/>
        </Fragment>
    );
};

export default Post;