


window.addEventListener('load', (event) => {
 	

 
  
  
    document.getElementById("boton_cerrar_menu").addEventListener('click',function (e){
     e.preventDefault();
       e.stopPropagation();
       document.getElementById('offcanvas').classList.toggle('show');
	   //document.getElementById('offcanvas').classList.remove('show');
	  // document.getElementById('offcanvas').offcanvas('hide');
	  
	  //document.getElementById('offcanvas').classList.remove('show');
	 // document.getElementById('offcanvas').classList.add('hide');
	    
	 
	
  });
});