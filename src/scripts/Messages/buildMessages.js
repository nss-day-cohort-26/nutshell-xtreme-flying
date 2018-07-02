const $ = require("jquery")

const buildMessageSection = function () {

const $messageSection = document.createElement("article")

$('<section>').attr('id', 'message-box').appendTo($messageSection);

let mess = document.createElement("p")
mess.textContent = "This is a test"
$messageSection.appendChild(mess)

$('<input>').attr('type','text').appendTo($messageSection);
$("<button>").attr('type','button').text("Send Message").appendTo($messageSection)


$("#friends").append($messageSection)
}

module.exports = buildMessageSection;