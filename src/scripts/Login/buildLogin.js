const $ = require('jquery');
const AJ = require('../ajaxCalls.js');
const taskAll = require('../Tasks/taskMaster.js');
const buildMessages = require("../Messages/buildMessages.js")
const buildNews = require("../News/buildNews.js")
const buildFriends = require("../Users/friendsMaster.js")
const buildEvents = require("../Events/eventMaster.js")





class buildLogin {
    Build() {
        const loginDiv = $('#login');
        const wholePage = $('#page');
        wholePage.empty();
        $('#userName-top').empty();
        loginDiv.empty();
        loginDiv.append(`
        <button id="login-btn" class="logbut lb">Login</button>
        <button id="register-btn" class="logbut lb">Register</button>



    <div id="id01" class="login-modal">

        <div class="modal-content animate">

            <div class="container">
                <label for="email">
                    <b>Email</b>
                </label>
                <input type="text" id="log-name" placeholder="Enter Email" name="email" required>

                <label for="psw">
                <b>Password</b>
                </label>
                <input type="password" id="log-pass" placeholder="Enter Password" name="psw" required>

                <button id="login-submit" class="lb">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn lb">Cancel</button>
                <span class="psw">Forgot
                <a href="#">password?</a>
                </span>
            </div>
        </div>
    </div>

    <div id="id02" class="login-modal">

        <div class="modal-content animate">

            <div class="container">
                <label for="name">
                    <b>Name</b>
                </label>
                <input type="text" id="reg-name" placeholder="Enter Name" name="name" required>

                <label for="email">
                    <b>Email</b>
                </label>
                <input type="text" id="reg-email" placeholder="Enter Email" name="email" required>

                <label for="psw">
                <b>Password</b>
                </label>
                <input type="password" id="reg-pass" placeholder="Enter Password" name="psw" required>

                <button id="register-submit" class="lb">Register</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn lb">Cancel</button>
                <span class="psw">Forgot
                <a href="#">password?</a>
                </span>
            </div>
        </div>
    </div>

        `)
        const logmod = $('#id01');
        const regmod = $('#id02');
        // logmod.hide();
        // regmod.hide();

    }

    Reset() {
        const loginDiv = $('#login');
        loginDiv.empty();
        const wholePage = $('#page');
        wholePage.append(`
        
        <button id="logreg">Log In</button>
        <div id="tasks" class="features"></div>
        <section class="nutshell">
          <section class="boxed">
            <div id="events" class="features"></div>
            <div id="news" class="features"></div>
          </section>
          <section class='column'>
            <div id="messages" class="features"></div>
            <div id="friends" class="features"></div>
          </section>
        </section>
    
        `)
        const logreg = $('#logreg');
        wholePage.on('click', '#logreg', () => {
            wholePage.empty();
            this.Build();
            loginAll();
            sessionStorage.setItem("User", 0);
        })
        taskAll();
        buildMessages(AJ.getField("messages"));
        buildNews.buildNews();
        buildFriends.buildFriends();
        buildEvents.buildEvents();
    }


}

const logB = new buildLogin;
logB.Build();

module.exports = logB;
// short fix
function loginAll() {

    const logPage = $('#id01');
    const regPage = $('#id02');
    const logDiv = $('#login');
    function logTFin(e) {
        const logName = $('#log-name').val();
        const logPass = $('#log-pass').val();
        AJ.getField(`users?email=${logName}`)
            .then(user => {
                // console.log(user[0].password);
                if (user.length > 0 && logPass == user[0].password) {
                    sessionStorage.setItem("User", user[0].id);
                    logB.Reset();
                } else {
                    alert("We're Sorry, it looks like you may have mistyped your email address or password.")
                }
            })
    }

    function newReg(e) {
        const regName = $('#reg-name').val();
        const regPass = $('#reg-pass').val();
        const regEmail = $('#reg-email').val();
        AJ.postUser(regName, regPass, regEmail)
            .then(user => {
                sessionStorage.setItem("User", user.id);
                logB.Reset();
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
    window.onclick = function (event) {
        if (event.target == modal01) {
            logPage.hide();
        }
        if (event.target == modal02) {
            regPage.hide();
        }
    }

}

