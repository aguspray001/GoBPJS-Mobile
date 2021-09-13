import {call, select} from 'redux-saga/effects';
import {showMessage} from '../../constant/alert';
import { secureGetData } from '../../constant/storage';
import {get, post} from './service';

const processRespData = resp => {
  const {data} = resp;
  if (parseInt(data.status) === 401) {
    showMessage('Terjadi kesalahan pada API interceptor', 'error');
    return false;
  } else if (parseInt(data.status) === 200) {
    return data.result;
  }
};

export function* doPost(payload) {
  try {
    const token = yield call(secureGetData,'token');

    // console.log("dopost:", token)
    const data = token !=='' ? {...payload, token} : payload;
    let resp = yield call(post, data);
    console.log("resp dopost:", resp)
    return yield call(processRespData, resp);
  } catch (e) {
    throw e;
  }
}

export function* doGet(payload) {
  try {
    const {token} = yield select(state => state.auth);
    const data = token ? {...payload, token} : payload;
    let resp = yield call(get, data);
    return yield call(processRespData, resp);
  } catch (e) {
    throw e;
  }
}
