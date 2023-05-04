const dotenv = require('dotenv');
dotenv.config();

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_MEASUREMENT_ID,
  measurementId: "G-MEASUREMENT_ID",
};

module.exports = {
  port: process.env.PORT,
  projectId: process.env.FIREBASE_PROJECT_ID,
  credentials: firebaseConfig,
  jwtSecret: process.env.JWT_SECRET,
  smsApiKey: process.env.BULKSMS_API_KEY,
  sendInBlueApiKey: process.env.SENDINBLUE_API_KEY,
};