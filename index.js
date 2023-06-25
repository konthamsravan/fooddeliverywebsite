/** explore section javascript **/
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


		/** toggle button javascript **/
		function toggle(){
			var actual=document.getElementById("main-block");
			var temp=document.getElementById("mini-page");
	
			actual.style.display="none"
			temp.style.display="block"
		}
		function Close(){
			var actual=document.getElementById("main-block");
			var temp=document.getElementById("mini-page");
	
			actual.style.display="block"
			temp.style.display="none"
		}
		function click(){
			var actual=document.getElementById("main-block");
			var temp=document.getElementById("mini-page");
            
	
			actual.style.display="block"
			temp.style.display="none"
			
		}


    /**search-bar*/
    function searchrelation(){
        var mainbox=document.getElementById('search-container');
        mainbox.style.display='none'

    }

    function search(){
        var content=document.getElementById('search-content').value.toUpperCase();
        var list=document.querySelectorAll('#dish');
        var matter=document.getElementsByTagName('h3');
        var mainbox=document.getElementById('search-container');
        var container=document.getElementById("detect-box");
        container.style.display="none"
      

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

   
   

