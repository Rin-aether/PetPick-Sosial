// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBirw6PdG9mFxJayc_aERk2gTo-ZKGRzHk",
  authDomain: "pet-social-67b5b.firebaseapp.com",
  projectId: "pet-social-67b5b",
  storageBucket: "pet-social-67b5b.firebasestorage.app",
  messagingSenderId: "107476339615",
  appId: "1:107476339615:web:4191df74592b3024038baa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 認証オブジェクトを取得して他ファイルで使えるようにする
export const auth = getAuth(app);

//ログアウト
export const logout = () => signOut(auth);
