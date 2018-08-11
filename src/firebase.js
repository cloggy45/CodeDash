import * as firebase from "firebase";

import { FirebaseConfig } from "./firebase-config.js";

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const favouritesRef = databaseRef.child("favourites");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();