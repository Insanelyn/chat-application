// Initialize Firebase
let config = {
    apiKey: "AIzaSyBqLrTAg2dKXC35Kn4LDs9WGimE2AXjN0E",
    authDomain: "chat-gruppen.firebaseapp.com",
    databaseURL: "https://chat-gruppen.firebaseio.com",
    projectId: "chat-gruppen",
    storageBucket: "chat-gruppen.appspot.com",
    messagingSenderId: "485397090215"
};
firebase.initializeApp(config);

let gathering = new Gathering(firebase.database(), 'Chat1');

// default/global gathering
let onlineUsers = new Gathering(firebase.database());

// Create an isolated space
let chatroom = new Gathering(firebase.database(), 'Special Name');

// Or Join with a unique id
// This will ensure distinct presense of a user, even if opened on multiple browser tab or device
gathering.join(firebase.auth().currentUser.uid);

// Also can set a display name (along with or without unique id)
gathering.join(null, 'Superman');
gathering.join(firebase.auth().currentUser.uid, 'Superman');


// When I am finished with the gathering, I may leave
// When browser is closed/refreshed, current user will automatically leave
gathering.leave();

// When all user's have left, or the meetup is over, we can remove the gathering
gathering.over();