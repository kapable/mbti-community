import React from 'react';
import { Form, Input, Button } from 'antd';

const PostCommentForm = () => {
    return (
        <div>
            <Form>
                <Form.Item>
                    <Input.TextArea
                        placeholder='댓글을 입력해주세요(최대 140자)'
                        allowClear
                        maxLength={140}
                        showCount
                        autoSize={{maxRows: 3}}
                    />
                    <Button
                        type='primary'
                        htmlType='submit'
                    >등록</Button>
                </Form.Item>
                <p>* 타인에게 불쾌감을 주는 욕설, 모욕적인 표현 등은 표기 불가 텍스트로 지정되어 노출이 제한됩니다.</p>
            </Form>
        </div>
    );
};

export default PostCommentForm;