import { LikeFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { Fragment, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_LIKE_POSTS_REQUEST } from '../../reducers/post';
import Router from 'next/router';

const MyLikePosts = ({ userId }) => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_MY_LIKE_POSTS_REQUEST,
            data: userId,
        })
    }, []);

    const { myLikePosts, myLikeHasMorePosts, loadMyLikePostsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        function onScroll() {
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 500) {
                if(myLikeHasMorePosts && !loadMyLikePostsLoading) {
                    const lastId = myLikePosts[myLikePosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_MY_LIKE_POSTS_REQUEST,
                        data: userId,
                        lastId
                    });
                };
            };
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [myLikeHasMorePosts, loadMyLikePostsLoading, myLikePosts]);

    const onPostClick = useCallback((postId) => {
        Router.push(`/post/${postId}`);
    }, []);

    return (
        <Fragment>
            {myLikePosts.map((post) => (
                <Row key={`${post.title}-Row`} className='my-post-row' onClick={() => onPostClick(post.id)}>
                    <Col key={`${post.title}-Col-left`} className='my-post-col-left' span={20}>
                        <p key={`${post.title}-p1`} className='my-post-col-title'>{post.title}</p>
                        <p key={`${post.title}-p2`} className='my-post-col-info'>{`조회수 ${post.views} | ${post.User.nickname}`}</p>
                    </Col>
                    <Col key={`${post.title}-Col-right`} className='my-post-col-right' span={4}><LikeFilled /> {post.likes}</Col>
                </Row>
            ))}
        </Fragment>
    );
};

export default MyLikePosts;