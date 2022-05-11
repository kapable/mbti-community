import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Pagination } from 'antd';

const CategoryHotPost = ({ category }) => {
    return (
        <Fragment>
            <Row className='home-category-hot-post-row'>
                <Col className='home-category-hot-post-col-left' span={20}>
                    <p className='home-category-hot-post-col-title'>엔프제 남친에게 서운할 때</p>
                    <p className='home-category-hot-post-col-info'>3시간 전 | 조회수 99999 | 추천 333 | 완다</p>
                </Col>
                <Col className='home-category-hot-post-col-right' span={4}>368</Col>
            </Row>
            <Row className='home-category-hot-post-row'>
                <Col className='home-category-hot-post-col-left' span={20}>
                    <p className='home-category-hot-post-col-title'>엔프제 남친에게 서운할 때</p>
                    <p className='home-category-hot-post-col-info'>3시간 전 | 조회수 99999 | 추천 333 | 완다</p>
                </Col>
                <Col className='home-category-hot-post-col-right' span={4}>368</Col>
            </Row>
            <Row className='home-category-hot-post-row'>
                <Col className='home-category-hot-post-col-left' span={20}>
                    <p className='home-category-hot-post-col-title'>엔프제 남친에게 서운할 때</p>
                    <p className='home-category-hot-post-col-info'>3시간 전 | 조회수 99999 | 추천 333 | 완다</p>
                </Col>
                <Col className='home-category-hot-post-col-right' span={4}>368</Col>
            </Row>
            <Pagination responsive style={{width: "fit-content", margin: "1.5rem auto"}} pageSize={3} total={15} />
        </Fragment>
    );
};

CategoryHotPost.propTypes = {
    category: PropTypes.string.isRequired,
};

export default CategoryHotPost;