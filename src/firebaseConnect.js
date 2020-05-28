
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyC_dtrIhjzmviMkAEGb4J3575eBmCLVH-Y",
    authDomain: "notereactjs-64536.firebaseapp.com",
    databaseURL: "https://notereactjs-64536.firebaseio.com",
    projectId: "notereactjs-64536",
    storageBucket: "notereactjs-64536.appspot.com",
    messagingSenderId: "62026741961",
    appId: "1:62026741961:web:af8db3e538cafc3860b518",
    measurementId: "G-J6YNCE05WE"
  };
  // Initialize Firebase
 
 // firebase.analytics();
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote/');

// var data = firebase.database().ref( 'dataForNote/');
//     data.once('value').then(function(snapshot){
//         console.log(snapshot.val());
//     })
// data.set({
//     id: 1,
//     title : " sửa id 1",
//     noteContent: " yeahh"
// })