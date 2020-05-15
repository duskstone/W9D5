class DOMNodeCollection {
    constructor(nodes) {
        this.nodes = nodes;
    }

    html(html) {
        if (typeof html === "string") {
            this.nodes.forEach( node => {
                node.innerHTML = html;
            })
        } else {
            return this.nodes[0].innerHTML;
        };
    }

    empty() {
        this.html("");
    }
}

module.exports = DOMNodeCollection