const $ = require('jquery');

//making objects to hold all of the functions
class buildEvent {
    //function that will create the event template
    buildEventSection() {
        const eventDiv = $('#events')
        eventDiv.append(`
        <h1 id ='eventHeader'>Events</h1>
            <section id = 'eventModal'></section>`);
        var triggerEventModalButton = (`
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">
        Create Your Event!
    </button>
        `);
        var modal = (`
        <div class="modal" tabindex="-1" role="dialog">
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
                <form action="" name="someform">
                                                <select id="daydropdown">
                                                </select>
                                                <select id="monthdropdown">
                                                </select>
                                                <select id="yeardropdown">
                                                </select>
                                            </form>
      </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary">Save Event</button>
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
    </div>
  </div>
</div>
        `);
        $("#eventModal").append(modal);
        eventDiv.append(triggerEventModalButton);
    }
}


const makeAnEvent = new buildEvent;
makeAnEvent.buildEventSection();

{/* <button id = 'createEventButton'>Create a New Event!</button>
<div id = 'event-create'>
    <h2>New Event</h2>
        <div>
            <label for="event-name">Name:</label>
            <input type="text" id="event-name" name="event-name" />
        </div>
</div> */}


// const eventCreator = function () {
//     $('#events').append(
//         <div class="modal" tabindex="-1" role="dialog">
//             <div class="modal-dialog" role="document">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h5 class="modal-title">Modal title</h5>
//                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div class="modal-body">
//                         <form id="todoForm">
//                             To-Do: <input id="todoInput">
//                                 <br>
//                                     Description:
//                 <input id="todoDescription">
//                                         <br>
//                                             Due Date:
//                 <form action="" name="someform">
//                                                 <select id="daydropdown">
//                                                 </select>
//                                                 <select id="monthdropdown">
//                                                 </select>
//                                                 <select id="yeardropdown">
//                                                 </select>
//                                             </form>
//       </div>
//                                         <div class="modal-footer">
//                                             <button type="button" class="btn btn-primary">Save Event</button>
//                                             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                                         </div>
//     </div>
//   </div>
// </div>
//                             )
//                         }

// {/* module.exports = buildEventSection; */}
