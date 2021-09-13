import {all, call, fork, put, select, takeEvery} from 'redux-saga/effects';
import {showMessage} from '../../constant/alert';
import {doPost} from '../api/apiInterceptor';
import Decoder from 'jwt-decode';
import {secureStoreData} from '../../constant/storage';
import {BaseUrl} from '../../constant/url';

const signinUrl = `${BaseUrl}/login`;
const signupUrl = `${BaseUrl}/register`;

function* doSignIn({payload}) {
  // destructuring
  const {email, password, navigation} = payload;
  //   show loader
  yield put({type: 'show-loader'});
  try {
    // call dopost and store payload to get resp
    const resp = yield call(doPost, {
      data: {email: email, password: password},
      url: signinUrl,
    });
    // processing response from doPost
    const token = resp?.token;
    if (token) {
      // set token to local storage
      yield call(secureStoreData, 'token', token);
      //   decode
      const user = Decoder(token);
      // dispatch action to login-success reducer
      yield put({
        type: 'signin-success',
        payload: {user, token: token},
      });
      yield showMessage('Login Berhasil', 'success');
      yield navigation.reset({index: 0, routes: [{name: 'Home'}]});
    }
  } catch (error) {
    yield showMessage('Terjadi kesalahan saat login', 'error');
  }
  yield put({type: 'hide-loader'});
}

function* doSignUp({payload}) {
  const {email, password, name, ttl, nik, no_bpjs, navigation} = payload;
  try {
    yield put({type: 'show-loader'});

    const resp = yield call(doPost, {
      data: {
        email,
        password,
        name,
        ttl,
        nik,
        no_bpjs,
        role_id: 4, //role peserta
        organization_id: 4, //waluyo
        status: 1, //aktif
      },
      url: signupUrl,
    });
    console.log('resp regis:', resp);

    if (resp) {
      yield showMessage('Register berhasil', 'success');
      navigation.replace('Login');
      yield put({type: 'hide-loader'});
    }
  } catch (error) {
    yield showMessage('Terjadi kesalahan saat registrasi', 'error');
    yield put({type: 'hide-loader'});
  }
}

function* doSignOut({payload}) {
  const {navigation} = payload;
  console.log('do signout', navigation);
  const {token} = yield select(state => state.authReducer);
  console.log('logout:', token);
  if (token) {
    yield call(secureStoreData, 'token', '');
    yield put({type: 'signout-success'});
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  } else {
    console.log('logout tidak ada token');
    yield call(secureStoreData, 'token', '');
    yield put({type: 'signout-success'});
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  }
}

// root saga
export function* login() {
  yield takeEvery('sign-in', doSignIn);
}
export function* logout() {
  yield takeEvery('sign-out', doSignOut);
}
export function* register() {
  yield takeEvery('sign-up', doSignUp);
}
export default function* rootSaga() {
  yield all([fork(login), fork(logout), fork(register)]);
}
