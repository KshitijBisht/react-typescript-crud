import { takeLatest, call,put } from "redux-saga/effects";
import {saveCustomers,loadCustomers} from '../actions'
import {getCustomers} from './api'
import {LOAD_CUSTOMERS_REQUEST} from '../types';

export function* loadCustomersWatcher(){
    yield takeLatest(LOAD_CUSTOMERS_REQUEST,loadCustomersFlow)
}

function* loadCustomersFlow(){
   const customers = yield call(getCustomers)
   console.log(`cust inside saga = = ${JSON.stringify(customers)}`)
   yield put(saveCustomers(customers))
}