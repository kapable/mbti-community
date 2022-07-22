import { Col, Row, Image } from 'antd';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { BellFilled, BellOutlined, EditOutlined, LikeOutlined, LikeFilled, CommentOutlined, LinkOutlined, TagOutlined, BookOutlined, BookFilled, DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_POST_REQUEST } from '../../reducers/post';
import parse from 'html-react-parser';

const PostContentForm = ({ singlePost }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.myInfo?.id);
    const { removePostDone, removePostLoading } = useSelector((state) => state.post);
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [alarmed, setAlarmed] = useState(false);

    const onLikeClick = useCallback(() => {
        setLiked(!liked);
    }, [liked]);

    const onSaveClick = useCallback(() => {
        setSaved(!saved);
    }, [saved]);

    const onAlarmClick = useCallback(() => {
        setAlarmed(!alarmed);
    }, [alarmed]);

    const onDeletePostClick = useCallback((id) => {
        if(confirm('정말 이 글을 삭제하시겠습니까? 한번 삭제한 글을 복구할 수 없습니다.')) {
            dispatch({
                type: REMOVE_POST_REQUEST,
                data: { PostId: id }
            });
        }
    }, []);

    useEffect(() => {
        if(removePostDone) {
            alert('게시글이 삭제되었습니다!');
            Router.replace('/');
        }
    }, [removePostDone]);

    return (
        <Fragment>
            {/* Header for the Category */}
            <Row className='post-content-header-row'>
                <Col className='post-content-header-left-col' span={18}>
                    <p className='post-content-header-type'>{singlePost.category}</p>
                </Col>
                <Col className='post-content-header-right-col' span={6}>
                    <div onClick={onAlarmClick}>
                        {alarmed
                        ? (<BellFilled style={{ color: "#375cb7" }} className='post-content-header-bell' />)
                        : (<BellOutlined className='post-content-header-bell' />)}
                    </div>
                </Col>
            </Row>
            {/* Title for the post */}
            <Row className='post-content-title-row'>
                <Col className='post-content-left-col' span={12}>
                    <p className='post-content-title'>{singlePost.title}</p>
                    <p className='post-content-info'>
                        <span className='post-content-time'>19:25</span>&nbsp;&nbsp;&nbsp;
                        <span className='post-content-views'>{`조회수 ${singlePost.views}`}</span>
                        <span onClick={onLikeClick} className='post-content-title-like'>&nbsp;&nbsp;{liked ? <LikeFilled /> : <LikeOutlined />}{singlePost.likes}</span>
                    </p>
                </Col>
                <Col className='post-content-middle-col' span={6}>
                    {id && singlePost.User.id === id
                    ? (<>
                            {/* <button className='post-content-edit-button'><EditOutlined />&nbsp;수정하기</button> */}
                            <button onClick={() => onDeletePostClick(singlePost.id)} className='post-content-delete-button'>{removePostLoading ? <><LoadingOutlined />&nbsp;삭제하기</> : <><DeleteOutlined />&nbsp;삭제하기</>}</button>
                        </>)
                    : (null)}
                    
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
                {/* {singlePost.Content.map((value) => {
                    if(value.type === "paragraph") {
                        let texts = value.data.text.replace("&nbsp;", "\u00a0")
                        return (<p key={value.id}>{texts}</p>)
                    } else if(value.type === 'image') {
                        return <Image key={value.id} className='post-content-image' src={value.data.file.url} alt={"이미지 불러오는 중.."} />
                    }
                })} */}
                {singlePost.Content ? singlePost.Content.match(/<p ([^\<]*?) >([^\<]*?)<\/p>|<img ([^\<]*?) \/>/g).map(v => (
                    parse(v)
                )) : null}
            </div>
            {/* Bottom action buttons */}
            <Row className='post-content-bottom-actions-row'>
                <Col className='post-content-bottom-actions-like-col' span={8} onClick={onLikeClick}>{liked ? <LikeFilled style={{ color: "#375cb7" }}/> : <LikeOutlined />}</Col>
                <Col className='post-content-bottom-actions-save-col' span={8} onClick={onSaveClick}>{saved ? <BookFilled style={{ color: "#375cb7" }}/> : <BookOutlined />}</Col>
                <Col className='post-content-bottom-actions-link-col' span={8}><LinkOutlined /></Col>
            </Row>
        </Fragment>
    );
};

PostContentForm.propTypes = {
    singlePost: PropTypes.shape({
        id: PropTypes.number,
        category: PropTypes.string,
        User: PropTypes.object,
        title: PropTypes.string,
        Content: PropTypes.string,
        likes: PropTypes.number,
        views: PropTypes.number,
        Comments: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostContentForm;