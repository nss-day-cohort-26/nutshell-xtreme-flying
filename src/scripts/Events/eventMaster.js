const $ = require('jquery');
const ajax = require('../ajaxCalls')
const makeAnEvent = require("./buildEvents")

class eventMaster {
    //adds a new event and posts it to JSON
    addNewEvent() {
        let name = document.getElementById("eventInput").value;
        let loc = document.getElementById("location").value;
        let dateTime = document.getElementById("party-time").value;
        let user = 1; // this is going to be obtained with session storage I believe
        ajax.postEvent(user, name, loc, dateTime).then(
            makeAnEvent.buildSingleEvent());
    }

    editEvent() {
console.log(event.target.id);

        ajax.getField(`events/${event.target.id}`).then((eventInfo) => {
            console.log("INFO", eventInfo.name);
            $(`#editEventInput${eventInfo.id}`).val(eventInfo.name);
            $(`#editEventLocation${eventInfo.id}`).val(eventInfo.location);
            $(`#editEventParty-time${eventInfo.id}`).val(eventInfo.date);
        })
    }

    saveEditedEvent() {
        console.log("VALUE", event.target.attributes.uniqueid.value);

        let editedName = $(`#editEventInput${event.target.attributes.uniqueId.value}`).val();
        let editedLocation = $(`#editEventLocation${event.target.attributes.uniqueId.value}`).val();
        let editedDate = $(`#editEventParty-time${event.target.attributes.uniqueId.value}`).val();
        let uniqueId = event.target.attributes.uniqueid.value;
        let user = event.target.attributes.userid.value;
        ajax.putEvent(user, editedName, editedLocation, editedDate, uniqueId).then((response) => {
            makeAnEvent.buildSingleEvent();
        })


    }


}

const eventFunctions = new eventMaster;
//save edit button
$("#editEventModal").on("click", "#editEventButton", eventFunctions.saveEditedEvent)
//save button
$("#saveEventButton").on("click", eventFunctions.addNewEvent)
//actual edit button
$("#events").on("click", ".btn-edit", eventFunctions.editEvent)
