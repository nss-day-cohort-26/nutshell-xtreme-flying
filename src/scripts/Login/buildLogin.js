const $ = require('jquery');
const AJ = require('../ajaxCalls.js');
const taskAll = require('../Tasks/taskMaster.js');


class buildLogin {
    Build() {
        const loginDiv = $('#login');
        const wholePage = $('#page');
        wholePage.empty();
        loginDiv.append(`
        <button id="login-btn" class="logbut">Login</button>
        <button id="register-btn" class="logbut">Register</button>
        
    

    <div id="id01" class="modal">

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

                <button id="login-submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot
                <a href="#">password?</a>
                </span>
            </div>
        </div>
    </div>

    <div id="id02" class="modal">

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

                <button id="register-submit">Register</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
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
        <div id="events" class="features"></div>
        <div id="messages" class="features"></div>
        <div id="news" class="features"></div>
        <div id="tasks" class="features"></div>
        <div id="friends" class="features"></div>
        `)
        const logreg = $('#logreg');
        wholePage.on('click', '#logreg', () => {
            this.Build();
            sessionStorage.setItem("User", 0);
        })
        taskAll();
    }


}

const logB = new buildLogin;
logB.Build();

module.exports = logB;