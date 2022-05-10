import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import '../css/basic.css';
import AppLayout from '../components/AppLayout';

const App = ({ Component }) => {
    return (
        <Fragment>
            <AppLayout>
                <Component />
            </AppLayout>
        </Fragment>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;