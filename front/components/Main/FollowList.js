import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'antd';

const FollowList = ({ userList }) => {
    
    return (
        <List
            className='follow-list-form'
            itemLayout="horizontal"
            dataSource={userList}
            renderItem={(item) => (
                <List.Item actions={[<Button>팔로우</Button>]}>
                    <List.Item.Meta
                        title={<p>{item.nickname} <span className='follow-list-user-type'>{item.type}</span></p>}
                    />
                </List.Item>
            )}
        />
    );
};

FollowList.propTypes = {
    userList: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number,
        nickname: PropTypes.string,
        type: PropTypes.string,
    }))
};

export default FollowList;