
// KODSNUTTEN VI BEHÖVER
$("#login-email-password").click((event) => {
    event.preventDefault();
let email = $("#email").val();
let password = $("#password").val();

firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
    window.sessionStorage.setItem('loggedIn', email);
window.location.assign("views/chat.html");
})
.catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
    }
    if (errorCode === 'auth/user-not-found') {
        alert('User not found!.');
    }
    if (errorCode === 'auth/user-disabled') {
        alert('User disabled.');
    }
    if (errorCode === 'auth/invalid-email') {
        alert('Invalid email.');
    }
    else {
        alert(errorMessage);
    }
    console.log(error);

});
});

/*
$("#login-email-password").click((event) => {
    event.preventDefault();
var email = $("#email").val();
var password = $("#password").val();

firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        let currentUser = firebase.auth().currentUser;
        console.log(currentUser)
        sessionStorage.setItem("is online", currentUser.email);
        window.location.assign("views/chat.html");
    })
    */
  



