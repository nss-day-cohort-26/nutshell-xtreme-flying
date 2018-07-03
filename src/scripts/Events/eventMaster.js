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
            var editModal = (`
            <div class="modal" id = "editModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Events</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="editEventForm">
                                Event Name: <input id="editEventInput">
                                    <br>
                                        Location:
                    <input id="editEventLocation">
                                            <br>
                                                <label for="event-time">Date and time:</label>
                                                <input type="datetime-local" id="editEventParty-time" name="party-time" value="2018-07-10T19:30" min="2018-06-07T00:00" max="2020-06-14T00:00"
                                                />
          </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" id="editEventButton">Save Edited Event</button>
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
        </div>
      </div>
    </div>
    `)


    $("#editEventInput").val(eventInfo.name);
    $("#editEventLocation").val(eventInfo.location);
    $("#editEventParty-time").val(eventInfo.date);
    $("#editEventModal").append(editModal);
})
    }

    saveEditedEvent() {
        let editedName = $("#editEventInput").val();
        let editedLocation = $("#editEventLocation").val();
        let editedDate = $("#editEventParty-time").val();

        console.log(editedDate);
        console.log(editedName);
        console.log(editedLocation);

    }


}

const eventFunctions = new eventMaster;
$("#editEventModal").on("click", "#editEventButton", eventFunctions.saveEditedEvent)
$("#saveEventButton").on("click", eventFunctions.addNewEvent)
$("#events").on("click", ".btn-edit", eventFunctions.editEvent)
