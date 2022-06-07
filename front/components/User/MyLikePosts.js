import { LikeFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
import Link from 'next/link';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_LIKE_POSTS_REQUEST } from '../../reducers/post';

const MyLikePosts = ({ userId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_MY_LIKE_POSTS_REQUEST,
            data: userId,
        })
    }, [userId]);

    const { myLikePosts } = useSelector((state) => state.post);
    return (
        <Fragment>
            {myLikePosts.map((post) => (
                <Link key={`${post.title}-link`} href={`post/${post.id}`}><a>
                    <Row key={`${post.id}-Row`} className='my-post-row'>
                        <Col key={`${post.id}-Col-left`} className='my-post-col-left' span={20}>
                            <p key={`${post.id}-p1`} className='my-post-col-title'>{post.title}</p>
                            <p key={`${post.id}-p2`} className='my-post-col-info'>{`조회수 ${post.views} | ${post.User.nickname}`}</p>
                        </Col>
                        <Col key={`${post.id}-Col-right`} className='my-post-col-right' span={4}><LikeFilled /> {post.likes}</Col>
                    </Row>
                </a></Link>
            ))}
        </Fragment>
    );
};

export default MyLikePosts;