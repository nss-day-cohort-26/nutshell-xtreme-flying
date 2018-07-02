const $ = require("jquery")
const ajax = require("./../ajaxCalls.js")
const subMess = require("./submitMessage")

const buildMessageArticle = function () {

    const $messageArticle = document.createElement("article")
    $messageArticle.id = "message-article";

    $('<section>').attr('id', 'message-box').appendTo($messageArticle);

    $('<input>').attr('type', 'text').attr('id', 'user-input').appendTo($messageArticle);
    $("<button>").attr('type', 'button').attr('id', 'user-btn').text("Submit Current User").appendTo($messageArticle);

    $('<input>').attr('type', 'text').attr('id', 'message-input').appendTo($messageArticle);
    $("<button>").attr('type', 'button').attr('id', 'message-btn').text("Send Message").appendTo($messageArticle);

    $("#friends").append($messageArticle)
    subMess();

    ajax.getField("messages").then(function (messageList) {
        const currentUser = "1"
        messageList.forEach(element => {
            let mess = document.createElement("p")
            mess.textContent = `${element.message}`
            if (element.userId === currentUser) {
                mess.classList = `message ${element.userId}`
            } else {
                mess.classList = `friendMessage ${element.userId}`
            }
            $("#message-box").append(mess)

        })
    }
    );
}




module.exports = buildMessageArticle;