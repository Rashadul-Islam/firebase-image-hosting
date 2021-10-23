import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJTB6lGxrtEv_N29AQjdtfrHedO_Pe1iE",
  authDomain: "najj-technology.firebaseapp.com",
  projectId: "najj-technology",
  storageBucket: "najj-technology.appspot.com",
  messagingSenderId: "342837155670",
  appId: "1:342837155670:web:023a27a22737c6b71028f7"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };