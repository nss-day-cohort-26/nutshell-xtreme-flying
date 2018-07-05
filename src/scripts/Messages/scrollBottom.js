const $ = require("jquery"); 

const scrollBottom = function () {
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        console.log(event) 
    });

}

module.exports = scrollBottom;