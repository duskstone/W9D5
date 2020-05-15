class DOMNodeCollection {
    constructor(nodes) {
        this.nodes = nodes;
    }

    html(html) {
        //checking if html is a string to be able to pass in empty string
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

    append(child) {
        if (child instanceof Object && !(child instanceof DOMNodeCollection)) {
            child = $1(child)
        };
        
        if (child instanceof DOMNodeCollection) {
            this.nodes.forEach(node => {
                node.innerHTML += child.outerHTML;
            });
        } else {
            this.nodes.forEach(node => {
                node.innerHTML += child;
            });
        };
    };

    addClass(clss) {
        this.nodes.forEach(node => {
            node.className = clss;
        });
    }
}

module.exports = DOMNodeCollection