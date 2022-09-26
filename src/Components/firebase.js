import firebase from  'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
 
const firebaseConfig = {
    apiKey: "AIzaSyC8ljLJWBk2OtL3yiumPKcFYvextvYG1z0",
    authDomain: "netflix-clone-ef816.firebaseapp.com",
    projectId: "netflix-clone-ef816",
    storageBucket: "netflix-clone-ef816.appspot.com",
    messagingSenderId: "994207551973",
    appId: "1:994207551973:web:b71519cddf6b6618d55f0c"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();

  export { auth };
  export default db;