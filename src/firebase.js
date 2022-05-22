
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfkreddN0Gzay4XoHOGBd-gxdi_Bdp9Dw",
    authDomain: "disney-clone-722c7.firebaseapp.com",
    projectId: "disney-clone-722c7",
    storageBucket: "disney-clone-722c7.appspot.com",
    messagingSenderId: "396970641764",
    appId: "1:396970641764:web:85f79f40572bad02645271"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;