const $ = require("jquery")

const friendList = Object.create({}, {
    "createFriendsTemplate" : {
        value: function() {
            $("#friends").append($("<h1>Friends</h1><button id='add-new-friend'>Add New Friend</button>"))
            $("#friends").append($("<section id='friend-list'></section>"))
        }
    },
    "createFriendListComponent": {
        value: function(friendName, friendUserId) {
            $("#friend-list").append($(`<div id=${friendUserId} class='friend-selected'><img class='friend-icon' src='https://image.shutterstock.com/image-vector/add-friend-vector-icon-member-260nw-1085252015.jpg'><div class='friend-name'>${friendName}</div><button id=${friendUserId} class='delete'>X</button></div>`))
        }
    },
    "addFriendModal": {
        value: function() {
            console.log("add friend")
            $("#friends").innerHTML =
                `<div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Name" aria-describedby="inputGroup-sizing-sm">
                    <button type="button" class="btn btn-dark">Save</button>
                </div>`
        }
    }
})
$("#friends").on("click", $("#add-new-friend"), friendList.addFriendModal)
friendList.createFriendsTemplate()
friendList.createFriendListComponent("Jenn", 1)
friendList.createFriendListComponent("Leah", 2)
