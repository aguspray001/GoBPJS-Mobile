import {all} from 'redux-saga/effects';
import AuthSaga from './authSaga';
import RequestSaga from './requestSaga';
import UserSaga from './userSaga';

export default function* rootSaga(){
    yield all([
        AuthSaga(),
        RequestSaga(),
        UserSaga()
    ])
}
