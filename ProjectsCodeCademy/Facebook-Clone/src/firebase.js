import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// below SDK Config code, copied from: https://console.firebase.google.com/u/0/project/facebook-clone-rez/settings/general/web:Mjg0NGY2ZjMtNzg5MS00YzQ3LWJkOGEtOTJhYmI4OWYyNjNi
const firebaseConfig = {
  apiKey: "AIzaSyAsD16h8nR-X7JHwrsAo-xTnigeACwvULY",
  authDomain: "facebook-clone-rez.firebaseapp.com",
  projectId: "facebook-clone-rez",
  storageBucket: "facebook-clone-rez.appspot.com",
  messagingSenderId: "856893351503",
  appId: "1:856893351503:web:140788cb6a4e1532032c3a",
  measurementId: "G-MZHBZKBP4H"
};


const firebaseApp = firebase.initializeApp(firebaseConfig); //Connect to the firebase server
const db = firebaseApp.firestore();// connect ot the firebase database
const auth = firebase.auth();// connect to the firebase authentication
const provider = new firebase.auth.GoogleAuthProvider();// connect to the google authentication

export { auth, provider };
export default db; // export the database for use in other components


