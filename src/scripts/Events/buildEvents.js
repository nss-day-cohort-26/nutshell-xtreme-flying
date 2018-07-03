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
        var modal = (`
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
                                            <button type="button" class="btn btn-primary" id="saveEventButton">Save Event</button>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
    </div>
  </div>
</div>
        `);
        //this appends the entire modal to the section inside main div
        $("#eventModal").append(modal);

    }

buildSingleEvent() {
    ajax.getField('events').then((eventsArray) =>  {
        $("#events-holder").empty();
        eventsArray.forEach(eventObject => {
            $("#events-holder").append($(`
                <section id = "${eventObject.userId}">
                    <div id="name">${eventObject.name}</div>
                    <div id="location">${eventObject.location}</div>
                    <div id="date">${eventObject.date}</div>
                    <button type="button" class="btn-edit btn-primary" id ="${eventObject.id}" data-toggle="modal" data-target="#editModal">Edit</button>
                </section>
            `))
        });
    })

}

}



const makeAnEvent = new buildEventSection;
makeAnEvent.buildEventCreateSection();
makeAnEvent.buildSingleEvent();

module.exports = makeAnEvent;
