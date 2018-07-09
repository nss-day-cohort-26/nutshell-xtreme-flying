const $ = require("jquery");
const ajax = require("../ajaxCalls");
const events = require("./newsMaster");
const moment = require("moment");
const newsDomMethods = Object.create({}, {
buildNews: {
    value: () => {
        //Main DOM stuff
        const $mainSec = $("<section>").attr("id", "mainNewsSec").appendTo("#news"); 
        const $headText = $("<h1>").text("News").appendTo("#mainNewsSec");
        const $articleSec = $("<section>").attr("id", "articleSec").appendTo("#mainNewsSec");
        //Building DOM when add new article is clicked
        const $addArticleButton = $("<button>").text("Add New").addClass("btn btn-info").appendTo("#mainNewsSec").on("click", function(){
            const $titleLabel = $("<label>").text("Title:").appendTo("#mainNewsSec");
            const $titleInput = $("<input>").appendTo("#mainNewsSec");
            const $urlLabel = $("<label>").text("URL:").appendTo("#mainNewsSec");
            const $urlInput = $("<input>").appendTo("#mainNewsSec");
            const $descLabel = $("<label>").text("Description:").appendTo("#mainNewsSec");
            const $descInput = $("<input>").appendTo("#mainNewsSec");
            //Need event handler to add to database and clear & reload DOM
            //When adding info into fields, click create and it puts it into the database and refreshes DOM
            const $createButton = $("<button>").text("Create").addClass("btn btn-info").appendTo("#mainNewsSec").click(function(){
                const fullTime = new moment().format("YYYY-MM-DDThh:mm:ss");
                const currentUser = sessionStorage.getItem("User")
                ajax.postNews(currentUser, $titleInput.val(), $urlInput.val(), $descInput.val(), fullTime)
                .then(item => {
                newsDomMethods.clearDom();
            })
            })
        })
            const getArticles = () => {
                    ajax.allFriends()
                    .then(friendsList => {
                        friendsList.push(sessionStorage.getItem("User"));
                ajax.getField("news?_expand=user")
                .then(item => {
                        // console.log("friendslist", friendsList);
                    //This is sorting each article by newest first
                    item.sort(function(a,b){
                        // console.log("testing dates", new Date(a.timestamp).getTime(), new Date(b.timestamp).getTime());
                        
                            return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
                        });
                        //This is getting each article and posting it to the DOM.
                    item.forEach(key => {
                        if(friendsList.includes(key.userId)){
                        // console.log(moment(key.timestamp));
                        const niceTime = moment(key.timestamp).format("dddd, MMMM Do YYYY, h:mm:ss a")
                        const $holderSec = $("<section>").addClass("articles").attr("id", key.id);
                        const $title = $("<h3>").text(key.title).appendTo($holderSec);
                        const $url = $("<p>").text(`Source: ${key.url}`).appendTo($holderSec);
                        const $desc = $("<p>").text(`Description: ${key.synopsis}`).appendTo($holderSec);
                        const $timestamp = $("<p>").text(niceTime).appendTo($holderSec);
                        let $creatorName = $("<p>").text("").appendTo($holderSec);
                        if(key.userId === sessionStorage.getItem("User")){
                            $creatorName.text("You");
                        }else {
                            $creatorName.text(key.user.name);
                        }
                        //Delete button for deleting articles
                        const $deleteButton = $("<button>").text("delete").addClass("btn-primary").appendTo($holderSec).click(function() {
                            // console.log(event.target.parentNode.id);
                            //Deleting from database then refreshing DOM
                            ajax.delNews(event.target.parentNode.id)
                            .then(item => {
                            newsDomMethods.clearDom();
                        })
                        });
                        $holderSec.appendTo("#articleSec");
                    }
                    })
                        // console.log(item)
                })
            })
            }
            getArticles();
        }
    },
clearDom: {
    value: () => {
        //Deletes everything and rebuilds the DOM
        $("#mainNewsSec").empty()
        newsDomMethods.buildNews();
    }
}
})
// newsDomMethods.buildNews();

module.exports = newsDomMethods;

/* GET userID to know who posted which article.
URL, Title, Synopsis for info on the DOM */