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

/** icon functionality starts */
function time() {
    var temp = document.getElementById("open");

    temp.style.display = "none"
}
function icon() {
    var temp = document.getElementById("open");

    temp.style.display = "block"
}
/** icon functionality ends*/

/** average functionality starts*/
function avg1() {
    var temp = document.getElementById("average");

    temp.style.display = "block"
}
function avg2() {
    var temp = document.getElementById("average");

    temp.style.display = "none"
}
/** average functionality ends*/

/** total_nav functionality starts */
function overview(){
    var temp1 = document.getElementById("overview");
    temp1.style.display = "block"
    
    var temp2 = document.getElementById("order_online");
    temp2.style.display = "none"

    var temp3 = document.getElementById("reviews");
    temp3.style.display = "none"

    var temp4 = document.getElementById("photos");
    temp4.style.display = "none"

    var temp5 = document.getElementById("krit_menu");
    temp5.style.display = "none"
}

function order_online(){
    var temp1 = document.getElementById("overview");
    temp1.style.display = "none"
    
    var temp2 = document.getElementById("order_online");
    temp2.style.display = "block"

    var temp3 = document.getElementById("reviews");
    temp3.style.display = "none"

    var temp4 = document.getElementById("photos");
    temp4.style.display = "none"

    var temp5 = document.getElementById("krit_menu");
    temp5.style.display = "none"
}

function reviews(){
    var temp1 = document.getElementById("overview");
    temp1.style.display = "none"

    var temp2 = document.getElementById("order_online");
    temp2.style.display = "none"

    var temp3 = document.getElementById("reviews");
    temp3.style.display = "block"

    var temp4 = document.getElementById("photos");
    temp4.style.display = "none"

    var temp5 = document.getElementById("krit_menu");
    temp5.style.display = "none"
}

function photos(){
    var temp1 = document.getElementById("overview");
    temp1.style.display = "none"

    var temp2 = document.getElementById("order_online");
    temp2.style.display = "none"

    var temp3 = document.getElementById("reviews");
    temp3.style.display = "none"

    var temp4 = document.getElementById("photos");
    temp4.style.display = "block"

    var temp5 = document.getElementById("krit_menu");
    temp5.style.display = "none"
}

function menu(){
    var temp1 = document.getElementById("overview");
    temp1.style.display = "none"

    var temp2 = document.getElementById("order_online");
    temp2.style.display = "none"

    var temp3 = document.getElementById("reviews");
    temp3.style.display = "none"

    var temp4 = document.getElementById("photos");
    temp4.style.display = "none"

    var temp5 = document.getElementById("krit_menu");
    temp5.style.display = "block"
}
/** total_nav functionality starts */

/**photos section js starts*/
function allitems(){
    var temp1 = document.getElementById("allitems");
    temp1.style.display = "block"

    var temp2 = document.getElementById("food");
    temp2.style.display = "none"

    var temp3 = document.getElementById("ambience");
    temp3.style.display = "none"
}

function food(){
    var temp1 = document.getElementById("allitems");
    temp1.style.display = "none"

    var temp2 = document.getElementById("food");
    temp2.style.display = "block"

    var temp3 = document.getElementById("ambience");
    temp3.style.display = "none"
}

function ambience(){
    var temp1 = document.getElementById("allitems");
    temp1.style.display = "none"

    var temp2 = document.getElementById("food");
    temp2.style.display = "none"

    var temp3 = document.getElementById("ambience");
    temp3.style.display = "block"
}
/**photos section js ends*/

/**add to cart function */

var id=0;
var btn=document.querySelectorAll("#add");
btn.forEach((btn1)=>{
 btn1.addEventListener("click",addfunction)
})
var fooditems=[];
function addfunction(e){
    var image=e.target.parentElement.parentElement.children[0].children[0].src;
    var restorent=e.target.parentElement.parentElement.children[0].children[1].children[0].textContent;
    var name=e.target.parentElement.parentElement.children[0].children[1].children[1].textContent;
    var price=e.target.parentElement.parentElement.children[0].children[1].children[4].textContent;
    price=price.replace("₹",'')
    id=id+1;
       
    fooditems.push(
      {
      id:id,
      img:image,
      restorent:restorent,
      name:name,
      price:price
     }
    )

    localStorage.setItem("cards",JSON.stringify(fooditems))
    alert("added to cart")
  

}

