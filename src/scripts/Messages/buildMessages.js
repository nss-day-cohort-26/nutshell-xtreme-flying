//William Kimball 2018

const $ = require("jquery")
const ajax = require("./../ajaxCalls.js")
const subMess = require("./submitMessage")
// const currentUser = require("./currentUser")
let currentUse = 1;
const buildMessageArticle = function () {

    const $messageArticle = document.createElement("article")
    $messageArticle.id = "message-article";

    $('<section>').attr('id', 'message-box').appendTo($messageArticle);

    // $('<input>').attr('type', 'text').attr('id', 'user-input').appendTo($messageArticle);
    // $("<button>").attr('type', 'button').attr('id', 'user-btn').text("Submit Current User").appendTo($messageArticle);
    // console.log(currentUse)

    let $inputDiv = $("<div>").attr("id", "input-div")
    $('<input>').attr('type', 'text').attr('id', 'message-input').appendTo($inputDiv);
    $("<button>").attr('type', 'button').attr('id', 'message-btn').text("Send Message").appendTo($inputDiv);
    $inputDiv.appendTo($messageArticle)

    $("#friends").append($messageArticle)

    subMess();


    ajax.getField("messages").then(function (messageList) {
        let users = ajax.getField("users").then(function (response) {
            let users = response
            return users
        }
        )

        console.log(users)

        messageList.forEach(element => {
            let mess = document.createElement("p")

            mess.textContent = `${element.message}`
            if (element.userId == 1) {
                mess.classList = `message ${element.userId}`
            } else {
                mess.classList = `friendMessage ${element.userId}`
            }
            $("#message-box").append(mess)

        })
    }
    )
}





module.exports = buildMessageArticle;