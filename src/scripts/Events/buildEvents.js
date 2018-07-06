const $ = require('jquery');
const ajax = require('../ajaxCalls')

//making objects to hold all of the functions
class buildEventSection {
    //method that will create the event template section and modal
    buildEventCreateSection() {
        //making a variable to hold the selected div I want everything to go into
        const eventDiv = $('#events')
        //adding a header as well as making a separate section within main div to technically hold the modal
        eventDiv.append(`
        <h1 id ='eventHeader'>Events</h1>
        <button type="button" class="btn btn-info" id ="triggerEventModalButton" data-toggle="modal" data-target="#myModal">
        Create Your Event!
    </button>
        <section id = 'eventModal'></section>
        <section id = 'editEventModal'></section>
        <section id = "events-holder"></section>
        `);

        //building the bootstrap modal and form input fields... a lot of this is bootstrap, so dont let it stress you out lol
        let modal = (`
        <div class="modal" id = "myModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Events</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="eventForm">
                            Event Name: <input id="eventInput">
                                <br>
                                    Location:
                <input id="location">
                                        <br>
                                            <label for="event-time">Date and time:</label>
                                            <input type="datetime-local" id="party-time" name="party-time" value="2018-07-10T19:30" min="2018-06-07T00:00" max="2020-06-14T00:00"
                                            />
      </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" id="saveEventButton" data-dismiss="modal">Save Event</button>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
    </div>
  </div>
</div>
        `);
        //this appends the entire modal to the section inside main div
        $("#eventModal").append(modal);

    }
//this method is what makes events in the event-holder div
buildSingleEvent() {
    ajax.allFriends().then((friends)=> {
        friends.push(sessionStorage.getItem("User"))
        $("#events-holder").empty();
        friends.forEach(friend => {
            console.log(friend)
            return ajax.getField(`events?userId=${friend}`).then((eventsArray) =>  { //this ajax call needs to expand for current user.. that's the next step for this
                //this is writing to the DOM each event as well as the editing button
                eventsArray.forEach(eventObject => {
                    //appends to the event holder
                    $("#events-holder").append($(`
                        <section class = "${eventObject.userId}" id = "${eventObject.id}">
                            <div id="name">${eventObject.name}</div>
                            <div id="location">${eventObject.location}</div>
                            <div id="date">${eventObject.date}</div>
                            <button type="button" class="btn-edit btn-primary" id ="${eventObject.id}" data-toggle="modal" data-target="#modal${eventObject.id}">Edit</button>
                        </section>`))
                        //this is the editing modal that opens when the edit button is clicked... this loads on page load
                        let editModal = $(`
                        <div class="modal" id = "modal${eventObject.id}" tabindex="-1" role="dialog">
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
                                            Event Name: <input id="editEventInput${eventObject.id}">
                                                <br>
                                                    Location:
                                <input id="editEventLocation${eventObject.id}">
                                                        <br>
                                                            <label for="event-time">Date and time:</label>
                                                            <input type="datetime-local" id="editEventParty-time${eventObject.id}" name="party-time" value="2018-07-10T19:30" min="2018-06-07T00:00" max="2020-06-14T00:00"
                                                            />
                    </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-primary" uniqueId="${eventObject.id}" userId="${eventObject.userId}" id="editEventButton" data-dismiss="modal">Save Edited Event</button>
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        </div>
                    </div>
                </div>
                </div>
                `)


                $("#editEventModal").append(editModal); // appends the modal to the editEventModal div
                });
                $("#events").on("click", ".btn-edit", editEvent)
                $("#saveEventButton").on("click", addNewEvent)


            })
        })
    })
}

}



const makeAnEvent = new buildEventSection;
// makeAnEvent.buildEventCreateSection();
// makeAnEvent.buildSingleEvent();

function editEvent() {
    console.log("edit event", event.target.id);

    ajax.getField(`events/${event.target.id}`).then((eventInfo) => {
        console.log("INFO", eventInfo.name);
        $(`#editEventInput${eventInfo.id}`).val(eventInfo.name);
        $(`#editEventLocation${eventInfo.id}`).val(eventInfo.location);
        $(`#editEventParty-time${eventInfo.id}`).val(eventInfo.date);
    })
}

function addNewEvent() {
    console.log('addNewEvent');
    let name = document.getElementById("eventInput").value;
    let loc = document.getElementById("location").value;
    let dateTime = document.getElementById("party-time").value;
    let user = 1; // this is going to be obtained with session storage I believe
    ajax.postEvent(user, name, loc, dateTime).then(
        makeAnEvent.buildSingleEvent());
}


module.exports = makeAnEvent;
