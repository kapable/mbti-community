import React, { useCallback, useState } from 'react';
import { Button, Checkbox, Form, Input, Dropdown, Row, Col, Space, Menu } from 'antd';
import { DownOutlined, LoadingOutlined } from '@ant-design/icons';
import Router from 'next/router';
import useInput from '../../hooks/useInput';
import { SIGN_UP_REQUEST } from '../../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const SignupForm = () => {
    const dispatch = useDispatch();
    const { signUpLoading } = useSelector((state) => state.user);

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
            dispatch({
                type: SIGN_UP_REQUEST,
                data: { email, nickname, myMBTI, password }
            })
            console.log(email, password, myMBTI);
        },
        [password, passwordCheck, setPasswordError, term, setTermError, email, nickname, myMBTI],
    )

    return (
        <div className='signup-div'>
            <div className='signup-header'>
                <img className='signup-header-main-logo' src={'https://d3edqqquyf396f.cloudfront.net/basic/doodling-logo.png'} alt='????????????' />
                <p className='signup-header-desc'>???????????? MBTI ????????? ?????? ????????????<br />????????? ?????? ??????????????? ????????????<br />MBTI ???????????? ??????????????????.</p>
            </div>
            <Form onFinish={onSubmit} layout="vertical" className='signup-form'>
                <div>
                    <Form.Item htmlFor="user-email" required label="?????????">
                        <Input name="user-email" type="email" value={email} required onChange={onChangeEmail}/>
                    </Form.Item>
                </div>
                <div>
                    <Form.Item htmlFor="user-password" required label="????????????">
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword}/>
                    </Form.Item>
                </div>
                <div>
                    <Form.Item htmlFor="user-password-check" required label="???????????? ?????????">
                        <Input
                            name="user-password-check"
                            type="password"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                        />
                    </Form.Item>
                    {passwordError && <div className='sign-up-error-message-div'>??????????????? ???????????? ????????????.</div>}
                </div>
                <Row>
                    <Col span={12}>
                        <Form.Item htmlFor="user-nick" required label="?????????">
                            <Input name="user-nick" value={nickname} required onChange={onChangeNickname}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item htmlFor="user-nick" required label="??? MBTI">
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
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>(??????) ?????? ??? ????????? ?????????????????? ????????? ???????????????.</Checkbox>
                    {termError && <div className='sign-up-error-message-div'>???????????????????????? ?????? ??? ????????? ???????????????.</div>}
                </div>
                <div className='signup-form-button-group'>
                    <Button className='signup-form-button' htmlType="submit" >{signUpLoading ? <LoadingOutlined /> : "??????????????????"}</Button>
                </div>
            </Form>
        </div>
    );
};

export default SignupForm;