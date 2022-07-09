import React, { Fragment, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import SwipeableViews from 'react-swipeable-views';
import CategoryNewPost from './CategoryNewPost';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_CATEGORY_HOT_POSTS_REQUEST } from '../../reducers/post';
import Link from 'next/link';

const pointColor = '#375cb7';
const greyColor = '#f3f3f3';

const TypeForum = ({ category, subCategory }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_CATEGORY_HOT_POSTS_REQUEST,
            data: subCategory,
        })
    }, []);

    const { categoryHotPosts } = useSelector((state) => state.post);
    const [swipeIndex, setSwipeIndex] = useState(0);

    const onSwipe = useCallback((index) => {
        setSwipeIndex(index);
    }, []);

    const onFirstSwipeBtnClick = useCallback(() => {
        setSwipeIndex(0);
    }, []);

    const onSecondSwipeBtnClick = useCallback(() => {
        setSwipeIndex(1);
    }, []);
    
    return (
        <Fragment>
            <Row>
                <Col className='type-forum-title-left-col' span={18}>
                    <p className='type-forum-title-left-col-title'>{category}</p>
                    <div className='type-forum-title-left-col-hot'>HOT</div>
                </Col>
                <Col className='type-forum-title-right-col' span={6}>
                    {/* WRITE FUNC FOR LATER */}
                    {/* <button className='type-forum-title-right-col-write'><EditOutlined />&nbsp;글쓰기</button> */}
                </Col>
            </Row>
            <SwipeableViews index={swipeIndex} onChangeIndex={onSwipe} enableMouseEvents resistance>
                <div>
                    {categoryHotPosts.slice(0, 3).map((post) => (
                        <Link key={`${post.title}-link`} href={`post/${post.id}`}><a>
                            <Row key={`${post.id}-Row`} className='home-category-hot-post-row'>
                                <Col key={`${post.id}-Col-left`} className='home-category-hot-post-col-left' span={20}>
                                    <p key={`${post.id}-p1`} className='home-category-hot-post-col-title'>{post.title}</p>
                                    <p key={`${post.id}-p2`} className='home-category-hot-post-col-info'>{`조회수 ${post.views} | 추천 ${post.likes} | ${post.User.nickname}`}</p>
                                </Col>
                                <Col key={`${post.id}-Col-right`} className='home-category-hot-post-col-right' span={4}>{post.Comments.length}</Col>
                            </Row>
                        </a></Link>
                    ))}
                </div>
                <div>
                    {categoryHotPosts.slice(3, 6).map((post) => (
                            <Link key={`${post.title}-link`} href={`post/${post.id}`}><a>
                                <Row key={`${post.id}-Row`} className='home-category-hot-post-row'>
                                    <Col key={`${post.id}-Col-left`} className='home-category-hot-post-col-left' span={20}>
                                        <p key={`${post.id}-p1`} className='home-category-hot-post-col-title'>{post.title}</p>
                                        <p key={`${post.id}-p2`} className='home-category-hot-post-col-info'>{`조회수 ${post.views} | 추천 ${post.likes} | ${post.User.nickname}`}</p>
                                    </Col>
                                    <Col key={`${post.id}-Col-right`} className='home-category-hot-post-col-right' span={4}>{post.Comments.length}</Col>
                                </Row>
                            </a></Link>
                        ))}
                </div>
            </SwipeableViews>
            <div className='type-forum-swipe-button-div'>
                <button onClick={onFirstSwipeBtnClick} style={swipeIndex ? {backgroundColor:greyColor}:{backgroundColor:pointColor}} className='type-forum-swipe-first-button'></button>
                <button onClick={onSecondSwipeBtnClick} style={swipeIndex ? {backgroundColor:pointColor}:{backgroundColor:greyColor}} className='type-forum-swipe-second-button'></button>
            </div>
            <CategoryNewPost category={category} />
        </Fragment>
    );
};

TypeForum.propTypes = {
    category: PropTypes.string.isRequired,
};

export default TypeForum;