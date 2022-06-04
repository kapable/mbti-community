import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../../reducers/post';

const PostCommentForm = ({ singlePost }) => {
    const dispatch = useDispatch();
    const [commentText, onChangeCommentText, setCommentText] = useInput('');
    const myId = useSelector((state) => state.user.myInfo?.id);
    const { addCommentDone } = useSelector((state) => state.post);

    useEffect(() => {
        if(addCommentDone) {
            setCommentText('');
        };
    }, [addCommentDone]);

    const onSubmitComment = useCallback(() => {
        if(!myId) {
            alert('로그인이 필요합니다');
        };
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: singlePost.id, userId: myId }
        });
    }, [commentText, myId, singlePost]);

    return (
        <div className='post-comment-form-div'>
            <Form onFinish={onSubmitComment}>
                <Form.Item>
                    <Input.TextArea
                        placeholder='댓글을 입력해주세요(최대 140자)'
                        allowClear
                        maxLength={140}
                        showCount
                        autoSize={{maxRows: 3}}
                        value={commentText}
                        onChange={onChangeCommentText}
                    />
                    <Button
                        className='post-comment-submit-button'
                        type='default'
                        htmlType='submit'
                    >등록</Button>
                </Form.Item>
                <p>* 타인에게 불쾌감을 주는 욕설, 모욕적인 표현 등은 표기 불가 텍스트로 지정되어 노출이 제한됩니다.</p>
            </Form>
        </div>
    );
};

PostCommentForm.propTypes = {
    singlePost: PropTypes.shape({
        id: PropTypes.number,
        category: PropTypes.string,
        User: PropTypes.object,
        title: PropTypes.string,
        content: PropTypes.arrayOf(PropTypes.object),
        likes: PropTypes.number,
        Comments: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCommentForm;