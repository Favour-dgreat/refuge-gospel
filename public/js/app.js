// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADpScSB9jLqDaY51hMoMNNofGPWPX5za8",
    authDomain: "refuge-gospel.firebaseapp.com",
    databaseURL: "https://refuge-gospel.firebaseio.com",
    projectId: "refuge-gospel",
    storageBucket: "refuge-gospel.appspot.com",
    messagingSenderId: "505352555667",
    appId: "1:505352555667:web:db4869333bf37e41609166",
    measurementId: "G-7K0SS860YW"
  };

  firebase.initializeApp(config);
  
  var messagesRef = firebase.database().ref('recommendations');

  // Listen for form submit
  document.getElementById('testimonyForm').addEventListener('submit', submitForm);
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('recipient-name');
    var message = getInputVal('message-text');
  
    // Save message
    saveMessage(name, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('testimonyForm').reset();
  }
  
  
  
  // Save message to firebase
  function saveMessage(name, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      message:message
    });
  }
