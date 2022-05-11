import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import SwipeableViews from 'react-swipeable-views';

const TypeForum = ({ category }) => {
    const [swipeIndex, setSwipeIndex] = useState(0);
    
    return (
        <Fragment>
            <Row>
                <Col span={20}>
                    <p>{category}</p>
                    <button>HOT</button>
                </Col>
                <Col span={4}>
                    <button>글쓰기</button>
                </Col>
            </Row>
            <SwipeableViews enableMouseEvents resistance>
                <div>
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
                </div>
                <div>
                    <Row className='home-category-hot-post-row'>
                        <Col className='home-category-hot-post-col-left' span={20}>
                            <p className='home-category-hot-post-col-title'>11엔프제 남친에게 서운할 때</p>
                            <p className='home-category-hot-post-col-info'>3시간 전 | 조회수 99999 | 추천 333 | 완다</p>
                        </Col>
                        <Col className='home-category-hot-post-col-right' span={4}>368</Col>
                    </Row>
                    <Row className='home-category-hot-post-row'>
                        <Col className='home-category-hot-post-col-left' span={20}>
                            <p className='home-category-hot-post-col-title'>111엔프제 남친에게 서운할 때</p>
                            <p className='home-category-hot-post-col-info'>3시간 전 | 조회수 99999 | 추천 333 | 완다</p>
                        </Col>
                        <Col className='home-category-hot-post-col-right' span={4}>368</Col>
                    </Row>
                    <Row className='home-category-hot-post-row'>
                        <Col className='home-category-hot-post-col-left' span={20}>
                            <p className='home-category-hot-post-col-title'>111엔프제 남친에게 서운할 때</p>
                            <p className='home-category-hot-post-col-info'>3시간 전 | 조회수 99999 | 추천 333 | 완다</p>
                        </Col>
                        <Col className='home-category-hot-post-col-right' span={4}>368</Col>
                    </Row>
                </div>
            </SwipeableViews>
            
        </Fragment>
    );
};

TypeForum.propTypes = {
    category: PropTypes.string.isRequired,
};

export default TypeForum;