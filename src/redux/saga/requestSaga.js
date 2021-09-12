import {all, call, fork, put, select, takeEvery} from 'redux-saga/effects';
import {showMessage} from '../../constant/alert';
import {doPost} from '../api/apiInterceptor';
import Decoder from 'jwt-decode';
import {secureStoreData} from '../../constant/storage';
import {BaseUrl} from '../../constant/url';

const getRequest = `${BaseUrl}/request/list`;

function* doGetRequest({payload}) {
  try {
    yield put({type: 'show-loader'});
    const resp = yield call(doPost, {url: getRequest});
    console.log("req",resp)
    yield put({type:'get-request-claim', payload:resp})
    yield put({type: 'hide-loader'});
  } catch (error) {
    yield showMessage('Terjadi kesalahan', 'error');
    yield put({type: 'hide-loader'});
  }
}

// root saga
export function* requestList() {
  yield takeEvery('request-get', doGetRequest);
}
export default function* rootSaga() {
  yield all([fork(requestList)]);
}
