const $ = require('jquery');

//making objects to hold all of the functions
class buildEvent {
    //method that will create the event template section and modal
    buildEventSection() {
        //making a variable to hold the selected div I want everything to go into
        const eventDiv = $('#events')
        //adding a header as well as making a separate section within main div to technically hold the modal
        eventDiv.append(`
        <h1 id ='eventHeader'>Events</h1>
            <section id = 'eventModal'></section>`);
        //this is the button that's shown on the page. when clicked it'll, open the modal
        var triggerEventModalButton = (`
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">
        Create Your Event!
    </button>
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
                                            Event Date:
                                            <label for="task-time">Date/time:</label>
                                            <input type="datetime-local" id="party-time" name="party-time" value="2018-07-10T19:30" min="2018-06-07T00:00" max="2020-06-14T00:00"
                                            />
      </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary">Save Event</button>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
    </div>
  </div>
</div>
        `);
        //this appends the entire modal to the section inside main div
        $("#eventModal").append(modal);
        //this appends the button to the main div
        eventDiv.append(triggerEventModalButton);
    }
}


const makeAnEvent = new buildEvent;
makeAnEvent.buildEventSection();

