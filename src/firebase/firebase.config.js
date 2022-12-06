// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyByxHhlGiTfZmqV0UpUxlfycwF66fm6BOw",
//     authDomain: "learning-school-client.firebaseapp.com",
//     projectId: "learning-school-client",
//     storageBucket: "learning-school-client.appspot.com",
//     messagingSenderId: "969772773867",
//     appId: "1:969772773867:web:3a659cc9e10b1d1d1ee9ae"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;