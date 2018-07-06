const $ = require('jquery');
const AJ = require('../ajaxCalls.js');
const moment = require('moment');


class buildTask {
    // taskBones builds the elements that hold all the task objects
    // as well as the initial buttons to show the taskbar and create
    // a new task
    taskBones() {
        const taskDiv = $('#tasks');
        // npm install moment
        // moment gets todays date and a week from now to set a limit
        // for the task times.
        const today = new moment().format("YYYY-MM-DDThh:mm");
        const nextWeek = new moment().add(7,'d').format("YYYY-MM-DDThh:mm")
        taskDiv.append(`
        <button id="task-main-btn">To Do</button>
            <div id="task-main">
                <fieldset>
                    <legend>New Task</legend>
                    <div>
                        <label for="task-title">Title:</label>
                        <input type="text" id="task-title" name="task-title" />
                    </div>
                    <div>
                    <label for="task-time">Date/time:</label>
                    <input type="datetime-local" id="task-time" name="task-time"
                    value="${nextWeek}" min="${today}" max="${nextWeek}"
                    />
                    </div>

                </fieldset>
                <button id="task-make-btn">Submit</button>
                <div id="task-list"></div>
            </div>

        `)

    }

    taskPopulate() {
        AJ.getField('tasks')
            .then(tasks => {
                // console.log("taskPopulate", tasks);
                const taskList = $('#task-list');
                // Empties the task-list div and then goes through each task
                // in the database, makes an element with that element's
                // information and complete and edit buttons, and appends
                // it to the DOM.
                taskList.empty();
                tasks.forEach(thing => {
                    // console.log('taskPopulate-thing', thing.completed);
                    if (thing.completed == "false") {
                        // console.log(thing);
                        const dueDate = (new Date(thing.date) - Date.now());
                        const diff = new moment.duration(dueDate);
                        const timeLeft = `Time Left: ${diff.days()} Days, ${diff.hours()} Hours and ${diff.minutes()} Minutes`
                        // console.log(dueDate)
                        taskList.append(`
                        <div id="${thing.id}" class="task-card" data-title="${thing.task}" data-date="${thing.date}">
                        <h4 class="task-card-title"><b>${thing.task} &emsp; ${timeLeft}</b></h4>
                        <button class="task-complete-btn" id="${thing.id}">Job's Done</button>
                        <button class="task-edit-btn" id="${thing.id}">Edit</button>
                        </div>

                    `)

                    }
                })


            })

    }

}



const bTask = new buildTask;
// bTask.taskBones();
// bTask.taskPopulate();

module.exports = bTask;
