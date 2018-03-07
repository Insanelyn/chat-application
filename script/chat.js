
$(function(){

	var objFirebase = new Firebase("https://chat-gruppen.firebaseio.com/");

	$('#btnSend').click(clickEnvio);
	$('#imgAvatar').attr('src', sessionStorage.getItem('profileImageURL'));
	$('#userName').val(sessionStorage.getItem('username'));

	$('#imgAvatar').click(clickSalir);

    function clickSalir(){
    	sessionStorage.removeItem('token');
    	window.location.href = "../index.html";
    }

	function clickEnvio(){
		var nombre = $('#userName').val();
		var mensaje = $('#sendBoxMessage').val();

		$('#sendBoxMessage').val('');

		objFirebase.push(
			{
  				autor: nombre,
    			mensaje: mensaje,
    			image: sessionStorage.getItem('profileImageURL')
  			}
		);

	}

	objFirebase.on("child_added", function(snapshot){
		var values = snapshot.val();
		var estilo = "";
		if (values.autor === $('#userName').val()) { estilo = 'me'}
		$('.cont-mensaje-timeline').prepend(getTemplate(values.autor, values.mensaje, estilo, values.image));
	});

	function getTemplate(autor, mensaje, estilo, imagen){
		var plantilla = '<div class="msg ' +
               estilo +
               '">' +
               '<figure class"imgChat"> <img id="imgChatAvatar" src="'+ imagen +
               '" alt="Avatar"></figure>' +
               '<b>' + autor + '</b>' +
               '<p>' + mensaje + '</p>' +
               '</div>';

		return plantilla;
	}

});