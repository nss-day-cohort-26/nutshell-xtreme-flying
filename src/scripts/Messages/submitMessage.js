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
            ajax.getUser(userId).then(function (response) {
                mess.textContent = `${response.name}: ${message}`
                mess.className += `message ${userId}`
                $("<button>").attr('type', 'button').attr('class', 'edit-btn').text("Edit").appendTo(mess); 
                editMess(mess); 
            })   




            $("#message-box").append(mess)
            let userIdNum = parseInt(userId);
            ajax.postMessage(message, userIdNum).then(function (response) {
                // console.log("this is the message the is being passed to the function:", mess)
                 mess.id = `${response.id}`
                })

        }
        $("#message-input").val("")
        makeMess(message, 2); //change to work with current user
 
    })
}

module.exports = submitMess
