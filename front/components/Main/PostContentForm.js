import { Col, Row } from 'antd';
import React, { Fragment } from 'react';
import { BellFilled, BellOutlined, EditOutlined, LikeOutlined, LikeFilled, CommentOutlined, LinkOutlined, TagOutlined, BookOutlined } from '@ant-design/icons';

const PostContentForm = () => {
    return (
        <Fragment>
            {/* Header for the Category */}
            <Row>
                <Col span={18}>
                    <p>ENFJ</p>
                </Col>
                <Col span={6}>
                    <BellOutlined />
                </Col>
            </Row>
            {/* Title for the post */}
            <Row>
                <Col span={12}>
                    <p>엔프제 남친에게 서울할 때<span><LikeOutlined /></span></p>
                    <p>19:25 조회수 12</p>
                </Col>
                <Col span={6}>
                    웡아잉
                    <p>ENTP</p>
                </Col>
                <Col span={6}>
                    <button><EditOutlined />&nbsp;수정하기</button>
                </Col>
            </Row>
            {/* Contents of the post */}
            <div>
                <p>엔프제 남친에게 서운할 때 마리야<br />가나다라마바사아자아자 화이팅!</p>
            </div>
            {/* Bottom action buttons */}
            <Row>
                <Col span={8}><LikeOutlined /></Col>
                <Col span={8}><BookOutlined /></Col>
                <Col span={8}><LinkOutlined /></Col>
            </Row>
        </Fragment>
    );
};

export default PostContentForm;