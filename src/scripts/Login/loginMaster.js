const $ = require('jquery');
const AJ = require('../ajaxCalls.js');
const bLog = require('./buildLogin.js');

const logPage = $('#id01');
const regPage = $('#id02');
const logDiv = $('#login');
function logTFin(e){
    const logName = $('#log-name').val();
    const logPass = $('#log-pass').val();
    AJ.getField(`users?email=${logName}`)
    .then(user => {
        // console.log(user[0].password);
        if (user.length > 0 && logPass == user[0].password){
            sessionStorage.setItem("User", user[0].id);
            bLog.Reset();
        }else {
            alert("We're Sorry, it looks like you may have mistyped your email address or password.")
        }
    })
}

function newReg(e){
    const regName = $('#reg-name').val();
    const regPass = $('#reg-pass').val();
    const regEmail = $('#reg-email').val();
    AJ.postUser(regName, regPass, regEmail)
        .then(user => {
            sessionStorage.setItem("User", user.id);
            bLog.Reser();
        }
    );
}
function logScreen(e) {
    logPage.show(300);
    const logbut = $('#login-submit')
    logbut.on('click', logTFin);
}
logDiv.on('click', '#login-btn', logScreen)
function regScreen(e) {
    regPage.show(300);
    const regbut = $('#register-submit')
    regbut.on('click', newReg);
}
logDiv.on('click', '#register-btn', regScreen)


const modal01 = document.getElementById('id01');
const modal02 = document.getElementById('id02');


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal01) {
        logPage.hide();
    }
    if (event.target == modal02) {
        regPage.hide();
    }
}

