require("firebase/auth");
require('../config/config');
const firebase = require("firebase");
const admin = require('firebase-admin')


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID 
};

admin.initializeApp(firebaseConfig);
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = {
  firebase,
  admin
}

  