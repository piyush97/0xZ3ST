// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: "1:269111580559:web:48301e740393546cc05dfa",
  measurementId: "G-06MPS4XV34"
};

const app = initializeApp(firebaseConfig);
 export function signInUsers(){
      var email = document.getElementById('uemail').value;
      var pass = document.getElementById('upassword').value;
    //   app.auth().signInWithEmailAndPassword(email, pass)
    //      .catch(function(error) {
    //           // Handle Errors here.
    //          let errorCode = error.code;
    //          let errorMessage = error.MESSAGE;
    //          console.log(errorCode);
    //          console.log(errorMessage);
    //       });
    alert("Achyuth ",email);
  }
  //check if user is logged in or not
function checkIfLogedIn(){
    app.auth().onAuthStateChanged(function(user) {
        if (user) { // if the user is logged in
            console.log(user)
            var emailv =user.email;
            console.log("User is signed in. with email: "+ emailv);
            document.getElementById('loginButton').setAttribute('style','display: none;visibility: hidden;');
            document.getElementById('logoutButton').setAttribute('style','display: inline-block;visibility: visible;')
        } else { // if the user is not logged in
            console.log("No user is signed in.");
            document.getElementById('loginButton').setAttribute('style','display: none;visibility: visible;');
            document.getElementById('logoutButton').setAttribute('style','display: inline-block;visibility: hidden;')
        }
    });
}

// window.onload=function(){
//     checkIfLogedIn()
// }
export function logout(){
    app.auth().signOut();
    checkIfLogedIn()
}


