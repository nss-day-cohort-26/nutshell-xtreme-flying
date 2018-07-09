const $ = require('jquery');
const AJ = require('../ajaxCalls.js');
const bTasks = require('./buildTasks.js');
const moment = require('moment');

function taskAll() {

    bTasks.taskBones();
    bTasks.taskPopulate();
    // ----------To Do Button
    const tmButton = $('#task-main-btn')  // The button that opens the task stuff
    const taskMain = $('#task-mains')  // The task stuff
    taskMain.hide(); // Sets the task interface initially to hidden.
    function hider(e) {
        taskMain.toggle(400);
    }

    tmButton.on('click', hider);  // Shows the task interface
    //-----------------------

    //----------Complete Button

    // Targets the task you clicked on and hides it.  Also sets completed
    // to true in the database so it no longer gets propogated in the builder.

    const taskDiv = $('#tasks');
    // console.log(taskDiv);
    function completed(e) {
        // console.log($(`#${e.target.id}`));
        // console.log(e.target.previousElementSibling.textContent);
        // console.log(e.target);
        const targetTask = $(`#${e.target.id}.task-card`);
        // console.log(targetTask)
        const targetTitle = $(`#${e.target.id}.task-card-title`)
        // targetTitle.css('font-size', '1.8em');
        targetTitle.addClass('strike');
        targetTask.fadeOut(1300);
        AJ.putTask(sessionStorage.getItem("User"), targetTask[0].dataset.title, 'true', targetTask[0].dataset.date, e.target.id) // SET TO TRUE
    }
    taskDiv.on('click', ".task-complete-btn", completed)
    //----------------------------

    //-------------Submit Button
    function makeTask(e) {
        if (event.which == 13) {
            // console.log("makeTask");
            const title = $('#task-title');
            const date = $('#task-time');
            AJ.postTask(sessionStorage.getItem("User"), title.text(), false, date.val())
                .then(() => {
                    bTasks.taskPopulate();
                    $("br").remove();
                })
        }
    }



    taskDiv.on('keypress', "#task-title", makeTask)


    function editTask(e) {
        if (event.which == 13) {
            const title = $('.task-card-title');
            const date = $('.task-card-time');
            // console.log(id);
            // console.log(targetTask) // USERID USED HERE
            AJ.putTask(sessionStorage.getItem("User"), title.text(), 'false', e.target.dataset.date, e.target.id)
                .then(bTasks.taskPopulate)
        }

    }
    taskDiv.on('keypress', ".task-card-title", editTask)



    //HOW DOES THIS WORK?
    $(document).bind('click', function (e) {
        if ($(e.target).closest('#tasks').length === 0) {
            taskMain.hide();
        }
    });



};

module.exports = taskAll;