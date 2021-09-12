import {all} from 'redux-saga/effects';
import AuthSaga from './authSaga';
import RequestSaga from './requestSaga';

export default function* rootSaga(){
    yield all([
        AuthSaga(),
        RequestSaga(),
    ])
}
