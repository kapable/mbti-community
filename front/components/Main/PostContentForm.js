import { Col, Row } from 'antd';
import React, { Fragment, useCallback, useState } from 'react';
import { BellFilled, BellOutlined, EditOutlined, LikeOutlined, LikeFilled, CommentOutlined, LinkOutlined, TagOutlined, BookOutlined, BookFilled } from '@ant-design/icons';

const PostContentForm = () => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const onLikeClick = useCallback(() => {
        setLiked(!liked);
    }, [liked]);

    const onSaveClick = useCallback(() => {
        setSaved(!saved);
    }, [saved]);

    return (
        <Fragment>
            {/* Header for the Category */}
            <Row className='post-content-header-row'>
                <Col className='post-content-header-left-col' span={18}>
                    <p className='post-content-header-type'>ENFJ</p>
                </Col>
                <Col className='post-content-header-right-col' span={6}>
                    <BellOutlined className='post-content-header-bell' />
                </Col>
            </Row>
            {/* Title for the post */}
            <Row className='post-content-title-row'>
                <Col className='post-content-left-col' span={12}>
                    <p className='post-content-title'>엔프제 남친에게 서울할 때 엔프제 남친에게 서울할 때<span className='post-content-title-like'>&nbsp;<LikeOutlined /></span></p>
                    <p className='post-content-info'>
                        <span className='post-content-time'>19:25</span>&nbsp;&nbsp;&nbsp;
                        <span className='post-content-views'>조회수 12</span>
                    </p>
                </Col>
                <Col className='post-content-middle-col' span={6}>
                    <button className='post-content-edit-button'><EditOutlined />&nbsp;수정하기</button>
                </Col>
                <Col className='post-content-right-col' span={6}>
                    <p className='post-content-author-name'>
                        웡아잉
                        <span className='post-content-author-type'>ENTP</span>
                    </p>
                </Col>
            </Row>
            {/* Contents of the post */}
            <div className='post-content-div'>
                <p>엔프제 남친에게 서운할 때 마리야<br />가나다라마바사아자아자 화이팅!</p>
                <p>엔프제 남친에게 서운할 때 마리야<br />가나다라마바사아자아자 화이팅!</p>
                <p>엔프제 남친에게 서운할 때 마리야<br />가나다라마바사아자아자 화이팅!</p>
                <p>엔프제 남친에게 서운할 때 마리야<br />가나다라마바사아자아자 화이팅!</p>
                <p>엔프제 남친에게 서운할 때 마리야<br />가나다라마바사아자아자 화이팅!</p>
                <p>엔프제 남친에게 서운할 때 마리야<br />가나다라마바사아자아자 화이팅!</p>
            </div>
            {/* Bottom action buttons */}
            <Row className='post-content-bottom-actions-row'>
                <Col className='post-content-bottom-actions-like-col' span={8} onClick={onLikeClick}>{liked ? <LikeFilled /> : <LikeOutlined />}</Col>
                <Col className='post-content-bottom-actions-save-col' span={8} onClick={onSaveClick}>{saved ? <BookFilled /> : <BookOutlined />}</Col>
                <Col className='post-content-bottom-actions-link-col' span={8}><LinkOutlined /></Col>
            </Row>
        </Fragment>
    );
};

export default PostContentForm;