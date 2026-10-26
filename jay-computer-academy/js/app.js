
import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

export function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[c]);
}

export function requireStudent(callback) {
  return onAuthStateChanged(auth, async user => {
    if (!user) {
      window.location.replace("index.html");
      return;
    }

    try {
      const ref = doc(db, "users", user.uid);
      const snapshot = await getDoc(ref);

      if (!snapshot.exists()) {
        document.body.innerHTML = `
          <main class="wrap">
            <section class="panel">
              <h2>Student Profile नहीं मिली</h2>
              <p>Admin से अपनी प्रोफाइल बनवाएँ।</p>
              <button id="goLogin">Login पर वापस जाएँ</button>
            </section>
          </main>`;

        document.querySelector("#goLogin").onclick = async () => {
          await signOut(auth);
          window.location.href = "index.html";
        };
        return;
      }

      const profile = snapshot.data();

      if (profile.status === "disabled") {
        document.body.innerHTML = `
          <main class="wrap">
            <section class="panel">
              <h2>आपका अकाउंट बंद है।</h2>
              <p>कृपया Academy Admin से संपर्क करें।</p>
            </section>
          </main>`;
        return;
      }

      callback(user, profile);
    } catch (error) {
      document.body.innerHTML = `
        <main class="wrap">
          <section class="panel error">
            डेटा लोड नहीं हुआ। Firebase सेटअप और Security Rules जाँचें।
            <p>${escapeHtml(error.message)}</p>
          </section>
        </main>`;
    }
  });
}

export function header(profile) {
  return `
    <header class="top">
      <a class="brand" href="dashboard.html">JAY COMPUTER ACADEMY</a>
      <nav>
        <a href="dashboard.html">Dashboard</a>
        <a href="courses.html">Courses</a>
        <a href="progress.html">Progress</a>
        <button id="logoutBtn" class="outline">Logout</button>
      </nav>
    </header>`;
}

export async function logout() {
  await signOut(auth);
  window.location.href = "index.html";
}

export function bindLogout() {
  document.querySelector("#logoutBtn")
    ?.addEventListener("click", logout);
}
