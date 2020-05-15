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

// module.exports = index.js 