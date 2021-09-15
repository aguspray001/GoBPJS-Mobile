import {all, call, fork, put, select, takeEvery} from 'redux-saga/effects';
import {showMessage} from '../../constant/alert';
import {doPost} from '../api/apiInterceptor';
import Decoder from 'jwt-decode';
import {secureStoreData} from '../../constant/storage';
import {BaseUrl} from '../../constant/url';

const userUpdateUrl = `${BaseUrl}/user/update`;

function* doUpdateUser({payload}) {
  const {id, organization_id} = payload;
  try {
    yield put({type: 'show-loader'});

    const resp = yield call(doPost, {
      data: {
        id:id,
        organization_id: organization_id,
      },
      url: userUpdateUrl,
    });
    console.log('resp user update:', resp);

    if (resp) {
      yield showMessage('Update User berhasil', 'success');
      yield put({type: 'hide-loader'});
    }
  } catch (error) {
    yield showMessage('Terjadi kesalahan saat update user', 'error');
    yield put({type: 'hide-loader'});
  }
}

// root saga
export function* updateUser() {
  yield takeEvery('user-update', doUpdateUser);
}

export default function* rootSaga() {
  yield all([fork(updateUser),]);
}
