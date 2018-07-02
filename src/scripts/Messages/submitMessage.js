const $ = require("jquery");
const ajax = require("./../ajaxCalls.js")
const currentUser = require("./currentUser")



const submitMess = function () {

    document.querySelector("#message-btn").addEventListener("click", function () {
        let message = $("#message-input").val()


        makeMess = (message, userId) => {
            let mess = document.createElement("p")
            mess.textContent = message
            mess.className += `message ${userId}`
            $("#message-box").append(mess)
            let userIdNum = parseInt(userId);
            ajax.postMessage(message, userIdNum)

        }
        $("#message-input").val("")
        makeMess(message, currentUser());

    })
}

module.exports = submitMess
