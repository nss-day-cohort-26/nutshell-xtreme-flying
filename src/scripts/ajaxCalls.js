const $ = require('jquery')

class ajaxCalls {
    getField(resource) {
        return $.ajax(`http://localhost:3000/${resource}`)
    }

    getUser(userId) {
        return $.ajax(`http://localhost:3000/users/${userId}`)
    }

    getMessage(messageId) {
        return $.ajax(`http://localhost:3000/messages/${messageId}`)
    }

    postMessage(msg, user) {
       return $.ajax({
            url: "http://localhost:3000/messages",
            method: "POST",
            data: {
                "userId": user,
                "message": msg
            }
        })
    }

    putMessage(user, msg, id) {
       return $.ajax({
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

    postTask(user, task, done, date) {
        return $.ajax({
            url: "http://localhost:3000/tasks",
            method: "POST",
            data: {
                "userId": user,
                "task": task,
                "date": date,
                "completed": done
            }
        })
    }

    putTask(user, task, done, date, id) {
        return $.ajax({
            url: `http://localhost:3000/tasks/${id}`,
            method: "PUT",
            data: {
                "userId": user,
                "task": task,
                "date": date,
                "completed": done
            }
        })
    }

    postFriend(user, yourid) {
       return $.ajax({
            url: "http://localhost:3000/friends",
            method: "POST",
            data: {
                "userId": user,
                "yourId": yourid
            }
        })
    }

    delFriend(id) {
        return $.ajax({
            url: `http://localhost:3000/friends/${id}`,
            method: "DELETE"
        })
    }
}

const ajax = new ajaxCalls;

module.exports = ajax;
