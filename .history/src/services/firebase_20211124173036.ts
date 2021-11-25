import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBWOWInxMWhga9QwijHF2Mq9bQ6_MNk1-k",
  authDomain: "letmeask-7cad1.firebaseapp.com",
  databaseURL: "https://letmeask-7cad1-default-rtdb.firebaseio.com",
  projectId: "letmeask-7cad1",
  storageBucket: "letmeask-7cad1.appspot.com",
  messagingSenderId: "689454888321",
  appId: "1:689454888321:web:c22aca73574b04672ba480"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();