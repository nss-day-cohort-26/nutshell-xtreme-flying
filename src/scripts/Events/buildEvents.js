const $ = require('jquery');

//making objects to hold all of the functions



//function that will create the event template
const buildEventSection = function () {
    $('#events').append("<h1 id = 'eventHeader'>Events</h1><button type = 'button' id = 'createEventButton'>Create a New Event!</button>");
    $('#events').append("<section id = 'eventHolder'></section>")
}

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

module.exports = buildEventSection;
