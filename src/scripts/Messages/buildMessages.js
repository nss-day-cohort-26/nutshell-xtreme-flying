//William Kimball 2018

const $ = require("jquery")
const ajax = require("./../ajaxCalls.js")
const subMess = require("./submitMessage")
const editMess = require("./editMessage")
const scrollBottom = require("./scrollBottom") 
// const currentUser = require("./currentUser")
let currentUse = 1;//dont let this stay 


const buildMessageArticle = function () {

    const $messageArticle = document.createElement("article")
    $messageArticle.id = "message-article";

    $('<section>').attr('id', 'message-box').appendTo($messageArticle);


    let $inputDiv = $("<div>").attr("id", "input-div")
    $('<input>').attr('type', 'text').attr('id', 'message-input').appendTo($inputDiv);
    $("<button>").attr('type', 'button').attr('id', 'message-btn').text("Send Message").appendTo($inputDiv);
    $inputDiv.appendTo($messageArticle)

    $("#friends").append($messageArticle)

    subMess();


    ajax.getField("messages").then(function (messageList) {

        messageList.forEach(element => {
            let mess = document.createElement("p")


            ajax.getUser(element.userId).then(function (response) {
                mess.textContent = `${response.name}: ${element.message}`
                let userName = response.name 
                if (element.userId == currentUse) {
                    mess.classList = `message ${element.id}`
                    // mess.id = `${response.id}`
                    $("<button>").attr('type', 'button').attr('class', 'edit-btn').text("Edit").appendTo(mess);
                    editMess(mess, userName);
                } else {
                    mess.classList = `friendMessage ${element.userId}`
                    // mess.id = `${response.id}`
                }
                mess.id = `${element.id}`

                $("#message-box").append(mess)
                scrollBottom();

            })
        }
        )
    })
}





module.exports = buildMessageArticle;