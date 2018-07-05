const $ = require("jquery");
const ajax = require("../ajaxCalls")
const events = require("./newsMaster")
const newsDomMethods = Object.create({}, {
buildNews: {
    value: () => {
        const $mainSec = $("<section>").attr("id", "mainNewsSec").appendTo("#news"); 
        const $headText = $("<h1>").text("News").appendTo("#mainNewsSec");
        const $articleSec = $("<section>").attr("id", "articleSec").appendTo("#mainNewsSec");
        const $addArticleButton = $("<button>").text("Add New").appendTo("#mainNewsSec").click(events.addNewButton);
            const getArticles = () => {
                ajax.getField("news")
                .then(item => {
                    //*TODO LATER* Add conditions for user ID to get name of who posted
                    item.sort(function(a,b){
                        // Turn your strings into dates, and then subtract them
                        // to get a value that is either negative, positive, or zero.
                        return new Date(b.timestamp) - new Date(a.timestamp);
                        });
                    item.forEach(key => {
                        const $holderSec = $("<section>").addClass("articles").attr("id", key.id);
                        const $title = $("<h3>").text(key.title).appendTo($holderSec);
                        const $url = $("<p>").text(`Source: ${key.url}`).appendTo($holderSec);
                        const $desc = $("<p>").text(`Description: ${key.synopsis}`).appendTo($holderSec);
                        const $timestamp = $("<p>").text(key.timestamp).appendTo($holderSec);
                        const $deleteButton = $("<button>").text("delete").appendTo($holderSec).click(function() {
                            // console.log(event.target.parentNode.id);
                            ajax.delNews(event.target.parentNode.id)
                            .then(item => {
                            newsDomMethods.clearDom();
                        })
                        });
                        $holderSec.appendTo("#articleSec");
                    })
                        // console.log(item)
                })
            }
            getArticles()
        }
    },
clearDom: {
    value: () => {
        $("#mainNewsSec").empty()
        newsDomMethods.buildNews();
    }
}
})
newsDomMethods.buildNews();

module.exports = newsDomMethods;

/* GET userID to know who posted which article.
URL, Title, Synopsis for info on the DOM */