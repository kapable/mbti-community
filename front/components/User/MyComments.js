import { Col, Row } from 'antd';
import React, { Fragment, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_COMMENTS_REQUEST } from '../../reducers/post';
import Router from 'next/router';

const MyComments = ({ userId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_MY_COMMENTS_REQUEST,
            data: userId,
        })
    }, [userId]);

    const { myComments, myCommentsHasMorePosts, loadMyCommentsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        function onScroll() {
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 500) {
                if(myCommentsHasMorePosts && !loadMyCommentsLoading) {
                    const lastId = myComments[myComments.length - 1]?.id;
                    dispatch({
                        type: LOAD_MY_COMMENTS_REQUEST,
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
    }, [myCommentsHasMorePosts, loadMyCommentsLoading, myComments]);

    const onPostClick = useCallback((postId) => {
        Router.push(`/post/${postId}`);
    }, []);

    return (
        <Fragment>
            <p>*하나의 게시글 당, 내가 남긴 가장 최신 댓글</p>
            {myComments.map((post) => (
                <Row key={`${post.title}-Row`} className='my-post-row' onClick={() => onPostClick(post.id)}>
                    <Col key={`${post.title}-Col-left`} className='my-post-col-left' span={20}>
                        <p key={`${post.title}-p1`} className='my-post-col-title'>{post.Comments[0].comment}</p>
                        <p key={`${post.title}-p2`} className='my-post-col-info'>{post.title}</p>
                    </Col>
                    <Col key={`${post.title}-Col-right`} className='my-post-col-right' span={4}>{post.Comments.length}</Col>
                </Row>
            ))}
        </Fragment>
    );
};

export default MyComments;