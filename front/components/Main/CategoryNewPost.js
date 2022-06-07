import React, { Fragment, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Pagination } from 'antd';
import { LOAD_CATEGORY_NEW_POSTS_REQUEST } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const CategoryNewPost = ({ category }) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        dispatch({
            type: LOAD_CATEGORY_NEW_POSTS_REQUEST,
            data: category,
        })
    }, []);

    const { categoryNewPosts } = useSelector((state) => state.post);

    const onPageChange = useCallback((page) => {
        setCurrentPage(page);
    }, []);

    return (
        <Fragment>
            {categoryNewPosts.slice((currentPage-1)*3, (currentPage-1)*3+3).map((post) => (
                <Link key={`${post.title}-link`} href={`post/${post.id}`}><a>
                    <Row key={`${post.id}-Row`} className='home-category-new-post-row'>
                        <Col key={`${post.id}-Col-left`} className='home-category-new-post-col-left' span={20}>
                            <p key={`${post.id}-p1`} className='home-category-new-post-col-title'>{post.title}</p>
                            <p key={`${post.id}-p2`} className='home-category-new-post-col-info'>{`조회수 ${post.views} | 추천 ${post.likes} | ${post.User.nickname}`}</p>
                        </Col>
                        <Col key={`${post.id}-Col-right`} className='home-category-new-post-col-right' span={4}>{post.Comments.length}</Col>
                    </Row>
                </a></Link>
            ))}
            <Pagination responsive style={{width: "fit-content", margin: "1.5rem auto"}} pageSize={3} total={15} onChange={onPageChange} defaultCurrent={1}/>
        </Fragment>
    );
};

CategoryNewPost.propTypes = {
    category: PropTypes.string.isRequired,
};

export default CategoryNewPost;