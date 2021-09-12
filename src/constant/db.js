import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCrpPUWIoQUP-b-JKbQ3BKu3mge956_904',
  authDomain: 'gobpjs-26036.firebaseapp.com',
  databaseURL:
    'https://gobpjs-26036-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'gobpjs-26036',
  storageBucket: 'gobpjs-26036.appspot.com',
  messagingSenderId: '1050899594617',
  appId: '1:1050899594617:web:da28dc03546532eca4c3a8',
  measurementId: 'G-RFC5WGMY8L',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const fb = firebase;

export default fb;
