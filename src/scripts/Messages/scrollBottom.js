const $ = require("jquery"); 

const scrollBottom = function () { 
    $("#message-article").scrollTop = $("#message-article").scrollHeight;  
} 
    

scrollBottom();
module.exports = scrollBottom; 