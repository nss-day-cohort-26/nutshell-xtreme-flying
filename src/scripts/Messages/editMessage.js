//William Kimball 2018
const $ = require("jquery");
const ajax = require("./../ajaxCalls.js");
// console.log(buildMessages) 

const editMess = function (mess, userName) {
    let editBtn = mess.childNodes[1];
    
    editBtn.addEventListener("click", function () {      
        let text = $(`#${mess.id}`)    
        text = text.text() 
        text = text.slice(0, -4)
        text = /:(.+)/.exec(text)[1];   
        
        $(`#${mess.id}`).text("") 
        // console.log($(`#${mess.id}`)) 
        $("<textArea>").attr('class', 'edit-submit-textArea').text(text).appendTo(mess)  
        $("<button>").attr('type', 'button').attr('class', 'edit-submit-btn').text("Save Edit").appendTo(mess);
        $(".edit-submit-btn").click(function() {
            ajax.getMessage(mess.id).then( 
                function (response) {
                    let newMessage = $(".edit-submit-textArea").val();
                    $("#friends").empty();   
                    
                    mess.id = `${response.id}` 
                    ajax.putMessage(response.userId, newMessage, mess.id).then(
                        function () {
                            const buildMessages = require("./buildMessages");   
                            // console.log("yo")
                            buildMessages();   
                        }
                    )   
                }
            )
            
        }) 
    }
    )}

module.exports = editMess 