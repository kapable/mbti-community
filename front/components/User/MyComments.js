import { Col, Row } from 'antd';
import Link from 'next/link';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_COMMENTS_REQUEST } from '../../reducers/post';

const MyComments = ({ userId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_MY_COMMENTS_REQUEST,
            data: userId,
        })
    }, [userId]);

    const { myComments } = useSelector((state) => state.post);

    return (
        <Fragment>
            <p>*하나의 게시글 당, 내가 남긴 가장 최신 댓글</p>
            {myComments.map((post) => (
                <Link key={`${post.title}-link`} href={`post/${post.id}`}><a>
                    <Row key={`${post.id}-Row`} className='my-post-row'>
                        <Col key={`${post.id}-Col-left`} className='my-post-col-left' span={20}>
                            <p key={`${post.id}-p1`} className='my-post-col-title'>{post.Comments[0].comment}</p>
                            <p key={`${post.id}-p2`} className='my-post-col-info'>{post.title}</p>
                        </Col>
                        <Col key={`${post.id}-Col-right`} className='my-post-col-right' span={4}>{post.Comments.length}</Col>
                    </Row>
                </a></Link>
            ))}
        </Fragment>
    );
};

export default MyComments;