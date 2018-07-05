const ajax = require("../ajaxCalls")
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
            if(minutes < 10){
                fullTime = `${month}/${day}/${year} ${hours}:0${minutes}`;
            }
            return fullTime;
        }
    }
})
module.exports = eventHandlers;