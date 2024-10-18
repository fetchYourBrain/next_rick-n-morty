import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm6djlCzUgd3MMRTCK-iGtXrb7LsRGZIA",
  authDomain: "rick-and-morty-auth-1fc80.firebaseapp.com",
  projectId: "rick-and-morty-auth-1fc80",
  storageBucket: "rick-and-morty-auth-1fc80.appspot.com",
  messagingSenderId: "870679977411",
  appId: "1:870679977411:web:58e1ec2e6f55c1ef0ab176",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { app, auth };
