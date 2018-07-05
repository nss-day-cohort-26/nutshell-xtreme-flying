const eventHandlers = Object.create({}, {
    addNewButton: {
        value: () => {
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