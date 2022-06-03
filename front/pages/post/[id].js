import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import PostContentForm from '../../components/Main/PostContentForm';
import PostCommentForm from '../../components/Main/PostCommentForm';
import PostCommentListForm from '../../components/Main/PostCommentListForm';
import { useSelector } from 'react-redux';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const singleContent = useSelector((state) => state.post.mainPosts[0]);

    return (
        <Fragment>
            <PostContentForm singleContent={singleContent} />
            <PostCommentForm />
            <PostCommentListForm singleContent={singleContent}/>
        </Fragment>
    );
};

export default Post;