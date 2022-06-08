import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import PostContentForm from '../../components/Main/PostContentForm';
import PostCommentForm from '../../components/Main/PostCommentForm';
import PostCommentListForm from '../../components/Main/PostCommentListForm';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import Head from 'next/head';

const Post = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        dispatch({
            type: LOAD_POST_REQUEST,
            id,
        })
    }, [id]);
    const { singlePost } = useSelector((state) => state.post);

    return (
        <Fragment>
            <Head>
                <title>{`${singlePost.title} | 두들링 MBTI 커뮤니티`}</title>
                <link rel='shortcut icon' href='/doodling-favicon.png'/>
                <meta charSet='utf-8'/>
                <meta name="language" content="Korean" />
                <meta name="author" content="쿠키로켓" />
                <meta name="description" content={`${singlePost.title} | 두들링 MBTI 커뮤니티`} />
                <meta name="keywords" content="MBTI, 커뮤니티" />
            </Head>
            <PostContentForm singlePost={singlePost}/>
            <PostCommentForm singlePost={singlePost}/>
            <PostCommentListForm singlePost={singlePost}/>
        </Fragment>
    );
};

export default Post;