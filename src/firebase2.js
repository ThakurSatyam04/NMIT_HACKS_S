import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWxL8rtcrXX2gnsv_SLEsyO_IMDxK1LIY",
  authDomain: "sponsorform-e9033.firebaseapp.com",
  projectId: "sponsorform-e9033",
  storageBucket: "sponsorform-e9033.appspot.com",
  messagingSenderId: "992429182730",
  appId: "1:992429182730:web:0d80831eae4704740af4f3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;