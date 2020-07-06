import {fork} from 'redux-saga/effects';
import {loadCustomersWatcher} from './loadCustomersSaga';
import {saveCustomersWatcher} from './saveCustomersSaga';

export function* rootSaga(){
    yield fork(loadCustomersWatcher)
    yield fork(saveCustomersWatcher)
} 