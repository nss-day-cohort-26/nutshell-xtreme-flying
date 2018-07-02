const $ = require('jquery')

class ajaxCalls {
    getField(resource) {
        return $.ajax(`http://localhost:3000/${resource}`)
    }

    postMessage(user, msg) {
        $.ajax({
            url: "http://localhost:3000/messages",
            method: "POST",
            data: {
                "userId": user,
                "message": msg
            }
        })
    }

    putMessage(user, msg, id) {
        $.ajax({
            url: `http://localhost:3000/messages/${id}`,
            method: "PUT",
            data: {
                "userId": user,
                "message": msg
            }
        })
    }

    postEvents(user, name, loc, date) {
        $.ajax({
            url: "http://localhost:3000/events",
            method: "POST",
            data: {
                "userId": user,
                "name": name,
                "location": loc,
                "date": date
            }
        })
    }

    putEvents(user, msg, id) {
        $.ajax({
            url: `http://localhost:3000/events/${id}`,
            method: "PUT",
            data: {
                "userId": user,
                "name": name,
                "location": loc,
                "date": date
            }
        })
    }

    postNews(user, title, url, syn, time) {
        $.ajax({
            url: "http://localhost:3000/news",
            method: "POST",
            data: {
                "userId": user,
                "title": title,
                "url": url,
                "synopsis": syn,
                "timestamp": time
            }
        })
    }

    delNews(id) {
        $.ajax({
            url: `http://localhost:3000/news/${id}`,
            method: "DELETE"
        })
    }

    


    
}

