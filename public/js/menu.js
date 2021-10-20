
 


window.addEventListener('load', (event) => { 
  
    document.getElementById("boton_cerrar_menu").addEventListener('click',function (e){
       e.preventDefault();
       e.stopPropagation();
	   document.getElementById("mySidepanel").style.width = "0";
	   document.getElementById("panel_abrir_menu").style.visibility = 'visible';
	   document.getElementById("principal").classList.remove('myblur');
	   
	   //document.getElementById("panel_abrir_menu").classList.remove('hide');
	   //document.getElementById("panel_abrir_menu").style.z-index = "-1";
	   
    });
	
	 document.getElementById("boton_abrir_menu").addEventListener('click',function (e){
       e.preventDefault();
       e.stopPropagation();
	   document.getElementById("mySidepanel").style.width = "250px";
	   document.getElementById("panel_abrir_menu").style.visibility = 'hidden';
	   document.getElementById("principal").classList.add('myblur');
	   
	   
	   
	   //document.getElementById("panel_abrir_menu").classList.add('hide');
	   //document.getElementById("panel_abrir_menu").style.z-index = "99";
	   
    });
});


window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....

var boton=document.getElementById("boton_abrir_menu");

var empresas_top=document.getElementById("empresas").offsetTop;
var footer_top=document.getElementById("myfooter").offsetTop;
var course_top=document.getElementById("course").offsetTop;
var course_blue_top=document.getElementById("course_blue").offsetTop;
var footer_top=document.getElementById("myfooter").offsetTop;

var Y = window.scrollY

var color_fondo = "#24325A";

if (Y < course_top) {
	boton.style.backgroundColor = 'transparent';
} else if (Y > course_top && Y <course_blue_top) {
   boton.style.backgroundColor = color_fondo;	
} else if ( Y>empresas_top && Y<footer_top) {
	 boton.style.backgroundColor = color_fondo;
} else if (Y>footer_top){	 
 boton.style.backgroundColor = 'transparent';
} else  {
	 boton.style.backgroundColor = 'transparent';
}


/*
 if ($(".fixedposition").offset().top < ($(".footer").offset().top - 30)) {
        $(".fixedposition").css("top", "30px");
        $(".fixedposition").css("display", "block");
    } else {
        $(".fixedposition").css("display", "none");
    }
*/
 /*  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
   } else {
      // upscroll code
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling*/
}, false);

window.scroll(function(){
	///console.log('scroll');
 /* var fixed = $("div.fixed");
  
  var fixed_position = $("div.fixed").offset().top;
  var fixed_height = $("div.fixed").height();

  var toCross_position = $(".div-to-cross").offset().top;
  var toCross_height = $(".div-to-cross").height();

  if (fixed_position + fixed_height  < toCross_position) {
    fixed.removeClass('white');
  } else if (fixed_position > toCross_position + toCross_height) {
    fixed.removeClass('white');
  } else {
    fixed.addClass('white');
  }
  */

});