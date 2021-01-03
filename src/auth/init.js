import { FIREBASE_CONFIG } from './Config';
import firebase from 'firebase';

export const fb = firebase.initializeApp(FIREBASE_CONFIG);

export const db = fb.firestore();