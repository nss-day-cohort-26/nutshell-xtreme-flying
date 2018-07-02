const $ = require('jquery');
const AJ = require('../ajaxCalls.js');
const bTasks = require('./buildTasks.js');


// ----------To Do Button
const tmButton = $('#task-main-btn')  // The button that opens the task stuff
const taskMain = $('#task-main')  // The task stuff

taskMain.hide();
function hider(e){
    taskMain.toggle(400);
}

tmButton.on('click', hider);
//-----------------------

//----------Complete Button

const taskDiv = $('#tasks');
// console.log(taskDiv);
function completed(e){
    // console.log($(`#${e.target.id}`));
    // console.log(e.target.previousElementSibling.textContent);
    const taskText = e.target.previousElementSibling.textContent;
    $(`#${e.target.id}`).hide()
    AJ.putTask(1, taskText, 'true', e.target.id) 
}
taskDiv.on('click', ".task-complete-btn", completed)
//----------------------------

//-------------Submit Button




taskDiv.on('click', ".")