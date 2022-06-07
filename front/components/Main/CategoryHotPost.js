import React, { Fragment, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_CATEGORY_HOT_POSTS_REQUEST } from '../../reducers/post';
import moment from 'moment';
import Link from 'next/link';

moment.locale('ko');

const CategoryHotPost = ({ category }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_CATEGORY_HOT_POSTS_REQUEST,
            data: category,
        })
    }, []);


    const onPageChange = useCallback((page) => {
        setCurrentPage(page);
    }, []);

    const { categoryHotPosts } = useSelector((state) => state.post);
    return (
        <Fragment>
            {categoryHotPosts.slice((currentPage-1)*3, (currentPage-1)*3+3).map((post) => (
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
            <Pagination responsive style={{ width: "fit-content", margin: "1.5rem auto" }} pageSize={3} total={15} onChange={onPageChange} defaultCurrent={1} />
        </Fragment>
    );
};

CategoryHotPost.propTypes = {
    category: PropTypes.string.isRequired,
};

export default CategoryHotPost;