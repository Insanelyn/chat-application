var amOnline = new Firebase('https://chat-gruppen.firebaseio.com/.info/connected');
var userRef = new Firebase('https://chat-gruppen.firebaseio.com/presence/' + userid);
amOnline.on('value', function(snapshot) {
    if (snapshot.val()) {
        userRef.onDisconnect().remove();
        userRef.set(true);
    }
});