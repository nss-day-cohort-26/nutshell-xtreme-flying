const $ = require('jquery');
const AJ = require('../ajaxCalls.js');


class buildTask {
    taskBones() {
        const taskDiv = $('#tasks');
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
                    <input type="datetime-local" id="party-time" name="party-time" value="2018-07-10T19:30" min="2018-06-07T00:00" max="2020-06-14T00:00"
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
                taskList.empty();
                // Maybe add a countdown for each task?
                tasks.forEach(thing => {
                    // console.log('taskPopulate-thing', thing.id);
                    if (!(thing.completed)){
                    taskList.append(`
                    <div id="${thing.id}" class="task-card">
                        <h4 class="task-card-title"><b>${thing.task}</b></h4> 
                        <button class="task-complete-btn" id="${thing.id}">Job Done</button>
                        <button class="task-edit-btn" id="${thing.id}">Edit</button>
                        <span class="task-card-date">${thing.date}</span>
                        
                    </div>
                    `)
                    }
                })
            })

    }

}



const bTask = new buildTask;
bTask.taskBones();
bTask.taskPopulate();

module.exports = bTask;