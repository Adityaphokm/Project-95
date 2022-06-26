var firebaseConfig = {
      apiKey: "AIzaSyAo8-wII5rIJLS1vEvZdwfi4DFxfqh8EmM",
      authDomain: "let-chat-web-app-66788.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-66788-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-66788",
      storageBucket: "let-chat-web-app-66788.appspot.com",
      messagingSenderId: "673920356298",
      appId: "1:673920356298:web:bf3f21e048d62503af4933",
      measurementId: "G-SDVC0MY1NJ"
    };

 firebase.initializeApp(firebaseConfig);
  user_name = document.getElementById("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
  
  function addRoom(){
        room_name = document.getElementById("room_name").value;
        localStorage.setItem("room_name" , room_name);
        firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
        window.location = "Let-Chat-Web-App_message.html";
  }
  
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name -" + Room_names);
row = "<div class = 'room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "Let-Chat-Web-App_message.html";
}
