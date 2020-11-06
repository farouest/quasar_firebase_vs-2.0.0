import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyDiZyZmrw75g6osNvTgLz9v2rfZE5wKA0E",
  authDomain: "bolomig-glazen-041129.firebaseapp.com",
  databaseURL: "https://bolomig-glazen-041129.firebaseio.com",
  projectId: "bolomig-glazen-041129",
  storageBucket: "bolomig-glazen-041129.appspot.com",
  messagingSenderId: "834123359237",
  appId: "1:834123359237:web:7d7f707c6ba7ce1e19286c"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }