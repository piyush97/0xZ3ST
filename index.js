// Firebase Configuration will be provided by Piyush
/**
 * Initialize Firebase with the config.
 */
var firebaseConfig = {
  apiKey: "AIzaSyDkm-YnLfscDAm9XbDhOKiAgLHJVZXE5k0",
  authDomain: "xz3st-piyush97.firebaseapp.com",
  projectId: "xz3st-piyush97",
  storageBucket: "xz3st-piyush97.appspot.com",
  messagingSenderId: "400768516912",
  appId: "1:400768516912:web:00a54a09f6be4ac62cbef5",
  measurementId: "G-C0979WFBGT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const db = firebase.firestore();

const auth = firebase.auth();
const database = firebase.database();
const provider = new firebase.auth.GoogleAuthProvider();

/**
 * @description Function used to Register the user
 * @param {string} email
 * @param {string} password
 * @param {string} full_name
 * @returns {void}
 * @author Piyush
 * @since 1.0
 * @version 1.0
 */
function register() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  full_name = document.getElementById("full_name").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    Swal.fire({
      icon: "error",
      title: "Email or Password is Outta Line!!",
    });
    return;
    // Don't continue running the code
  }
  if (validate_field(full_name) == false) {
    Swal.fire({
      icon: "error",
      title: "One or More Extra Fields is Outta Line!!",
    });
    return;
  }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        full_name: full_name,
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).set(user_data);
      // saving data in to firestore
      db.collection("Udata").add({
        email,
        full_name,
        level: 0,
      });

      // DOne
      Swal.fire({
        icon: "success",
        title: "User created",
      });
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      Swal.fire({
        icon: "error",
        title: error_message,
      });
    });
}

/**
 * @description Function used to login existing user in to the app
 * @param {string} email
 * @param {string} password
 * @returns {void}
 * @author Piyush
 * @since 1.0
 * @version 1.0
 */
function login() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    Swal.fire({
      icon: "error",
      title: "Email or Password is Outta Line!!",
    });
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);

      // Done
      Swal.fire({
        icon: "success",
        title: "User Logged In!!",
      });
    })
    .then(function () {
      window.location.href = "game.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}
function signInWithGoogle() {
  auth
    .signInWithPopup(provider)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);

      // DOne
      Swal.fire({
        icon: "success",
        title: "User Logged in successfully",
      });
    })
    .then(function () {
      window.location.href = "game.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      Swal.fire({
        icon: "error",
        title: error_message,
      });
    });
}

/**
 * @description This function validates email
 * @param {*} email
 * @returns {boolean} true or false based on the validation of email
 * @author Piyush
 * @since 1.0
 * @version 1.0
 */
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

/**
 * @description This function validates password length
 * @param {*} password
 * @returns  {boolean} true or false based on the validation of password
 */
function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}
/**
 * @description This function validates all the fields in the form
 * @param {*} field
 * @returns boolean true or false based on the validation of field
 */
function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
