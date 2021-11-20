
 
 var boton=document.getElementById("boton_abrir_menu");
  boton.style.display = 'none';


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




//var course_top=document.getElementById("course").offsetTop - 100;
// var course_top=document.getElementById("area_superior").offsetTop - 100;
var course_top = 100;



var Y = window.scrollY

var color_fondo = "#24325A";

if (Y < course_top) {
    boton.style.display = 'none';

} else  {
	 boton.style.display = ''
}



}, false);
