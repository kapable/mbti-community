import React, { useCallback, useState } from 'react';
import { Button, Checkbox, Form, Input, Dropdown, Row, Col, Space, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Router from 'next/router';
import useInput from '../../hooks/useInput';

const SignupForm = () => {
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [myMBTI, setMyMBTI] = useState('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const onMBTIClick = useCallback((e) => {
        setMyMBTI(e.key)
        console.log(myMBTI);
    }, [myMBTI]);

    const categories = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
    const menu = (
        <Menu
            onClick={onMBTIClick}
            items={categories.map((type, _) => ({ label: type, key: type }))}
        />
    )

    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value);
            setPasswordError(e.target.value !== password);
        },
        [password],
    )
    
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback(
        (e) => {
            setTerm(e.target.checked);
            setTermError(false);
        },
        [],);

    const onSubmit = useCallback(
        () => {
            if(password !== passwordCheck) {
                return setPasswordError(true);
            }
            if(!term) {
                return setTermError(true);
            }
            // dispatch({
            //     type: SIGN_UP_REQUEST,
            //     data: { email, nickname, myMBTI, password }
            // })
        },
        [password, passwordCheck, setPasswordError, term, setTermError, email, nickname],
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
                <div>
                    <Form.Item htmlFor="user-password-check" required label="비밀번호 재확인">
                        <Input
                            name="user-password-check"
                            type="password"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                        />
                    </Form.Item>
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <Row>
                    <Col span={12}>
                        <Form.Item htmlFor="user-nick" required label="닉네임">
                            <Input name="user-nick" value={nickname} required onChange={onChangeNickname}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item htmlFor="user-nick" required label="내 MBTI">
                            <Dropdown overlay={menu} trigger={['click']}>
                                <Button style={{ width: '100%' }}>
                                    <Space>
                                        {myMBTI ? myMBTI : 'MBTI'}
                                    <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                            {/* <Input name="user-nick" value={myMBTI} required onChange={onChangeMyMBTI}/> */}
                        </Form.Item>
                    </Col>
                </Row>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>(필수) 체크 후 가입시 개인정보활용 방침에 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>개인정보활용방침 동의 후 가입이 가능합니다.</ErrorMessage>}
                </div>
                <div className='signup-form-button-group'>
                    <Button className='signup-form-button' htmlType="submit" >회원가입하기</Button>
                </div>
            </Form>
        </div>
    );
};

export default SignupForm;