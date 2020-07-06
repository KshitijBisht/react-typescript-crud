import { takeLatest, call } from "redux-saga/effects";
import {SAVE_CUSTOMERS_REQUEST} from '../types'
import {postCustomers} from './api'


export function* saveCustomersWatcher(){
    yield takeLatest(SAVE_CUSTOMERS_REQUEST,saveCustomersFlow)
}

function* saveCustomersFlow(action){
 yield call(postCustomers,action.payload)
}