import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Pagination } from 'antd';

const CategoryNewPost = ({ category }) => {
    return (
        <Fragment>
            <Row className='home-category-new-post-row'>
                <Col className='home-category-new-post-col-left' span={20}>
                    <p className='home-category-new-post-col-title'>엔프제 남친에게 서운할 때</p>
                    <p className='home-category-new-post-col-info'>3시간 전 | 조회수 99999</p>
                </Col>
                <Col className='home-category-new-post-col-right' span={4}>
                    완다
                    <p className='home-category-new-post-col-right-button'>ENTP</p>
                </Col>
            </Row>
            <Row className='home-category-new-post-row'>
                <Col className='home-category-new-post-col-left' span={20}>
                    <p className='home-category-new-post-col-title'>엔프제 남친에게 서운할 때</p>
                    <p className='home-category-new-post-col-info'>3시간 전 | 조회수 99999</p>
                </Col>
                <Col className='home-category-new-post-col-right' span={4}>
                    완다
                    <p className='home-category-new-post-col-right-button'>ENTP</p>
                </Col>
            </Row>
            <Row className='home-category-new-post-row'>
                <Col className='home-category-new-post-col-left' span={20}>
                    <p className='home-category-new-post-col-title'>엔프제 남친에게 서운할 때</p>
                    <p className='home-category-new-post-col-info'>3시간 전 | 조회수 99999</p>
                </Col>
                <Col className='home-category-new-post-col-right' span={4}>
                    완다
                    <p className='home-category-new-post-col-right-button'>ENTP</p>
                </Col>
            </Row>
            <Pagination responsive style={{width: "fit-content", margin: "1.5rem auto"}} pageSize={3} total={15} />
        </Fragment>
    );
};

CategoryNewPost.propTypes = {
    category: PropTypes.string.isRequired,
};

export default CategoryNewPost;