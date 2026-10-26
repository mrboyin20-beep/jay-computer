
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrp094UwyRERt6JhYg0TJeOpbDM_6skDg",
  authDomain: "ultra-chat-app-c690d.firebaseapp.com",
  projectId: "ultra-chat-app-c690d",
  storageBucket: "ultra-chat-app-c690d.firebasestorage.app",
  messagingSenderId: "662870367782",
  appId: "1:662870367782:web:ec1822465ad5f7e81650e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Keep the user signed in across page reloads
const authReady = setPersistence(auth, browserLocalPersistence);

// Database
const db = getFirestore(app);

export { app, auth, db, authReady };
