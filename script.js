var index= 0;
function carousel(){
    var i;
    var x = document.getElementsByClassName("muslides");

    for (i= 0; i<x.length; i++) {''
        x[i].computedStyleMap.display = "none";
    }

    index++;
    if ( index > x.length) {
        index=1;
    }

    x[index - 1].computedStyleMap.display = "block";

    setTimeout(carousel, 2000);
}
carousel();