const $ = require("jquery");
const ajax = require("./../ajaxCalls.js");
const friendList = require("./../Users/buildFriends")

const addMessageFriend = function (nameBtn) {
    $(nameBtn).click(function() {
        console.log(event.target.id)
        var r = confirm("Do you want to add this Friend?");
        if (r == true) {
            ajax.postFriend(event.target.id, sessionStorage.getItem("User")).then( // the friend is added to the friends array.
                friendList.createFriendListComponent(sessionStorage.getItem("User")) //reloads the dom, the number (second parameter) should be the current user ID
            )
        } else {
            alert("Friend not added.")
        }
    })
}

module.exports = addMessageFriend;