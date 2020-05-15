const DOMNodeCollection = require("./dom_node_collection");

window.$1 = function(arg) {
    if (arg instanceof HTMLElement ) {
        return new DOMNodeCollection([arg]);
    } else { 
    // undercase document not uppercase/ also this.document to link current doc
    // ^ results to querySelectorAll not function
        const nodeList = this.document.querySelectorAll(arg);
        // console.log("log");
        const nodes = this.Array.from(nodeList);
        return new DOMNodeCollection(nodes);
    };
};

// module.exports = index.js 