 var firebaseConfig = {
     apiKey: "AIzaSyA0k-GA3RaJ1z60dTwVGi3t2uSLXOW6mBY",
     authDomain: "kwitter-1b976.firebaseapp.com",
     databaseURL: "https://kwitter-1b976.firebaseio.com",
     projectId: "kwitter-1b976",
     storageBucket: "kwitter-1b976.appspot.com",
     messagingSenderId: "753855729343",
     appId: "1:753855729343:web:72847896deb7516594000a",
     measurementId: "G-MD5TGJSDY6"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 //ADD YOUR FIREBASE LINKS


function addUser(){
    user_name = document.getElementById("userName").value;
    firebase.database().ref("/").child(user_name).update({
        key: "Purpose",
        purpose: "Add UserName"
    });
}