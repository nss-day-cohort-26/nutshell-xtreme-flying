//William Kimball 2018
const $ = require("jquery");
const ajax = require("./../ajaxCalls.js"); 
const scrollBottom = require("./scrollBottom") 
// console.log(buildMessages) 

const editMess = function (mess) {
// console.log(mess.childNodes[1])
    let editBtn = mess.childNodes[1];

    // console.log(mess, mess.id)
    
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
                    $("#messages").empty();   
                    
                    mess.id = `${response.id}` 
                    ajax.putMessage(response.userId, newMessage, mess.id).then(
                        function () {
                            const buildMessages = require("./buildMessages");   
                            // console.log("yo")
                            buildMessages();
                            scrollBottom();   
                        }
                    )   
                }
            )
            
        }) 
    }
    )}

module.exports = editMess 