function downarrow(){
    var uparr=document.getElementById("up-arrow");
    var dowarr=document.getElementById("down-arrow");
    var Food1=document.getElementById("food1");

    uparr.style.display="block"
    Food1.style.display="none"
    dowarr.style.display="none"
}
function uparrow(){
    var Uparr=document.getElementById("up-arrow");
    var Dowarr=document.getElementById("down-arrow");
    var Food1=document.getElementById("food1");

    Food1.style.display="block"
    Uparr.style.display="none"
    Dowarr.style.display="block"
}
function downarrow1(){
    var uparr=document.getElementById("up-arrow1");
    var dowarr=document.getElementById("down-arrow1");
    var Food1=document.getElementById("food2");

    uparr.style.display="block"
    Food1.style.display="none"
    dowarr.style.display="none"
}
function uparrow1(){
    var Uparr=document.getElementById("up-arrow1");
    var Dowarr=document.getElementById("down-arrow1");
    var Food1=document.getElementById("food2");

    Food1.style.display="block"
    Uparr.style.display="none"
    Dowarr.style.display="block"
}
function downarrow2(){
    var uparr=document.getElementById("up-arrow2");
    var dowarr=document.getElementById("down-arrow2");
    var Food1=document.getElementById("food3");

    uparr.style.display="block"
    Food1.style.display="none"
    dowarr.style.display="none"
}
function uparrow2(){
    var Uparr=document.getElementById("up-arrow2");
    var Dowarr=document.getElementById("down-arrow2");
    var Food1=document.getElementById("food3");

    Food1.style.display="block"
    Uparr.style.display="none"
    Dowarr.style.display="block"
}
function downarrow3(){
    var uparr=document.getElementById("up-arrow3");
    var dowarr=document.getElementById("down-arrow3");
    var Food1=document.getElementById("food4");

    uparr.style.display="block"
    Food1.style.display="none"
    dowarr.style.display="none"
}
function uparrow3(){
    var Uparr=document.getElementById("up-arrow3");
    var Dowarr=document.getElementById("down-arrow3");
    var Food1=document.getElementById("food4");

    Food1.style.display="block"
    Uparr.style.display="none"
    Dowarr.style.display="block"
}
function toggle(){
    var main=document.getElementById("main-block");
    var mini=document.getElementById("mini-page");

    main.style.display="none"
    mini.style.display="block"
}

function Close(){
    var Main=document.getElementById("main-block");
    var Mini=document.getElementById("mini-page");

    Main.style.display="block"
    Mini.style.display="none"

}
function Clickme(){
    var Main=document.getElementById("main-block");
    var Mini=document.getElementById("mini-page");
    var mainbox=document.getElementById('search-box');


    Main.style.display="block"
    Mini.style.display="none"
    mainbox.style.display="none"

}

function scroll1(){
    var left=document.querySelector("#circle-images");
   
  
    left.scrollBy(-350,0)

}

function scroll2(){
    var right=document.querySelector("#circle-images");

    right.scrollBy(350,0)
    
}

function scroll3(){
    var left=document.querySelector("#border-images");
   
  
    left.scrollBy(-350,0)

}

function scroll4(){
    var right=document.querySelector("#border-images");

    right.scrollBy(350,0)
    
}

 /**search-bar*/
 function searchrelation(){
    var mainbox=document.getElementById('search-box');
    mainbox.style.display='none'

}

function search(){
    var content=document.getElementById('search-content').value.toUpperCase();
    var list=document.querySelectorAll('#dish');
    var matter=document.getElementsByTagName('h3');
    var mainbox=document.getElementById('search-box');
  

    for(var i=0;i<matter.length;i++){
        var match=list[i].getElementsByTagName("h3")[0];
        if(match){
            var text=match.textContent || match.innerHTML
            console.log(text)
            if(text.toUpperCase().indexOf(content)>-1){
                list[i].style.display=''
                mainbox.style.display="block"
                
            }
            else{
                list[i].style.display='none'
            
            }
        
        }
    }


    
}

function detectd(){
    var down=document.getElementById("detectdown");
    var up=document.getElementById("detectup");
    var container=document.getElementById("detect-box");

    down.style.display="none"
    up.style.display="inline-block"
    container.style.display="block"

}

function detectu(){
    var down=document.getElementById("detectdown");
    var up=document.getElementById("detectup");
    var container=document.getElementById("detect-box");


    down.style.display="inline-block"
    up.style.display="none"
    container.style.display="none"

}



/**login javascript */

function log(){
    var login=document.getElementById("blur");
    var log=document.getElementById("login-page")
    var sing=document.getElementById("sing-page")

    login.style.display="block"
    log.style.display="block"
    sing.style.display="none"

}

function wrong(){
    var multi=document.getElementById("blur");

    multi.style.display="none"
}
function emailbox(){
    var login=document.getElementById("login-page");
    var email=document.getElementById("email-page")

    login.style.display="none"
    email.style.display="block"
}

function sing(){
    var login=document.getElementById("blur");
    var log=document.getElementById("login-page")
    var sing=document.getElementById("sing-page")

    login.style.display="block"
    log.style.display="none"
    sing.style.display="block"

}