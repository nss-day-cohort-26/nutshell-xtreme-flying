const $ = require("jquery"); 

const scrollBottom = function () {   
    let scrollHeight = $("#message-article").prop("scrollHeight")
    scrollHeight = scrollHeight + 500
    // console.log(typeof scrollHeight)       
    $("#message-article").scrollTop(999999999);           

} 
scrollBottom();    
module.exports = scrollBottom; 