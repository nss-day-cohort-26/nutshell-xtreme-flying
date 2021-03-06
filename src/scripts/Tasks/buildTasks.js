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
            <div id="task-mains">
                <p id="to-do">TO DO: <span id="task-title" contenteditable="true">...</span></p>
                <input type="datetime-local" id="task-time" name="task-time"
                value="${nextWeek}" min="${today}" max="${nextWeek}"
                />
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
                    const User = sessionStorage.getItem("User");
                    
                    if (thing.completed == "false" && thing.userId == User) {
                        // console.log(thing);
                        const dueDate = (new Date(thing.date) - Date.now());
                        const diff = new moment.duration(dueDate);
                        const timeLeft = `Time Left: ${diff.days()} Days, ${diff.hours()} Hours and ${diff.minutes()} Minutes`
                        // console.log(dueDate)
                        taskList.append(`
                        <div id="${thing.id}" class="task-card" data-title="${thing.task}" data-date="${thing.date}">
                        <p class="task-card-title" id="${thing.id}" data-date="${thing.date}" contenteditable="true"><button class="task-complete-btn" id="${thing.id}"></button> ${thing.task}</p>
                        <p class="task-card-time">${timeLeft}</p>
                        </div>

                    `)
                    // <button class="task-complete-btn" id="${thing.id}">Job's Done</button>

                    }
                })


            })

    }

}



const bTask = new buildTask;
// bTask.taskBones();
// bTask.taskPopulate();

module.exports = bTask;



{/* <div id="task-main">
                <fieldset id="task-main">
                    <legend id="task-main">New Task</legend>
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
            </div> */}