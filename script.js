import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNGxfpKZDS5HB86pBRTvz93JLGfiA92yk",
  authDomain: "apl-official.firebaseapp.com",
  databaseURL: "https://apl-official-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "apl-official",
  storageBucket: "apl-official.firebasestorage.app",
  messagingSenderId: "941642140634",
  appId: "1:941642140634:web:d25f183cb1523fa6960ee3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const liveRef = ref(db, "liveMatch");

onValue(liveRef, (snapshot) => {
  const data = snapshot.val();
  if (!data) return;

  document.getElementById("matchTitle").innerText = data.matchTitle;
  document.getElementById("score").innerText = data.score;
  document.getElementById("target").innerText = "Target: " + data.target;
  document.getElementById("status").innerText = "Status: " + data.status;
});