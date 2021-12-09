//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
import Link from "next/link";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { respuestasState } from "./states/state";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextoBloque01 from "./textobloque01";
import MenuNavBar from "./MenuNavBar";
import Respuesta from "./respuesta";

import { servidor_url } from "../config";

import * as React from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

const styles = {
  ".MuiFormControlLabel-label": {
    textAlign: "justify",
    fontSize: "0.9rem",
  },
};

 const stylesCuadrado = { color: "#ffffff",  "&.Mui-checked": {color: "#e42078",  }};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

//Al contar los resultados solo contar la cantidad de puntos posibles
const ancho_preguntas = (preguntas) => {
  let ancho_maximo = 0;
  preguntas.forEach((unaPregunta) => {
    if (unaPregunta.answer.length > ancho_maximo) {
      ancho_maximo = unaPregunta.answer.length;
    }
  });

  let otras_clase = "  w75";

 
  if (ancho_maximo >= 150) {
    return "col-10" + otras_clase;
  } else if (ancho_maximo >= 70 && ancho_maximo < 150) {
    return "col-8" + otras_clase;
  } else if (ancho_maximo >= 10 && ancho_maximo < 70) {
    return "col-3" + otras_clase;
  } else {
    return "col-1" + otras_clase;
  }
};

export default function Content01andMenuWithQuestions({
  id,
  question,
  answers,
  titulo,
  next_link,
}) {
  const cambio_respuesta = (event, id) => {
    let respuesta_usuario = event.target.value;
    const newList = replaceItemAtIndex(respuestas, id, respuesta_usuario);
    setRespuestas(newList);
  };

  const [respuestas, setRespuestas] = useRecoilState(respuestasState);

  const [checked1, setChecked1] = React.useState(false);
  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    cambio_respuesta(event, id);
  };

  const [checked2, setChecked2] = React.useState(false);
  const handleChange2 = (event) => {
    setChecked1(false);
    setChecked2(event.target.checked);
    setChecked3(false);
    setChecked4(false);
    cambio_respuesta(event, id);
  };

  const [checked3, setChecked3] = React.useState(false);
  const handleChange3 = (event) => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(event.target.checked);
    setChecked4(false);
    cambio_respuesta(event, id);
  };

  const [checked4, setChecked4] = React.useState(false);
  const handleChange4 = (event) => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(event.target.checked);
    cambio_respuesta(event, id);
  };

  const router = useRouter();

  //inicializacion
  React.useEffect(() => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
  }, [router.asPath]);

  return (
    <>
      {/* Fila root de todos los elementos */}
      <div id="row03" className="row  menu_superior mt-2 g-0  ">
        {/* Columna 1 Logo superior */}
        <div className="col ms-3  text-center   ">
          <a className="navbar-brand " href="/">
            <img className="   " src={`${servidor_url}/img/logo/5.svg`} />
          </a>
        </div>

        {/* Columna2 central */}
        <div className=" col mt-3 text-center   ">
          {/* navbar */}
          <div className="row g-0 d-none d-lg-block ">
            <MenuNavBar />
          </div>

          <div className="row  h-100  w-100   my_quiz d-flex align-items-center justify-content-center ">
            {/* Tema de la pregunta */}
            <div className="row g-0  my_quiz_titulo  ">
              {titulo != undefined && titulo != "" && (
                <div className="row  text-center mt-3  ">
                  <h3 className="font_quiz_line1  "> {titulo}</h3>
                </div>
              )}
            </div>

            {/* Pregunta */}
            <div className="row  g-0  my_quiz_pregunta ">
              {question != undefined && question != "" && (
                <div className="row  text-center   ">
                  <h6 className="font_second_line3  "> {question}</h6>
                </div>
              )}
            </div>

            <div className="row text-center mt-3 my_quiz_respuestas w-100  ">
              {/* Respuestas */}
              <div
                id="altcontainer"
                className="row   d-flex align-items-start justify-content-center">
                <div className={ancho_preguntas(answers)}>
                  <div className="row   d-flex justify-content-start">
                    <FormControlLabel className="p-1" sx={styles} control={
                        <Checkbox checked={checked1} value="1" color="primary" onChange={handleChange1} sx={stylesCuadrado }
                        />
                      } label={answers[0].answer}
                    />
                  </div>
                  <div className="row   d-flex justify-content-start">
                     <FormControlLabel className="p-1" sx={styles} control={
                        <Checkbox checked={checked2} value="2" color="primary" onChange={handleChange2} sx={stylesCuadrado }
                        />
                      } label={answers[1].answer}
                    />
                  </div>
                  <div className="row  d-flex justify-content-start">
                     <FormControlLabel className="p-1" sx={styles} control={
                        <Checkbox checked={checked3} value="3" color="primary" onChange={handleChange3} sx={stylesCuadrado }
                        />
                      } label={answers[2].answer}
                    />
                  </div>
                  <div className="row  d-flex justify-content-staendrt">
                    <FormControlLabel className="p-1" sx={styles} control={
                        <Checkbox checked={checked4} value="4" color="primary" onChange={handleChange4} sx={stylesCuadrado }
                        />
                      } label={answers[3].answer}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row text-center pb-4 my_quiz_boton ">
              {/* Boton */}
              <div className="row  text-center mt-5 mb-4 d-flex  justify-content-center   ">
                <Link href={`${next_link}`}>
                  <button
                    type="button"
                    className=" btn p-3 ms-2 me-2 w-25 mb-5    btn-card font-btn-card rounded-pill  ">
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tercera columna, boton agile check arriba derecha */}
        <div className="col mt-4 text-center   ">
          <a href="/quizstart">
            <button
              type="button"
              className="btn mt-1 btn-outline-primary font_boton  ">
              Agile Check
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
