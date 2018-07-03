// Coded by Jenn
const $ = require("jquery")
const ajax = require("../ajaxCalls")
const friendList = require("./buildFriends")

const friendsMaster = Object.create({}, {
    "addNewFriend": {
        value: function() {
            let nameInputField = $("#friend-user-name").val().toLowerCase()
            ajax.getField("users").then((usersArray) =>{
                usersArray.forEach(userObject =>{
                    console.log(userObject.id)
                    if(userObject.name.toLowerCase() === nameInputField) {
                        ajax.postFriend(userObject.id, 1).then(
                            friendList.createFriendListComponent(1) //the number (second parameter) should be the current user ID
                        )
                    }
                })
            })
        }
    },
    "deleteShittyFriends": {
        value: function() {
            console.log(Number(event.target.id))
            ajax.delFriend(event.target.id).then((response)=>{
                friendList.createFriendListComponent(1)
            })
        }
    }
})

$("#friends").on("click", ".deleteFriend", friendsMaster.deleteShittyFriends)
$("#add-new-friend").on("click", friendsMaster.addNewFriend)
$("#find-your-friends").hide()
$("#find-new-friend").on("click", function(){$("#find-your-friends").toggle()})
