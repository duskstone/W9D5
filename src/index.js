const DOMNodeCollection = require("./dom_node_collection");

const queue = [];

window.$1 = function(arg) {
    if (arg instanceof HTMLElement ) {
        return new DOMNodeCollection([arg]);
    } else if (typeof arg === "string") { 
    // undercase document not uppercase/ also this.document to link current doc
    // ^ results to querySelectorAll not function
        const nodeList = document.querySelectorAll(arg);
        // console.log("log");
        const nodes = Array.from(nodeList);
        return new DOMNodeCollection(nodes);
    } else {
        if (document.readyState === "complete") {
            return arg();
        } else {
            queue.push(arg);
        }
    }
};

$1.extend = function(...objs) {
    let extended = {}
    objs.forEach (obj =>{
        for (key in obj) {
            extended[key] = obj[key];
        }
    })
    return extended;
}

$1.ajax = function(options) {
    let defaults = {
        method = "GET",
        url = "http://127.0.0.1:5500/dist/index.html",
        contentType = 'application/x-www-form-urlencoded; charset=UTF-8',
        data = {},
        success(data) {
            console.log("Here's what you want")
        }, 
        error() {
            console.log("Sorry, no bueno")
        }
    }
    options = $1.extend(defaults, options)

    const xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);

    xhr.onload = function () {
        console.log(xhr.status)
        console.log(xhr.responseType)
        console.log(xhr.response)
    }

    xhr.send();
}



// module.exports = index.js 