import { createStore,applyMiddleware } from 'redux';
import reducer from './modules/combineReducers';
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './modules/customer/saga/rootSaga'

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)