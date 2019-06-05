import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    authDomain: "githubblog-397f2.firebaseapp.com",
    databaseURL: "https://githubblog-397f2.firebaseio.com",
    projectId: "githubblog-397f2",
    storageBucket: "githubblog-397f2.appspot.com",
    messagingSenderId: "688719989122",
    appId: "1:688719989122:web:27a88a8f9fd0fe4e"
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}