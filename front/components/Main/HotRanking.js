import React, { Fragment, useCallback, useState } from 'react';
import { Tabs, Row, Col } from 'antd';
import CategoryHotPost from './CategoryHotPost';

const { TabPane } = Tabs;

const HotRanking = () => {
    const categories = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const onChangeCategory = useCallback((category) => {
        setSelectedCategory(category);
    }, []);

    return (
        <Fragment>
            <Row className='home-hot-ranking-title-div'>
                <button className='home-hot-ranking-title-btn'>Hot 게시글</button>
                <p className='home-hot-ranking-first-p'>1 바리스타가 내린 에스프레소</p>
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
            <Tabs className='home-category-under-tab' onChange={onChangeCategory} tabPosition='top' size='default' type='line' tabBarGutter={20} tabBarStyle={{height:'1.7rem'}} moreIcon={false}> 
                {categories.map((category) => (
                    <TabPane key={category} tab={category}>
                        <CategoryHotPost category={selectedCategory} />
                    </TabPane>
                ))}
            </Tabs>
        </Fragment>
    );
};

export default HotRanking;