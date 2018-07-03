const $ = require("jquery");
const ajax = require("../ajaxCalls")
const newsDomMethods = Object.create({}, {
buildNews: {
    value: () => {
        const $mainSec = $("<section>").attr("id", "mainNewsSec").appendTo("#news"); 
        const $headText = $("<h1>").text("News").appendTo("#mainNewsSec");
        const $articleSec = $("<section>").attr("id", "articleSec").appendTo("#mainNewsSec");
        const $addArticleButton = $("<button>").text("Add New").appendTo("#mainNewsSec").click(function() {
            const $titleLabel = $("<label>").text("Title:").appendTo("#mainNewsSec");
            const $titleInput = $("<input>").appendTo("#mainNewsSec");
            const $urlLabel = $("<label>").text("URL:").appendTo("#mainNewsSec");
            const $urlInput = $("<input>").appendTo("#mainNewsSec");
            const $descLabel = $("<label>").text("Description:").appendTo("#mainNewsSec");
            const $descInput = $("<input>").appendTo("#mainNewsSec");
            //Need event handler to add to database and clear & reload DOM
            const $createButton = $("<button>").text("Create").appendTo("#mainNewsSec").click(function(){
                const fullTime = newsDomMethods.getDate()
                ajax.postNews(1, $titleInput.val(), $urlInput.val(), $descInput.val(), fullTime)
                .then(item => {
                newsDomMethods.clearDom();
            })
            })
            })
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
                        console.log(item)
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
},
getDate: {
    value: () => {
        const a = new Date()
        const year = a.getFullYear();
        const month = a.getMonth() + 1;;
        const day = a.getDay() + 1;
        const hours = a.getHours();
        const minutes = a.getMinutes();
        const fullTime = `${month}/${day}/${year} ${hours}:${minutes}`;
        return fullTime;
    }
}
})
newsDomMethods.buildNews();

module.exports = newsDomMethods;

/* GET userID to know who posted which article.
URL, Title, Synopsis for info on the DOM */