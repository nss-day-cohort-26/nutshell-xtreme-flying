//William Kimball 2018

const $ = require("jquery");
const ajax = require("./../ajaxCalls.js")
const editMess = require("./editMessage")
// const currentUser = require("./currentUser")



const submitMess = function () {

    document.querySelector("#message-btn").addEventListener("click", function () {
        let message = $("#message-input").val()

        makeMess = (message, userId) => {
            let mess = document.createElement("p")
            mess.textContent = `${message}`
            mess.className += `message ${userId}`
            $("<button>").attr('type', 'button').attr('class', 'edit-btn').text("Edit").appendTo(mess);
            
            ajax.getUser(userId).then(function (response) {
                mess.id = `${response.name}--${response.id}`
                console.log(mess)
            })
            $("#message-box").append(mess)
            let userIdNum = parseInt(userId);
            ajax.postMessage(message, userIdNum).then(function (response) {
                console.log(response.id) 
                editMess(response.id);
            })

        }
        $("#message-input").val("")
        makeMess(message, 1); //change to work with current user
        scrollBottom();
    })
}

module.exports = submitMess
