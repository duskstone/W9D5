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

    // parent() {
    //     //change .parent to .parentNode
    //     let parentNodes = [];
    //     this.nodes.forEach(node => {
    //         parentNodes = parentNodes.concat(Array.from(node.parentNode));
    //     });

    //     return new DOMNodeCollection(parentNodes);
    // }
    
    parent() {
        
        // this.nodes.forEach(node => {
        //     if (parentNodes.includes(node.parentNode))
        //         parentNodes.push(node.parentNode);
        // });

        return new DOMNodeCollection(this.nodes[0].parentNode);
    }


    find(selector) {
        //finds the element based on the selector
        let findNode = [];
        this.nodes.forEach(node => {
            const nodeList = node.querySelectorAll(selector)
            findNode = findNode.concat(Array.from(nodeList))
        });

        return new DOMNodeCollection(findNode);
    }

    remove() {
        // let that = this;
        this.nodes.forEach(node => {
            node.parentNode.removeChild(node);
        });

        return new DOMNodeCollection(this.nodes);
    }
}

module.exports = DOMNodeCollection