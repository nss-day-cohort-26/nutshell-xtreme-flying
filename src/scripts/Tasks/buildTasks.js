const $ = require('jquery');

class buildTask{
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
        //ajax call//
        const taskList = $('#task-list');
        taskList.empty();
        // Maybe add a countdown for each task?
        tasks.forEach(task => {
            taskList.append(`
            <div id="${task.id}" class="task-card">
                <h4 class="task-card-title"><b>${task.title}</b></h4> 
                <span class="task-card-date">${task.date}</span>
                <button id="task-complete-btn">Done</button>
                <button id="task-edit-btn">Edit</button>
            </div>
            `)
        })
    }

}

const bTask = new buildTask;
// bTask.taskBones();