const $ = require("jquery");
const ajax = require("./../ajaxCalls.js");

const addMessageFriend = function (nameBtn) {
    $(nameBtn).click(function() {
        console.log(event.target)
                   
    })  
}

module.exports = addMessageFriend;