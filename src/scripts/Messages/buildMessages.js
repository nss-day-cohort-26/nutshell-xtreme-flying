const $ = require("jquery")
const ajax = require("./../ajaxCalls.js")

const buildMessageArticle = function (messageList) {

const $messageArticle = document.createElement("article")
$messageArticle.id = "message-article"

$('<section>').attr('id', 'message-box').appendTo($messageArticle);


$('<input>').attr('type','text').attr('id', 'message-input').appendTo($messageArticle);
$("<button>").attr('type','button').attr('id', 'message-btn').text("Send Message").appendTo($messageArticle)


$("#friends").append($messageArticle)
}

module.exports = buildMessageArticle;