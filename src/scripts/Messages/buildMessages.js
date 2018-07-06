//William Kimball 2018

const $ = require("jquery")
const ajax = require("./../ajaxCalls.js")
const subMess = require("./submitMessage")
const editMess = require("./editMessage")
const addMessFriend = require("./addFriendMessage")
// const currentUser = require("./currentUser")



//This function creates an article where all of the message functionality goes, such as the messages, and the new message input field. It then executes an ajax call to the list of messages and runs the functions to build each message with a functional edit button.
const buildMessageArticle = function () {

    const $messageArticle = document.createElement("article")
    $messageArticle.id = "message-article";

    //This part creates the article for messages, the input box, and appends them to the DOM
    $('<section>').attr('id', 'message-box').appendTo($messageArticle);
    let $inputDiv = $("<div>").attr("id", "input-div")
    $('<input>').attr('type', 'text').attr('id', 'message-input').appendTo($inputDiv);
    $("<button>").attr('type', 'button').attr('id', 'message-btn').text("Send Message").appendTo($inputDiv);
    $inputDiv.appendTo($messageArticle)

    $("#messages").append($messageArticle)

    //this calls the function that adds the event listener to the submit button
    subMess();

    //this executes an ajax call to the api for all of the messages, and then builds message components with an edit function for each.
    ajax.getField("messages").then(function (messageList) {

        //ajax call returns an array that is then looped through to build each message
        messageList.forEach(element => {
            let mess = document.createElement("p")

            //this ajax call gets the userId of the message, which is used to give proper ids to the elements, and will be used to check for current user later on.
            ajax.getUser(element.userId).then(function (response) {

                let userName = response.name

                mess.textContent = ` ${element.message}` 
                let currentUse = sessionStorage.getItem("User")
                // console.log(currentUse) 

                if (element.userId == currentUse) {
                    mess.classList = `message`
                    // mess.id = `${response.id}`
                    $("<button>").attr('type', 'button').attr('class', 'edit-btn').text("Edit").appendTo(mess);
                    editMess(mess, userName);
                } else {
                    mess.classList = `friendMessage`
                    // mess.id = `${response.id}`
                }
                mess.id = `${element.id}`

                const scrollBottom = require("./scrollBottom")
                scrollBottom();


                $("#message-box").append(mess)

                let nameBtn = document.createElement("p")
                nameBtn.className = "nameBtn"
                nameBtn.id = `${response.id}`
                nameBtn.textContent = `${response.name}: `
                mess.prepend(nameBtn)
                addMessFriend(nameBtn);

            })
        }
        )
    })
}





module.exports = buildMessageArticle;