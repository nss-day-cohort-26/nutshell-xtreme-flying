const $ = require('jquery');
const AJ = require('../ajaxCalls.js');
const bTasks = require('./buildTasks.js');
const moment = require('moment');

function taskAll() {

    bTasks.taskBones();
    bTasks.taskPopulate();
    // ----------To Do Button
    const tmButton = $('#task-main-btn')  // The button that opens the task stuff
    const taskMain = $('#task-main')  // The task stuff
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
        const targetTask = $(`#${e.target.id}.task-card`)
        // console.log(targetTask)
        targetTask.hide()
        AJ.putTask(1, targetTask[0].dataset.title, 'true', targetTask[0].dataset.date, e.target.id) // USERID USED HERE
    }
    taskDiv.on('click', ".task-complete-btn", completed)
    //----------------------------

    //-------------Submit Button
    function makeTask(e) {
        const title = $('#task-title');
        const date = $('#task-time');
        // console.log('make task', title.val(), date.val()) // USERID USED HERE
        AJ.postTask(1, title.val(), false, date.val())
            .then(bTasks.taskPopulate())
    }



    taskDiv.on('click', "#task-make-btn", makeTask)

    //--------------------------------

    //-------------Edit Submit Button
    function editSubmit(passId) {
        const title = $('#task-edit-title');
        const date = $('#task-edit-time');
        // console.log(id);
        // console.log(targetTask) // USERID USED HERE
        AJ.putTask(1, title.val(), 'false', date.val(), passId)
            .then(bTasks.taskPopulate)
    }


    // ----------------------- Edit Button
    // This builds the edit interface when it is clicked.
    function editTask(e) {

        const editForm = $(`#${e.target.id}`)
        // console.log(editForm)
        const today = new moment().format("YYYY-MM-DDThh:mm");
        const nextWeek = new moment().add(7, 'd').format("YYYY-MM-DDThh:mm")
        console.log(moment().add(7, 'd').format("YYYY-MM-DDThh:mm"));
        editForm.append(`
    <div class="task-main-edit">
    <fieldset>
        <legend>Edit Task</legend>
        <div>
            <label for="task-title">Title:</label>
            <input type="text" id="task-edit-title" name="task-title" value="${editForm[0].dataset.title}" />
        </div>
        <div>
            <label for="task-time">Date/time:</label>
            <input type="datetime-local" id="task-edit-time" name="task-time" 
            value="${editForm[0].dataset.date}" min="${today}" max="${nextWeek}"
            />
        </div>

    </fieldset>
    <button id="task-make-edit-btn">Submit</button>
    </div>

`)
        $(document).on('click', (e) => {
            if ($.contains(e.target, $('.task-main-edit')[0])) {
                bTasks.taskPopulate();
                $(document).off(); // WATCH OUT FOR THIS
            }
        })
        const newForm = $('.task-main-edit')
        newForm.hide();
        newForm.show(300);
        // console.log(newForm);
        newForm.on('click', "#task-make-edit-btn", () => { editSubmit(e.target.id) })
    }

    taskDiv.on('click', ".task-edit-btn", editTask)

};

module.exports = taskAll;