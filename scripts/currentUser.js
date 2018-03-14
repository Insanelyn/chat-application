let body2 = document.getElementsByTagName("body")[0];
let loggedIn2 = document.createElement("div");
let loggedInHeader2 = document.createElement("h3");
loggedInHeader2.innerHTML = "Current User";
loggedIn2.innerHTML = sessionStorage.getItem("loggedIn2");
body2.appendChild(loggedInHeader2);
body2.appendChild(loggedIn2);

$("#login-email-password").click((event) => {
    event.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.sessionStorage.setItem('loggedIn2', email);
            window.location.assign("../views/index.html");
        } )
    });