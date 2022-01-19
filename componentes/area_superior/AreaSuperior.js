import Link from "next/link";

import { servidor_url } from "../../config";

import MenuNavBar from "./MenuNavBar";
import MenuNavBar2 from "./MenuNavBar2";
import Logo from "./Logo";
import BotonAgileCheck from "./BotonAgileCheck";
import Titulo from "./Titulo";
import IconosIzquierda from "../../components/IconosIzquierda";

import BotonesConfigurator from "./BotonesConfigurator";
import Content01Iconos from "./Content01Iconos";
import IconosTeam from "./IconosTeam";

import Content01TextSinIcons from "./Content01TextSinIcons";

import FormularioContacto2 from "../../components/formulariocontacto2";



// fondo --- define el tipo de fondo del area superior
/*
si no se especifica fondo = bannermain

  barco   --- se pone el fondo con un barco "bannermain-quiz";
  variable  ---- texto -- fondo crece en funcion del contenido
  ajustable ---- bannermain-ajustable -- fondo se redudce en funcion del contenido


 */

//  titulo_largo ={true} --- reduce el fonts del titulo texto1 magenta para que quepa en una linea
export default function AreaSuperior({
  fondo,
  texto1,
  texto2,
  texto2a,
  formulario_contacto,
  botones_configurador,
  iconos,
  texto_parrafo_blanco,
  texto_parrafo_blanco_cursos,
  texto_parrafo_blanco_team,
  texto_parrafo_plequitas,
  firma,
  boton_inicio_quiz,
  titulo_quiz_result,
  texto_quiz_result,
  cursos,
  titulo_largo,
  titulo_muy_largo,
  img_team_top,

  iconos_team,
  email,
  phone,
  linkedin,
  area_gris_nueva,

  botones_contacto
}) {
  let vista_movil = false;

  return (
    <>
      {/*--------------- Mostrar si mayor o igual a lg ≥992px ------------------ */}
      <div className=" d-none d-lg-block">
        {(vista_movil = false)}

        <div className={`${getFondo(fondo)} `}>
          {area_gris_nueva != undefined && area_gris_nueva != false && (
            <div className="linea_lateral_inferior item-fondo "> </div>
          )}

          {/* Logo */}
          <div className="item-logo   d-flex align-items-center justify-content-center">
            <Logo />
          </div>

          {/*    <div className="row d-none d-lg-block "> */}
          <div className="item-menu  d-flex align-items-center justify-content-center ">
            <MenuNavBar />
          </div>

          <div className="item-boton   d-flex align-items-center justify-content-center">
            <BotonAgileCheck />
          </div>

          <div className="item-titulo ">
            {/* Contenido Principal */}
            {contenido_principal(
              texto1,
              texto2,
              texto2a,
              formulario_contacto,
              botones_configurador,
              iconos,
              texto_parrafo_blanco,
              texto_parrafo_blanco_cursos,
              texto_parrafo_blanco_team,
              texto_parrafo_plequitas,
              firma,
              boton_inicio_quiz,
              titulo_quiz_result,
              texto_quiz_result,
              vista_movil,
              cursos,
              titulo_largo,
              titulo_muy_largo,
              iconos_team,
              email,
              phone,
              linkedin,
              botones_contacto
            )}
          </div>

          {img_team_top != undefined && img_team_top != "" && (
            <div className="item-img-team-top me-5">
              <img
                className=" img-team-top  "
                src={`${servidor_url}/img/${img_team_top}`}
              />
            </div>
          )}

         
        </div>

        <IconosIzquierda />
      </div>

      {/* --------------------Vista movil Mostrar si menor a lg<992px  ----------------------------------------*/}
      <div className=" mb-5  d-lg-none">
        {(vista_movil = true)}
        <MenuNavBar2 />
        <div className={`${getFondo(fondo)}`}>
          <div className=" item-logo-movil  mt-2 ms-3 ">
            <a className=" " href="/">
              <img
                className=" size-logo-movil "
                src={`${servidor_url}/img/logo/5.svg`}
              />
            </a>
          </div>

          <div className="item-titulo   ">
            {/* Contenido Principal */}
            {contenido_principal(
              texto1,
              texto2,
              texto2a,
              formulario_contacto,
              botones_configurador,
              iconos,
              texto_parrafo_blanco,
              texto_parrafo_blanco_cursos,
              texto_parrafo_blanco_team,
              texto_parrafo_plequitas,
              firma,
              boton_inicio_quiz,
              titulo_quiz_result,
              texto_quiz_result,
              vista_movil,
              cursos,
              titulo_largo,
              titulo_muy_largo,
              iconos_team,
              email,
              phone,
              linkedin,
              botones_contacto
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// --------------Funciones ----------------------------------------------------------------

function getFondo(fondo) {
  let fondo_por_defecto = "bannermain";

  if (fondo === "barco") {
    fondo_por_defecto = "bannermain-quiz";
  }

  //varia con el contenido crece, el contenido es texto grande

  if (fondo === "variable") {
    fondo_por_defecto = "bannermain-variable";
  }

  //varia con el contenido se reduce, el contenido es solo titulo
  if (fondo === "ajustable") {
    fondo_por_defecto = "bannermain-ajustable";
  }

  if (fondo === "team") {
    fondo_por_defecto = "bannermain-team";
  }

  return fondo_por_defecto;
}

const contenido_principal = (
  texto1,
  texto2,
  texto2a,
  formulario_contacto,
  botones_configurador,
  iconos,
  texto_parrafo_blanco,
  texto_parrafo_blanco_cursos,
  texto_parrafo_blanco_team,
  texto_parrafo_plequitas,
  firma,
  boton_inicio_quiz,
  titulo_quiz_result,
  texto_quiz_result,
  vista_movil,
  cursos,
  titulo_largo,
  titulo_muy_largo,
  iconos_team,
  email,
  phone,
  linkedin,
  botones_contacto
) => {


   

  let id = -1;

  if (botones_configurador != undefined) {
    id = botones_configurador.id;
  }

  let id_botones_configurador = -1;

  if (id != undefined) {
    id_botones_configurador = id;
  }

  return (
    <>
      {/* Texto Principal */}
      {((texto1 != undefined && texto1 != "") ||
        (texto2 != undefined && texto2 != "")) && (
        <>
          <div className=" g-0  ms-5  ">
            <Content01TextSinIcons
              texto1={texto1}
              texto2={texto2}
              texto2a={texto2a}
              vista_movil={vista_movil}
              cursos={cursos}
              titulo_largo={titulo_largo}
              titulo_muy_largo={titulo_muy_largo}
              botones_contacto={botones_contacto}
              team={iconos_team}
            />
              
          </div>
        </>
      )}

      <div className="mb-5">

    
        {iconos != undefined && iconos && <Content01Iconos />}

        {/*Texto_quiz_result */}

        {titulo_quiz_result != undefined && titulo_quiz_result != "" && (
          <div className="font_title_secundario font_centrar font_title_purple mt-5">
            {titulo_quiz_result}
          </div>
        )}

        {texto_quiz_result != undefined && texto_quiz_result.length > 0 && (
          <>
            <div className="row mt-4 font_small_letter font_small_letter_white ms-5 me-3 justificar">
              {texto_quiz_result.map((unaLinea, index) => (
                <p key={index}>{unaLinea}</p>
              ))}
            </div>
          </>
        )}

        {texto_parrafo_blanco != undefined && texto_parrafo_blanco.length > 0 && (
          <>
            <div className="row font_smaller_letter_white ms-5 me-3 justificar">
              {texto_parrafo_blanco.map((unaLinea, index) => (
                <p key={index}>{unaLinea}</p>
              ))}
            </div>
          </>
        )}

        {texto_parrafo_blanco_cursos != undefined &&
          texto_parrafo_blanco_cursos.length > 0 && (
            <>
              {/* mostrar solo en pantalla grande - espacio con el titulo mt-*/}
              <div className="row font_smaller_letter_white_cursos ms-5 mt-3 me-5 justificar margen_superior">
                {texto_parrafo_blanco_cursos.map((unaLinea, index) => (
                  <p key={index}>{unaLinea}</p>
                ))}
              </div>
            </>
          )}

        {texto_parrafo_blanco_team != undefined &&
          texto_parrafo_blanco_team.length > 0 && (
            <>
              {/* mostrar solo en pantalla grande - espacio con el titulo mt-*/}
              <div className="row font_smaller_letter_white_cursos ms-5 mt-3 me-3    texto_parrafo_blanco_team">
                {texto_parrafo_blanco_team.map((unaLinea, index) => (
                  <div key={index}>{unaLinea} </div>
                ))}
              </div>
              <p/>
            </>
          )}

        {texto_parrafo_plequitas != undefined &&
          texto_parrafo_plequitas.length > 0 && (
            <>
              <div className="row font_smaller_letter_white_cursos ms-5 me-3 pb-3 justificar">
                <ul>
                  {texto_parrafo_plequitas.map((unaLinea, index) => (
                    <li key={index} className="mybullets3">
                      {unaLinea}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

        {iconos_team != undefined && iconos_team && (

          <IconosTeam email={email} phone={phone} linkedin={linkedin} />
        )}

        {firma != undefined && firma.length > 0 && (
          <>
            <div className="row font_smaller_letter_white_cursos ms-5 me-3 justificar">
              {firma.map((unaLinea, index) => (
                <div key={index}>{unaLinea}</div>
              ))}
            </div>
          </>
        )}
      </div>

      {/*Formulario de contacto  */}
      {formulario_contacto != undefined && formulario_contacto && (
        <>
          <FormularioContacto2 />
        </>
      )}

      {/* botones de configuracion */}

      {botones_configurador != undefined &&
        botones_configurador &&
        id_botones_configurador != undefined &&
        (id_botones_configurador == 1 ? (
          <div className="mt-5">
            <BotonesConfigurator botones_configurador={botones_configurador} />
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center row  h-75 ">
            <BotonesConfigurator botones_configurador={botones_configurador} />
          </div>
        ))}

      {boton_inicio_quiz != undefined && boton_inicio_quiz && (
        <div className="row mt-5 text-center mb-4 d-flex  justify-content-center ">
          <Link href="/quiz/1">
            <button
              type="button"
              className="btn p-3 ms-2 me-2 w-50 h-100 btn-card font-btn-card rounded-pill  ">
              JETZT CHECK STARTEN
            </button>
          </Link>
        </div>
      )}

      
          {botones_contacto != undefined &&
            botones_contacto && (
           fn_botones_contacto()
             
            
            )}

              
       
    </>
  );
};




const fn_botones_contacto = () => {
  return (
    <>
      <div className="row d-flex justify-content-center ">
        <div className="col-md-5  ">
          

          <a href="#" className="d-flex justify-content-center ">
            {/*  btn-outline-primary font_boton  */}
            <button
              type="button"
              className=" btn-leinstungen-magenta rounded-pill"
              data-bs-toggle="modal"
              data-bs-target={"#contactForm1"}>
              KONTAKTFORMULAR
            </button>
          </a>
        </div>
        <div className="col-md-5  ">
          <a href="tel:+49 (0) 421 22347567" className="d-flex justify-content-center ">
            {/*  btn-outline-primary font_boton  */}
            <button type="button" className=" btn-leinstungen-magenta rounded-pill   ">
              JETZT ANRUFEN
            </button>
          </a>
        </div>
      </div>

   
    </>
  );
};

