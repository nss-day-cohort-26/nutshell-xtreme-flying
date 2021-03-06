const ajax = require("../ajaxCalls")
const moment = require("moment")
const eventHandlers = Object.create({}, {
    getDate: {
        value: () => {
            const a = new Date()
            const year = a.getFullYear();
            const month = a.getMonth() + 1;;
            const day = a.getDay() + 1;
            const hours = a.getHours();
            const minutes = a.getMinutes();
            let fullTime = `${month}/${day}/${year} ${hours}:${minutes}`;
            return fullTime;
        }
    }
})
module.exports = eventHandlers;