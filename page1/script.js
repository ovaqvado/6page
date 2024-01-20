function addMessage(author, message) {
    var messageList = document.getElementById("messageList");
    var newMessage = document.createElement("li");
    newMessage.innerHTML = "-" + "<b>" + author + ":</b> " + message;
    messageList.appendChild(newMessage);
}

document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var author = document.getElementById("author").value;
    var message = document.getElementById("message").value;
    addMessage(author, message);
    document.getElementById("messageForm").reset();
});