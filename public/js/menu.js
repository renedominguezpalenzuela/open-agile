var boton = document.getElementById("boton_abrir_menu");
var boton2 = document.getElementById("boton_new_abrir_menu2");
var contendor_boton = document.getElementById("panel_abrir_menu");

var color_magenta = "#e42078";
var color_white = "#ffffff";
var color = color_white;



var boton_contacto_telefono = document.getElementById("boton_contacto_telefono");
var boton_contacto_correo = document.getElementById("boton_contacto_correo");

var texto_iconos_izquierda = document.getElementById("texto_iconos_izquierda");
var linea_iconos_izquierda = document.getElementById("linea_iconos_izquierda");



var pagina = window.location.pathname;

  setColor(0, pagina)


window.addEventListener("load", (event) => {
  


  if (document.getElementById("boton_cerrar_menu")) {
    document
      .getElementById("boton_cerrar_menu")
      .addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("mySidepanel").style.width = "0";
        document.getElementById("panel_abrir_menu").style.visibility =  "visible";
        document.getElementById("principal").classList.remove("myblur");
      });
  }

  if (document.getElementById("boton_abrir_menu")) {
    document
      .getElementById("boton_abrir_menu")
      .addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

      //  document.getElementById("mySidepanel").style.width = "350px";
      document.getElementById("mySidepanel").style.width = "30vw";
     
        document.getElementById("panel_abrir_menu").style.visibility = "hidden";
        document.getElementById("principal").classList.add("myblur");
      });
  }

  if (boton2) {
     
   boton2.addEventListener("click", function (e) {
        // e.preventDefault();
        // e.stopPropagation();

        console.log("äqu");

        document.getElementById("mySidepanel").style.width = "110vw";
        document.getElementById("panel_abrir_menu").style.visibility = "hidden";
        document.getElementById("principal").classList.add("myblur");
      });
  }
});



// var page = path.split("/").pop();

//TODO: obtener Y desde divs reales en el html
function setColor(Y, pagina) {


  var Y_Area_SuperiorEnd = 114;
  var Y_CrashkurseStart = 1215;
  var Y_CrashkurseKardsEnd = 2031;
 
  var Y_Footer = 4850;

  






// Main
  if (pagina === "/") {

   

     
    if (boton_contacto_telefono != undefined) {

      
      if (Y < Y_Area_SuperiorEnd) {
        color = color_white;
      }

      if (Y >= Y_Area_SuperiorEnd && Y < Y_CrashkurseStart) {
        color = color_magenta;
      
      }

      if (Y >= Y_CrashkurseStart && Y < Y_CrashkurseKardsEnd) {
        color = color_white;
      }



      if (Y >= Y_CrashkurseKardsEnd && Y < Y_Footer) {
        color = color_magenta;
      }

      if (Y >= Y_Footer) {
        color = color_white;
      }
    }
  } else {
     color = color_magenta;
  }

  // Cursos 
  const r = /\/crashkurse\/[a-z]*\/[0-9]/;
  if (r.test(pagina)) {
        color = color_magenta;
  }


   // Cursos 
  const r1 = /\/quiz\/[0-9]/;
  if (r1.test(pagina)) {
        color = color_white;
  }


  /*   /shop    */
  // const s = /\/shop/;

  //  if (s.test(pagina)) {
    

  //      Y_Area_Superior = 10;
  //      Y_Footer =629; 

       
  //      if (Y < Y_Area_Superior) {
  //       color = color_magenta;
  //     }


  //     if (Y >= Y_Area_Superior && Y < Y_Footer) {
  //       color = color_magenta;
  //     }

  //      if (Y >= Y_Footer) {
  //       color = color_white;
  //     }
   

  // }






  if (boton_contacto_telefono) {
     boton_contacto_telefono.style.color = color;
  }

  if (texto_iconos_izquierda) {
     texto_iconos_izquierda.style.color = color;
  }


  if (linea_iconos_izquierda)   {
    linea_iconos_izquierda.style.color = color;
  }

  if (boton_contacto_correo) {
    boton_contacto_correo.style.color = color;
  }
}



window.addEventListener(
  "scroll",
  function () {
    var course_top = 100;

    var Y = window.pageYOffset;

    setColor(Y, pagina);

    if (!contendor_boton) {
      return;
    }
    if (!boton) {
      return;
    }


    // Hide and show the hamberguer button
    if (Y < course_top) {
      contendor_boton.style.zIndex = "-1";
      boton.style.visibility = "hidden";
    } else {
      contendor_boton.style.zIndex = "99";
      boton.style.visibility = "visible";
    }
  },
  false
);
