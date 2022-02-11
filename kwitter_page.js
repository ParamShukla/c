//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDWfBGYxSeX0OAAdev4nfjYkWV-4gTlxD0",
      authDomain: "kwitter-179eb.firebaseapp.com",
      databaseURL: "https://kwitter-179eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-179eb",
      storageBucket: "kwitter-179eb.appspot.com",
      messagingSenderId: "626134039480",
      appId: "1:626134039480:web:4a4c4f18e40d8a8e23ad4d"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     rn = localStorage.getItem("keyroom");
un = localStorage.getItem("keyuser");


function sd(){
msg = document.getElementById("msg").value ;
firebase.database().ref(rn).push({
      Name:un,
      message:msg,
      likes:0
});
document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+rn).on('value', function(snapshot) { document.getElementById("op").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
user = message_data['Name'];
ms = message_data['message'];
thumbsup = message_data['likes'];
displaynm = "<h4>"+user+"<img class='user_tick' src='tick.png'> </h4>" ;
diplaymsg = "<h3 class='message_h4'>"+ms+"<h3>";
displaytp = "<button class='btn btn-primary'id="+firebase_message_id+" value="+thumbsup+"onclick='updatelike(this.id)'>";
span = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+thumbsup+"</span> </button> <hr>"
row = displaynm+diplaymsg+displaytp+span;
document.getElementById("op").innerHTML+=row;

      } });  }); }
getData();


function logout(){
      window.location ="index.html";
      localStorage.removeItem("keyuser");
      localStorage.removeItem("keyroom");
}


function updatelike(firebase_message_id) {
console.log("clicked on like btn"+firebase_message_id);
button_id = firebase_message_id;
likes = document.getElementById(button_id).value ;
ul = Number(likes)+1;
console.log(ul);
firebase.database().ref(rn).child(firebase_message_id).update({
      likes:ul
});
}