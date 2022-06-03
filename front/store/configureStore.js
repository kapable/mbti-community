import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
// import rootSaga from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';

const configureStore = () => {
    // const sagaMiddleware = createSagaMiddleware();
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
    // store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;