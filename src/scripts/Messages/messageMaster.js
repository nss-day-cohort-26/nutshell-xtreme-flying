//William Kimball 2018

const buildMessages = require("./buildMessages")
const ajaxMessages = require("./../ajaxCalls")

buildMessages(ajaxMessages.getField("messages"));