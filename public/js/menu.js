var boton = document.getElementById("boton_abrir_menu");
var boton2 = document.getElementById("boton_abrir_menu2");
var contendor_boton = document.getElementById("panel_abrir_menu");

var boton_contacto_telefono = document.getElementById("boton_contacto_telefono");

var texto_iconos_izquierda= document.getElementById("texto_iconos_izquierda");
var linea_iconos_izquierda= document.getElementById("linea_iconos_izquierda");




window.addEventListener("load", (event) => {
  if (document.getElementById("boton_cerrar_menu")) {
    document
      .getElementById("boton_cerrar_menu")
      .addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("mySidepanel").style.width = "0";
        document.getElementById("panel_abrir_menu").style.visibility =
          "visible";
        document.getElementById("principal").classList.remove("myblur");
      });
  }

  if (document.getElementById("boton_abrir_menu")) {
  document
    .getElementById("boton_abrir_menu")
    .addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      document.getElementById("mySidepanel").style.width = "250px";
      document.getElementById("panel_abrir_menu").style.visibility = "hidden";
      document.getElementById("principal").classList.add("myblur");

    });
  }


   if (document.getElementById("boton_abrir_menu2")) {

    
  document
    .getElementById("boton_abrir_menu2")
    .addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      document.getElementById("mySidepanel").style.width = "250px";
      document.getElementById("panel_abrir_menu").style.visibility = "hidden";
      document.getElementById("principal").classList.add("myblur");

    });
  }


});



function setColor(color) {
  boton_contacto_telefono.style.color = color;
  texto_iconos_izquierda.style.color=color;
  linea_iconos_izquierda.style.color=color;
  boton_contacto_correo.style.color=color;

    

}

const Y_Area_Superior =  126;
const Y_Crashkurse_Titulo =  311;
const  Y_CrashkurseKards = 500;
const  Y_Empresas = 873;
const  Y_Footer = 3922;


const color_magenta="#e42078";
const color_white="#ffffff";

window.addEventListener(
  "scroll",
  function () {
    var course_top = 100;


    
    var Y = window.pageYOffset;



    if (boton_contacto_telefono!=undefined) {

      if (Y< Y_Area_Superior) {     
         setColor(color_white);             
      }

       if (Y>= Y_Area_Superior && Y<Y_CrashkurseKards) {     
         setColor(color_magenta);             
      }

        if (Y>= Y_CrashkurseKards && Y<Y_Empresas) {     
         setColor(color_white);             
      }

      if (Y>=Y_Empresas && Y<Y_Footer) {
          setColor(color_magenta)
      }

      if (Y>=Y_Footer) {
          setColor(color_white)
      }
    }



    if (!contendor_boton) {return}
    if (!boton) {return}
    
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
