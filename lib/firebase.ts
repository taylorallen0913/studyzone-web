import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDv5_cSE0MlV_M1td1ijyzX0nOdB5dF8f0',
  authDomain: 'studyzone-2350e.firebaseapp.com',
  projectId: 'studyzone-2350e',
  storageBucket: 'studyzone-2350e.appspot.com',
  messagingSenderId: '1082674501010',
  appId: '1:1082674501010:web:da6ba2ed5f542200031d4b',
  measurementId: 'G-QJD0BGP937',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
