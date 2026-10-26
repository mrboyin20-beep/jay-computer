
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrp094UwyRERt6JhYwG0TJeOpbDM_6skDg",
  authDomain: "ultra-chat-app-c690d.firebaseapp.com",
  projectId: "ultra-chat-app-c690d",
  storageBucket: "ultra-chat-app-c690d.firebasestorage.app",
  messagingSenderId: "662870367782",
  appId: "1:662870367782:web:c8868f6a48cd6afb1650e7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
