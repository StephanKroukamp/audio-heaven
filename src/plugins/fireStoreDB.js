import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBXfEiv-rSpiffqhsTB5KdVaUZF4AOZerA",
    authDomain: "audio-heaven.firebaseapp.com",
    projectId: "audio-heaven",
    storageBucket: "audio-heaven.appspot.com",
    messagingSenderId: "969900857463",
    appId: "1:969900857463:web:a702ca7104dd886b750e72",
    measurementId: "G-YSVETTD6PZ"
  })
  .firestore()

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

db.settings({ timestampsInSnapshots: true })