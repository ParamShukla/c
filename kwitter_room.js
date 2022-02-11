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
//ADD YOUR FIREBASE LINKS HERE
  ok = localStorage.getItem("keyuser");
  document.getElementById("name").innerHTML="Welcome "+ok+" !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("op").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name is "+Room_names);
row = "<div class='form-group room_name'id="+Room_names+" onclick = 'redirectToroomname(this.id)'> # "+Room_names+"</div> <hr> ";
document.getElementById("op").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("keyroom",name);
      window.location = "kwitter_page.html";
      
}
function logout(){
      window.location ="index.html";
      localStorage.removeItem("keyuser");
      localStorage.removeItem("keyroom");
}

function addroom() {
rn = document.getElementById("addroom").value ;
localStorage.setItem("keyroom",rn);
firebase.database().ref("/").child(rn).update({
      purpose:"Adding room name"
}); 
window.location="kwitter_page.html";

}    