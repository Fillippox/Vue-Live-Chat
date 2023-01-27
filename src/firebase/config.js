import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9aXWQYybyLygnytcVVwHs0oDuKCJ7kUI",
  authDomain: "vue-project-53f81.firebaseapp.com",
  projectId: "vue-project-53f81",
  storageBucket: "vue-project-53f81.appspot.com",
  messagingSenderId: "500881800265",
  appId: "1:500881800265:web:b3a6ba3ee474dada01d398"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
//firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export{projectAuth, projectFireStore, timestamp}
export default firebase.firestore()