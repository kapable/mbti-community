import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

const HotRanking = () => {
    return (
        <Fragment>
            <Row className='home-hot-ranking-title-div'>
                <Col span={8}><button className='home-hot-ranking-title-btn'>Hot 게시글</button></Col>
                <Col span={16}><p className='home-hot-ranking-first-p'>1 바리스타가 내린 에스프레소</p></Col>
            </Row>
            <Row className='home-hot-ranking-row' justify='center'>
                <Col span={12}>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                    <div className='home-hot-ranking-topten-div'>광고</div>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                </Col>
                <Col span={12}>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                    <div className='home-hot-ranking-topten-div'>광고</div>
                    <div className='home-hot-ranking-topten-div'>1 ENFJ 엔프제 남친에게 서운할 때 34</div>
                </Col>
            </Row>
        </Fragment>
    );
};

// HotRanking.propTypes = {
//     category: PropTypes.string.isRequired,
// };

export default HotRanking;