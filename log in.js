import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTglZ945XFDVddR1TF8v7GA4kAE5Yuj20",
  authDomain: "test-login-198b2.firebaseapp.com",
  projectId: "test-login-198b2",
  storageBucket: "test-login-198b2.appspot.com",
  messagingSenderId: "350180023865",
  appId: "1:350180023865:web:815e6c81b9249d9472b7e8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Đăng ký thành công 🎉"))
    .catch(err => alert(err.message));
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Đăng nhập thành công ✅"))
    .catch(err => alert(err.message));
};

window.resetPassword = function () {
  const email = document.getElementById("email").value;

  sendPasswordResetEmail(auth, email)
    .then(() => alert("Đã gửi email đặt lại mật khẩu 📧"))
    .catch(err => alert(err.message));
};

window.loginGoogle = function () {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => alert("Login Google thành công 🎉"))
    .catch(err => alert(err.message));
};
