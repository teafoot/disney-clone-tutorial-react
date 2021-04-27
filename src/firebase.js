import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCiBZTNlL2ALj1vtLtxc0Aphq6QIoZiqXM",
    authDomain: "david-disneyplus-clone.firebaseapp.com",
    projectId: "david-disneyplus-clone",
    storageBucket: "david-disneyplus-clone.appspot.com",
    messagingSenderId: "776078234419",
    appId: "1:776078234419:web:c6038aa86f41561169a446"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
