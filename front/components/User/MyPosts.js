import { Col, Row } from 'antd';
import React, { Fragment, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_POSTS_REQUEST } from '../../reducers/post';
import Router from 'next/router';

const MyPosts = ({ userId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_MY_POSTS_REQUEST,
            data: userId,
        })
    }, [userId]);

    const { myPosts, myHasMorePosts, loadMyPostsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        function onScroll() {
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 500) {
                if(myHasMorePosts && !loadMyPostsLoading) {
                    const lastId = myPosts[myPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_MY_POSTS_REQUEST,
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
    }, [myHasMorePosts, loadMyPostsLoading, myPosts]);

    const onPostClick = useCallback((postId) => {
        Router.push(`/post/${postId}`);
    }, []);

    return (
        <Fragment>
            {myPosts.map((post) => (
                <Row key={`${post.title}-Row`} className='my-post-row' onClick={() => onPostClick(post.id)}>
                    <Col key={`${post.title}-Col-left`} className='my-post-col-left' span={20}>
                        <p key={`${post.title}-p1`} className='my-post-col-title'>{post.title}</p>
                        <p key={`${post.title}-p2`} className='my-post-col-info'>{`조회수 ${post.views} | 추천 ${post.likes} | ${post.User.nickname}`}</p>
                    </Col>
                    <Col key={`${post.title}-Col-right`} className='my-post-col-right' span={4}>{post.Comments.length}</Col>
                </Row>
            ))}
        </Fragment>
    );
};

export default MyPosts;