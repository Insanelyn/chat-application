



$("#login-email-password").click((event) => {
    event.preventDefault();
var email = $("#email").val();
var password = $("#password").val();

firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log("Error code", errorCode);
    var errorMessage = error.message;
    console.log("Error message", errorMessage);
    // ...
});
window.location.assign("views/chat.html")
});
