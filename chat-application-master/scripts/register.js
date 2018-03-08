

$("#email-password-create").click((event) => {
    event.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        console.log("Error code", errorCode);
        let errorMessage = error.message;
        console.log("Error message", errorMessage);
        // ...
    });
});