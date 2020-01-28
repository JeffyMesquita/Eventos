import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAlkOnsRGwVJQ_ilxk7KbwNImx7BRNbkOM",
  authDomain: "eventos-895d9.firebaseapp.com",
  databaseURL: "https://eventos-895d9.firebaseio.com",
  projectId: "eventos-895d9",
  storageBucket: "eventos-895d9.appspot.com",
  messagingSenderId: "977207944735",
  appId: "1:977207944735:web:bd9865b14e615e3878d72a",
  measurementId: "G-E7RX499FWN"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
firebase.analytics();