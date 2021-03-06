// Coded by Jenn
const $ = require("jquery")
const ajax = require("../ajaxCalls")
const friendList = require("./buildFriends")
const news = require("./../News/buildNews")
const buildEvent = require("./../Events/buildEvents")

const friendsMaster = Object.create({}, { //this function is called upon "add friend" click
    "addNewFriend": {
        value: function() {
            let nameInputField = $("#friend-user-name").val().toLowerCase() //takes the input field value and converts to lowercase.
            ajax.getField("users").then((usersArray) =>{ //makes an ajax call to the users array.
                usersArray.forEach(userObject =>{
                    // console.log(userObject.id)
                    if(userObject.name.toLowerCase() === nameInputField) { //if the input value = a user name,
                        ajax.postFriend(userObject.id, sessionStorage.getItem("User")).then((require) => { // the friend is added to the friends array.
                            friendList.createFriendListComponent(sessionStorage.getItem("User"))
                            news.getArticles()
                            buildEvent.buildSingleEvent()
                        })
                    }
                })
            })
        }
    },
    "deleteShittyFriends": { //this function is called upon clicking the "X" by a friend name
        value: function() {
            // console.log(Number(event.target.id)) //the delete button has an id of the friend's unique id
            ajax.delFriend(event.target.id).then((response)=>{ //makes an ajax call to remove the friend from the friend array.
                friendList.createFriendListComponent(sessionStorage.getItem("User")) //reloads the dom
                news.getArticles()
                buildEvent.buildSingleEvent()
            })
        }
    },

    "buildFriends": {
        value: function() {
            friendList.createFriendsTemplate()
            friendList.createFriendListComponent(sessionStorage.getItem("User"))
            $("#friends").on("click", ".deleteFriend", friendsMaster.deleteShittyFriends) //event listener for the delete button
            $("#add-new-friend").on("click", friendsMaster.addNewFriend) //event listener for adding a new friend button
            $("#find-your-friends").hide() //hides the find friend field.
            $("#find-new-friend").on("click", function(){$("#find-your-friends").toggle()}) // shows the find friend field on click

        }
    }

})

module.exports = friendsMaster;
