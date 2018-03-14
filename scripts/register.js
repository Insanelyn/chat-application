

$("#regBtn").click((event) => {
    event.preventDefault();
let email = $("#email").val();
let password = $("#password").val();
firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    })
});
$("#formReg").trigger('reset');

