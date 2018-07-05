const $ = require('jquery');
const ajax = require('../ajaxCalls')
const makeAnEvent = require("./buildEvents")

class eventMaster {
    addNewEvent() {
        let name = document.getElementById("eventInput").value;
        let loc = document.getElementById("location").value;
        let dateTime = document.getElementById("party-time").value;
        let user = 2; // this is going to be obtained with session storage I believe
        ajax.postEvent(user, name, loc, dateTime).then(
            makeAnEvent.buildSingleEvent());
    }

    editEvent() {

        ajax.getField(`events/${event.target.id}`).then((eventInfo) => {

            $("#editEventInput").val(eventInfo.name);
            $("#editEventLocation").val(eventInfo.location);
            $("#editEventParty-time").val(eventInfo.date);
        })
    }

    saveEditedEvent() {
        let editedName = $("#editEventInput").val();
        let editedLocation = $("#editEventLocation").val();
        let editedDate = $("#editEventParty-time").val();
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
