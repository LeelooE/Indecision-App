import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCUAG2aIDEElhYNVMK-_Emn9XiguX0dBrA",
  authDomain: "indecision-app-42a85.firebaseapp.com",
  databaseURL: "https://indecision-app-42a85.firebaseio.com",
  projectId: "indecision-app-42a85",
  storageBucket: "indecision-app-42a85.appspot.com",
  messagingSenderId: "330989276857"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };
