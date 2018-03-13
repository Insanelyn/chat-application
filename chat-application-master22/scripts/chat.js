
$(function(){

	var objFirebase = new Firebase("https://chat-gruppen.firebaseio.com/");

	$('#btnSend').click(clickShipping);
	$('#imgAvatar').attr('src', sessionStorage.getItem('profileImageURL'));
	$('#userName').val(sessionStorage.getItem('username'));

	$('#imgAvatar').click(clickSalir);

    function clickSalir(){
    	sessionStorage.removeItem('token');
    	window.location.href = "../index.html";
    }

	function clickShipping(){
		var name = $('#userName').val();
		var message = $('#sendBoxMessage').val();

		$('#sendBoxMessage').val('');

		objFirebase.push(
			{
  				autor: name,
    			message: message,
    			image: sessionStorage.getItem('profileImageURL')
  			}
		);

	}

	objFirebase.on("child_added", function(snapshot){
		var values = snapshot.val();
		var style = "";
		if (values.autor === $('#userName').val()) { style = 'me'}
		$('.boxMessageTimeline').prepend(getTemplate(values.autor, values.message, style, values.image));
	});

	function getTemplate(autor, message, style, image){
		var template = '<div role="alert" class="alert alert-info ' +
               style +
               '">' +
               '<figure class"imgChat"> <img id="imgChatAvatar" src="http://simpleicon.com/wp-content/uploads/user1.svg"
               '" alt="Avatar"></figure>' +
               '<b>' + autor + '</b>' +
               '<p>' + message + '</p>' +
               '</div>';

		return template;
	}

});