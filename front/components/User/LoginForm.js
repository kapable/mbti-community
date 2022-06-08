import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../../reducers/user';

const LoginForm = () => {
    const { logInLoading } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const dispatch = useDispatch();

    const onSubmit = useCallback(
        () => {
            console.log(email, password);
            // dispatch({
            //     type: SIGN_UP_REQUEST,
            //     data: { email, nickname, myMBTI, password }
            // })
            dispatch({
                type: LOG_IN_REQUEST,
                data: { email, password },
            });
        },
        [email, password],
    )

    return (
        <div className='signup-div'>
            <div className='signup-header'>
                <img className='signup-header-main-logo' src={'https://d3edqqquyf396f.cloudfront.net/basic/doodling-logo.png'} alt='케이퍼니' />
                <p className='signup-header-desc'>두들링은 MBTI 성향이 다른 서로에게<br />궁금한 점을 물어보거나 소통하는<br />MBTI 커뮤니티 사이트입니다.</p>
            </div>
            <Form onFinish={onSubmit} layout="vertical" className='signup-form'>
                <div>
                    <Form.Item htmlFor="user-email" required label="이메일">
                        <Input name="user-email" type="email" value={email} required onChange={onChangeEmail}/>
                    </Form.Item>
                </div>
                <div>
                    <Form.Item htmlFor="user-password" required label="비밀번호">
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword}/>
                    </Form.Item>
                </div>
                <div className='signup-form-button-group'>
                    <Button className='signup-form-button' htmlType="submit" >{logInLoading ? <LoadingOutlined /> : "로그인하기"}</Button>
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;