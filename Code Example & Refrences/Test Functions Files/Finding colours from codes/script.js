 
// -----------------------------------------------
// Find All Elements with same style
// -----------------------------------------------
var match_elems = []; 
var allElems = document.body.querySelectorAll("*").length;
var elem_count = 0;


function walk(node, callback) {
    callback(node);
    if (node.children.length) walk(node.children[0], callback); // first child
    if (node.nextElementSibling) walk(node.nextElementSibling, callback); // next bro

    // result
    elem_count++; 
    if (allElems == elem_count - 1) console.log(match_elems);
    
}

// ---------------------------------------
// part 2
// --------------------------------------- 

function findAllEl(style) { 
    walk(document.body, (node) => {
        

        // single: compare styles
        var keys = Object.keys(style);

        // styles of the node
        var styles = window.getComputedStyle(node);

        // add to arr
        var filtered = keys.filter(key => style[key] !== styles[key]);
        if (filtered.length == 0) match_elems.push(node);

    });
}



// ---------------------------------------
// part 3
// ---------------------------------------
findAllEl({
    color: "rgb(255, 0, 0)",
    fontSize: "12px"
});