import React, { Fragment, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { LOAD_CATEGORY_NEW_POSTS_REQUEST, RESET_CATEGORY_NEW_POSTS } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

const CategoryNewPost = ({ category, subCategory }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: RESET_CATEGORY_NEW_POSTS
        });
        dispatch({
            type: LOAD_CATEGORY_NEW_POSTS_REQUEST,
            data: {category, subCategory},
        });
    }, [category, subCategory]);

    const { categoryNewPosts, categoryNewHasMorePosts, loadCategoryNewPostsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        function onScroll() {
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 500) {
                if(categoryNewHasMorePosts && !loadCategoryNewPostsLoading) {
                    const lastId = categoryNewPosts[categoryNewPosts.length - 1]?.id;
                    dispatch({
                        type: LOAD_CATEGORY_NEW_POSTS_REQUEST,
                        data: {category, subCategory},
                        lastId
                    });
                };
            };
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [categoryNewHasMorePosts, loadCategoryNewPostsLoading, categoryNewPosts, category, subCategory]);

    const onPostClick = useCallback((postId) => {
        Router.push(`/post/${postId}`);
    }, []);

    return (
        <Fragment>
            {categoryNewPosts.map((post) => (
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

CategoryNewPost.propTypes = {
    category: PropTypes.string.isRequired,
};

export default CategoryNewPost;