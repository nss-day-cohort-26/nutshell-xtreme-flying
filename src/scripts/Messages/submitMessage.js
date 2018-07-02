const $ = require("jquery")

document.querySelector("#message-btn").addEventListener("click", function () {
let message = $("#message-input").val()

makeMess = (message, userName) =>  {
    let mess = document.createElement("p")
    mess.textContent = message
    mess.className += "message" 

    // if (userName) {
    //     mess.className += "user"
    // } else {
    //     mess.className += "friend"
    // }
    $("#message-box").append(mess)
}
makeMess(message);
// pushMessage(message, userId)
});
