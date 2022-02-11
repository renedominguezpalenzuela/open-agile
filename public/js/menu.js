var boton = document.getElementById("boton_abrir_menu");
var boton2 = document.getElementById("boton_new_abrir_menu2");
var contendor_boton = document.getElementById("panel_abrir_menu");


var texto_iconos_izquierda = document.getElementById("texto_iconos_izquierda");
var linea_iconos_izquierda = document.getElementById("linea_iconos_izquierda");
var boton_contacto_telefono = document.getElementById( "boton_contacto_telefono");
var boton_contacto_correo = document.getElementById("boton_contacto_correo");

var crashkurse_link = document.getElementById("crashkurse_link");
var leinstungen_link = document.getElementById("leinstungen_link");

var color_magenta = "#e42078";
var color_white = "#ffffff";
var color = color_magenta;

  




var pagina = window.location.pathname;

// setColor(0, pagina);

// window.addEventListener("load", (event) => {
//   if (document.getElementById("boton_cerrar_menu")) {
//     document.getElementById("boton_cerrar_menu").addEventListener("click", function (e) {
//         e.preventDefault();
//         e.stopPropagation();
//         document.getElementById("mySidepanel").style.width = "0";
//         document.getElementById("panel_abrir_menu").style.visibility = "visible";
//         document.getElementById("principal").classList.remove("myblur");
//       });
//   }

//   if (document.getElementById("boton_abrir_menu")) {
//     document.getElementById("boton_abrir_menu").addEventListener("click", function (e) {
//         e.preventDefault();
//         e.stopPropagation();    
//         document.getElementById("mySidepanel").style.width = "30vw";
//         document.getElementById("panel_abrir_menu").style.visibility = "hidden";
//         document.getElementById("principal").classList.add("myblur");
//       });
//   }

//   if (boton2) {
//     boton2.addEventListener("click", function (e) {
//       e.preventDefault();
//       e.stopPropagation();
//       document.getElementById("mySidepanel").style.width = "110vw";
//       document.getElementById("panel_abrir_menu").style.visibility = "hidden";
//       document.getElementById("principal").classList.add("myblur");
//     });
//   }

//   if (leinstungen_link) {
//     leinstungen_link.addEventListener("click", cerrar_menu_lateral);
//   }

  
//   if (crashkurse_link) {

//     crashkurse_link.addEventListener("click", cerrar_menu_lateral);
//   }
// });

// var page = path.split("/").pop();

//TODO: obtener Y desde divs reales en el html
function setColor(Y, pagina) {
  var Y_Area_SuperiorEnd = 282;
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

  const r2 = /\/quizstart/;
  if (r2.test(pagina)) {
    color = color_magenta;
  }

  if (boton_contacto_telefono) {
   
    boton_contacto_telefono.style.color = color;
  }

  if (texto_iconos_izquierda) {
    texto_iconos_izquierda.style.color = color;
  }

  if (linea_iconos_izquierda) {
    linea_iconos_izquierda.style.color = color;
  }

  if (boton_contacto_correo) {
    boton_contacto_correo.style.color = color;
  }
}

window.addEventListener( "scroll", function () {
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


 function cerrar_menu_lateral(e) {

   
        document.getElementById("mySidepanel").style.width = "0";
        document.getElementById("panel_abrir_menu").style.visibility =
          "visible";
        document.getElementById("principal").classList.remove("myblur");
      };
