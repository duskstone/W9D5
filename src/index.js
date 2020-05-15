const DOMNodeCollection = require("./dom_node_collection");

window.$1 = function(arg) {
    // debugger
    // undercase document not uppercase/ also this.document to link current doc
    // ^ results to querySelectorAll not function
    const nodeList = this.document.querySelectorAll(arg);
    // console.log("log");
    return this.Array.from(nodeList);
};

// module.exports = index.js 