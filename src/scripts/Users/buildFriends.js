const $ = require("jquery")
//Coded by Jenn
const ajax = require("../ajaxCalls")

const friendList = Object.create({}, { // creates element to hold all of the friends and input to find friends and add them
    "createFriendsTemplate" : {
        value: function() {
            $("#friends").append($(`
            <h1>Friends</h1>
            <div id="find-your-friends">
                <label for="friend-user-name">Find Friends:</label>
                <input type="text" id="friend-user-name" name="friend-title" />
                <button id='add-new-friend'>Add Friend</button>
            </div>
            <button id='find-new-friend'>Find Friend</button>
            <section id='friend-list'></section>`))
        }
    },
    "createFriendListComponent": { //creates a div for each friend. has a button for deleting friends. this button has the unique ID of the friend you want to delete.
        value: function(yourId) { //yourId needs to be the user that is logged in
            ajax.getField(`friends?_expand=user&yourId=${yourId}`).then((friendsArray) => {
                $("#friend-list").empty()
                friendsArray.forEach(friend => {
                    $("#friend-list").append($(`
                        <div id="friend${friend.user.id}" class='friend-selected'>
                            <img class='friend-icon' src='https://image.shutterstock.com/image-vector/add-friend-vector-icon-member-260nw-1085252015.jpg'>
                            <div class='friend-name'>${friend.user.name}</div>
                            <button id='${friend.id}' class='deleteFriend'>X</button>
                        </div>
                    `))
                })
            })
        }
    }
})

module.exports = friendList




