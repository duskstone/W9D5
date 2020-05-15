class DOMNodeCollection {
    constructor(nodes) {
        this.nodes = nodes;
    }

    html(html) {
        if (html) {
            this.nodes.forEach( node => {
                node.innerHTML = html;
            })
        } else {
            return this.nodes[0].innerHTML;
        };
    }
}

module.exports = DOMNodeCollection