let db = firebase.database();

let message = document.getElementById("message");
let button = document.getElementById("submit");
let output = document.getElementById("messageOutput");
let header = document.createElement("h2");
header.innerText = "Chat room 1";
let child = document.createElement("p");

button.addEventListener('click', function() {
    let currentDate = new Date();
    let date = currentDate.toLocaleDateString();
    let time = currentDate.toLocaleTimeString();

    db.ref('/messages').push({
        message: message.value,
        timeStamp: `${date} ${time}`
    });
    let messages = db.ref('/messages');
    output.innerHTML = "";
    messages.on('value', function(snapshot) {
        for(let message of Object.values(snapshot.val())) {
            child.innerHTML += `
            <div>${message.message}</div>
            <div>${message.timeStamp}</div>
        `;
        }
        output.appendChild(header);
        output.appendChild(child);
    });
    message.value = "";
});

/// Chat room 2

let dbRoom2 = firebase.database();

let messageRoom2 = document.getElementById("messageRoom2");
let buttonRoom2 = document.getElementById("submitRoom2");
let outputRoom2 = document.getElementById("messageOutputRoom2");
let headerRoom2 = document.createElement("h2");
headerRoom2.innerText = "Chat room 2";
let childRoom2 = document.createElement("p");

buttonRoom2.addEventListener('click', function() {
    let currentDate = new Date();
    let date = currentDate.toLocaleDateString();
    let time = currentDate.toLocaleTimeString();

    dbRoom2.ref('/messagesRoom2').push({
        message: messageRoom2.value,
        timeStamp: `${date} ${time}`
    });
    let messages = dbRoom2.ref('/messagesRoom2');
    outputRoom2.innerHTML = "";
    messages.on('value', function(snapshot) {
        for(let message of Object.values(snapshot.val())) {
            childRoom2.innerHTML += `
            <div>${message.message}</div>
            <div>${message.timeStamp}</div>
        `;
        }
        outputRoom2.appendChild(headerRoom2);
        outputRoom2.appendChild(childRoom2);
    });
    message2.value = "";
});


///// Chat room 3

let dbChatRoom3 = firebase.database();

let messageChatRoom3 = document.getElementById("messageRoom3");
let buttonChatRoom3 = document.getElementById("submitRoom3");
let outputChatRoom3 = document.getElementById("messageOutputRoom3");
let headerChatRoom3 = document.createElement("h2");
headerChatRoom3.innerText = "Chat room 3";
let childChatRoom3 = document.createElement("p");

buttonChatRoom3.addEventListener('click', function() {
    let currentDate = new Date();
    let date = currentDate.toLocaleDateString();
    let time = currentDate.toLocaleTimeString();

    dbChatRoom3.ref('/messagesRoom3').push({
        message: messageChatRoom3.value,
        timeStamp: `${date} ${time}`
    });
    let messages = dbChatRoom3.ref('/messagesRoom3');
    outputChatRoom3.innerHTML = "";
    messages.on('value', function(snapshot) {
        for(let message of Object.values(snapshot.val())) {
            childChatRoom3.innerHTML += `
            <div>${message.message}</div>
            <div>${message.timeStamp}</div>
        `;
        }
        outputChatRoom3.appendChild(headerChatRoom3);
        outputChatRoom3.appendChild(childChatRoom3);
    });
    messageChatRoom3.value = "";
});