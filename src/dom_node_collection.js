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

    attr(atter, value){
        if (value){
            this.nodes.forEach(node => {
                node[atter] = value;
            });
        } else {
            return this.nodes[0][atter]
        };
    }

    addClass(clss) {
        this.nodes.forEach(node => {
            node.className = clss;
        });
    }

    removeClass() {
        this.nodes.forEach(node => {
            node.className = '';
        });
    }

    // possibly need to go one key deeper
    children() {
        let childNodes = []
        this.nodes.forEach(node => {
           childNodes = childNodes.concat(Array.from(node.children));
        });

        return new DOMNodeCollection(childNodes);
    }

    parent() {
        //change .parent to .parentNode
        let parentNodes = [];
        this.nodes.forEach(node => {
            parentNodes = parentNodes.concat(Array.from(node.parentNode));
        });

        return new DOMNodeCollection(parentNodes);
    }
    
    find(selector) {
        //finds the element based on the selector
        let eles = [];
        this.nodes.forEach(node => {
            const ele = Array.from(node.querySelectorAll(selector))
            eles.concat(ele)
        });

        return new DOMNodeCollection(eles);
    }
}

module.exports = DOMNodeCollection