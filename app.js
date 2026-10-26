
import { auth, db, authReady } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import {
  doc, getDoc
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

export function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[char]);
}

export async function getCurrentProfile() {
  await authReady;

  if (!auth.currentUser) {
    window.location.replace("./login.html");
    return null;
  }

  const ref = doc(db, "users", auth.currentUser.uid);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    await signOut(auth);
    window.location.replace("./login.html");
    return null;
  }

  const profile = snapshot.data();

  if (profile.status !== "active" || profile.role !== "student") {
    if (profile.role === "admin" && profile.status === "active") {
      window.location.replace("./students.html");
      return null;
    }

    await signOut(auth);
    window.location.replace("./login.html");
    return null;
  }

  return { user: auth.currentUser, profile };
}

export async function requireStudent() {
  return getCurrentProfile();
}

export function setupHeader(profile) {
  const name = document.getElementById("studentName");
  if (name) {
    name.textContent =
      profile?.name || auth.currentUser?.displayName || "स्टूडेंट";
  }

  const logout = document.getElementById("logoutButton");
  if (logout) {
    logout.addEventListener("click", async () => {
      await signOut(auth);
      window.location.replace("./login.html");
    });
  }
}

export function watchLoginState() {
  onAuthStateChanged(auth, user => {
    const status = document.getElementById("loginStatus");
    if (status) {
      status.textContent = user
        ? "लॉगिन किया हुआ है"
        : "लॉगिन नहीं किया गया है";
    }
  });
}
