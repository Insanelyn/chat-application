

// KODSNUTTEN VI BEHÖVER -- Detta visar endast för användaren att du är inloggad.
let users = JSON.parse(localStorage.getItem("users")) || [];
let body = document.getElementsByTagName("body")[0];
let loggedIn = document.getElementById("matilda");
let loggedInHeader = document.createElement("h3");
loggedInHeader.innerHTML = "Users";
loggedInHeader.setAttribute("id", "loggedInHeader");
body.appendChild(loggedInHeader);

for (let user of users ){
	let loggedInUser = document.createElement("p");
	loggedIn.setAttribute("id", "loggedIn")
	loggedInUser.innerHTML = user.email;
	loggedIn.appendChild(loggedInUser);

}

body.appendChild(loggedIn);


$(function(){

	let objFirebase = new Firebase("https://chat-gruppen.firebaseio.com/");
	let isOnline = sessionStorage.getItem("isOnline");
	if(isOnline === "isOnline") {
		//list user in users online field
	}
	console.log("is online", isOnline)
	$('#btnSend').click(clickShipping);
	// $('#imgAvatar').attr('src', sessionStorage.getItem('profileImageURL'));
	$('#userName').val(sessionStorage.getItem('username'));

	// $('#imgAvatar').click(clickSalir);

    function clickSalir(){
    	sessionStorage.removeItem('token');
    	window.location.href = "../index.html";
    }

	function clickShipping(){
		let name = $('#userName').val();
		let message = $('#sendBoxMessage').val();

		$('#sendBoxMessage').val('');

		objFirebase.push(
			{
  				author: name,
    			message: message,
    			image:"data:image/png;base64,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"
  			}
		);

	}

	objFirebase.on("child_added", function(snapshot){
		let values = snapshot.val();
		let style = "";
		if (values.author === $('#userName').val()) { style = 'me'}
		$('.boxMessageTimeline').prepend(getTemplate(values.author, values.message, style, values.image));
	});

	function getTemplate(author, message, style, image){
		let template = '<div role="alert" class="alert alert-info ' +
               style +
               '">' +
               '<img id="imgChatAvatar" src="http://simpleicon.com/wp-content/uploads/user1.svg" height="30px" width="30px" ='+ image
                +
               '<b>' + author + '</b>' +
               '<p>' + message + '</p>' +
               '</div>';

		return template;
	}

});