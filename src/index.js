window.$1 = function(arg) {
    // debugger
    // undercase document not uppercase/ also this.document to link current doc
    // ^ results to querySelectorAll not function
    return this.document.querySelectorAll(arg);
    // console.log("log");
};

// module.exports = index.js 