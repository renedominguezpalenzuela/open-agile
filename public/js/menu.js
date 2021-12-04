var boton = document.getElementById("boton_abrir_menu");
var contendor_boton = document.getElementById("panel_abrir_menu");

window.addEventListener("load", (event) => {
  document
    .getElementById("boton_cerrar_menu")
    .addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      document.getElementById("mySidepanel").style.width = "0";
      document.getElementById("panel_abrir_menu").style.visibility = "visible";
      document.getElementById("principal").classList.remove("myblur");
    });

  document
    .getElementById("boton_abrir_menu")
    .addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      document.getElementById("mySidepanel").style.width = "250px";
      document.getElementById("panel_abrir_menu").style.visibility = "hidden";
      document.getElementById("principal").classList.add("myblur");
    });
});

window.addEventListener(
  "scroll",
  function () {
    var course_top = 100;
    var Y = window.pageYOffset;

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
