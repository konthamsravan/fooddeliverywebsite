/** products starts**/
function productup() {
    var uparr = document.getElementById("product-down");
    var dowarr = document.getElementById("product-up");
    var Food1 = document.getElementById("prod");

    uparr.style.display = "block"
    Food1.style.display = "none"
    dowarr.style.display = "none"
}
function productdown() {
    var Uparr = document.getElementById("product-down");
    var Dowarr = document.getElementById("product-up");
    var Food1 = document.getElementById("prod");

    Food1.style.display = "block"
    Uparr.style.display = "none"
    Dowarr.style.display = "block"
}
/**products ends */

/**section-4 starts */

function slideleft() {
    var leftl = document.querySelector(".our_products_content");

    leftl.scrollBy(-1000, 0)
}

function slideright() {
    var leftr = document.querySelector(".our_products_content");

    leftr.scrollBy(1000, 0)
}

/**section-4 ends */

/**section-5 starts */

function slidel() {
    var left = document.querySelector(".our_happy_content");

    left.scrollBy(-780, 0)
}

function slider() {
    var right = document.querySelector(".our_happy_content");

    right.scrollBy(780, 0)
}

/**section-5 starts */


/** explore section javascript **/
function downarrow() {
    var uparr = document.getElementById("up-arrow");
    var dowarr = document.getElementById("down-arrow");
    var Food1 = document.getElementById("food1");

    uparr.style.display = "block"
    Food1.style.display = "none"
    dowarr.style.display = "none"
}
function uparrow() {
    var Uparr = document.getElementById("up-arrow");
    var Dowarr = document.getElementById("down-arrow");
    var Food1 = document.getElementById("food1");

    Food1.style.display = "block"
    Uparr.style.display = "none"
    Dowarr.style.display = "block"
}
function downarrow1() {
    var uparr = document.getElementById("up-arrow1");
    var dowarr = document.getElementById("down-arrow1");
    var Food1 = document.getElementById("food2");

    uparr.style.display = "block"
    Food1.style.display = "none"
    dowarr.style.display = "none"
}
function uparrow1() {
    var Uparr = document.getElementById("up-arrow1");
    var Dowarr = document.getElementById("down-arrow1");
    var Food1 = document.getElementById("food2");

    Food1.style.display = "block"
    Uparr.style.display = "none"
    Dowarr.style.display = "block"
}
function downarrow2() {
    var uparr = document.getElementById("up-arrow2");
    var dowarr = document.getElementById("down-arrow2");
    var Food1 = document.getElementById("food3");

    uparr.style.display = "block"
    Food1.style.display = "none"
    dowarr.style.display = "none"
}
function uparrow2() {
    var Uparr = document.getElementById("up-arrow2");
    var Dowarr = document.getElementById("down-arrow2");
    var Food1 = document.getElementById("food3");

    Food1.style.display = "block"
    Uparr.style.display = "none"
    Dowarr.style.display = "block"
}
function downarrow3() {
    var uparr = document.getElementById("up-arrow3");
    var dowarr = document.getElementById("down-arrow3");
    var Food1 = document.getElementById("food4");

    uparr.style.display = "block"
    Food1.style.display = "none"
    dowarr.style.display = "none"
}
function uparrow3() {
    var Uparr = document.getElementById("up-arrow3");
    var Dowarr = document.getElementById("down-arrow3");
    var Food1 = document.getElementById("food4");

    Food1.style.display = "block"
    Uparr.style.display = "none"
    Dowarr.style.display = "block"
}

/** toggle button starts**/
function toggle() {
    var actual = document.getElementById("main-block");
    var temp = document.getElementById("mini-page");

    actual.style.display = "none"
    temp.style.display = "block"
}
function Close() {
    var actual = document.getElementById("main-block");
    var temp = document.getElementById("mini-page");

    actual.style.display = "block"
    temp.style.display = "none"
}
function click() {
    var actual = document.getElementById("main-block");
    var temp = document.getElementById("mini-page");

    actual.style.display = "block"
    temp.style.display = "none"

}
/** toggle button ends**/