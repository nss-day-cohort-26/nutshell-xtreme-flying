//William Kimball 2018

const $ = require("jquery")
const ajax = require("./../ajaxCalls.js")

const checkUser = function () {

    return $("#user-input").val()
}

module.export = checkUser