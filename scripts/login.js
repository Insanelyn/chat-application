
// KODSNUTTEN VI BEHÖVER -- Detta visar endast för användaren att du är inloggad.
let users = JSON.parse(localStorage.getItem("users")) || [];
$("#login-email-password").click((event) => {
    event.preventDefault();
let email = $("#email").val();
let password = $("#password").val();

firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        let loggedInUser = { email: email, password: password };
        users.push(loggedInUser);
        localStorage.setItem('users', JSON.stringify(users));
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


  



