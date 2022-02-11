function adduser() {
  user = document.getElementById("user").value ;
    localStorage.setItem("keyuser",user);
    window.location ="kwitter_room.html";
        
  
}