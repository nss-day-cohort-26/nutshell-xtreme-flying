const $ = require("jquery"); 

const scrollBottom = function () {  
    $("#message-box").scrollTop = $("#message-box").scrollHeight  
    // $("#message-input").focus(); 
} 
    

scrollBottom(); 
module.exports = scrollBottom; 