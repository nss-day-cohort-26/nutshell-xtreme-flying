//William Kimball 2018

const buildMessages = require("./buildMessages")
const ajaxMessages = require("./../ajaxCalls")

//On pageload, run the function to build the initial message list
buildMessages(ajaxMessages.getField("messages"));