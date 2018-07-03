const $ = require("jquery")
//Coded by Jenn
const ajax = require("../ajaxCalls")

const friendList = Object.create({}, {
    "createFriendsTemplate" : {
        value: function() {
            $("#friends").append($(`
            <h1>Friends</h1>
            <div id="find-your-friends">
                <label for="friend-user-name">Find Friends:</label>
                <input type="text" id="friend-user-name" name="friend-title" />
                <button id='add-new-friend'>Add Friend</button>
            </div>
            <button id='find-new-friend'>FindFriend</button>
            <section id='friend-list'></section>`))
        }
    },
    "createFriendListComponent": {
        value: function(yourId) {
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

friendList.createFriendsTemplate()
friendList.createFriendListComponent(1) // hard coded "yourId", will need to be changed with login feature


