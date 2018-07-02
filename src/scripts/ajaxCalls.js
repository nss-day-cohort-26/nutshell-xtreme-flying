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

    postEvent(user, name, loc, date) {
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

    putEvent(user, name, loc, date, id) {
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

    postTask(user, task, done) {
        $.ajax({
            url: "http://localhost:3000/tasks",
            method: "POST",
            data: {
                "userId": user,
                "task": task,
                "completed": done
            }
        })
    }

    putTask(user, task, done, id) {
        $.ajax({
            url: `http://localhost:3000/tasks/${id}`,
            method: "PUT",
            data: {
                "userId": user,
                "task": task,
                "completed": done
            }
        })
    }

    postFriend(user, yourid) {
        $.ajax({
            url: "http://localhost:3000/friends",
            method: "POST",
            data: {
                "userId": user,
                "yourId": yourid
            }
        })
    }

    delFriend(id) {
        $.ajax({
            url: `http://localhost:3000/friends/${id}`,
            method: "DELETE"
        })
    }




}

const ajax = new ajaxCalls;

module.exports = ajax;