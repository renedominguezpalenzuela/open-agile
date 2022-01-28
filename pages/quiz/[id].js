import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import MenuFlotante from "../../components/MenuFlotante";
import Footer from "../../components/Footer";

import Content02Cursos from "../../components/Content02Cursos";
import Content03 from "../../components/Content03";
import Content04 from "../../components/Content04";
import Content05 from "../../components/Content05";
import Texto01 from "../../components/crashkurse/texto01";
import Tabla01 from "../../components/crashkurse/tabla01";
import Tabla02 from "../../components/crashkurse/tabla02";

import Card01Lista from "../../components/Card01Lista";
import MenuFlotanteBoton from "../../components/MenuFlotanteBoton";

import AreaSuperior from "../../componentes/area_superior/AreaSuperior";

import { useRecoilState } from "recoil";
import { respuestasState } from "../../componentes/states/state";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuNavBar from "../../componentes/area_superior/MenuNavBar";
import Logo from "../../componentes/area_superior/Logo";
import BotonAgileCheck from "../../componentes/area_superior/BotonAgileCheck";
import Titulo from "../../componentes/area_superior/Titulo";

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
    color: "white",
  },
};

const stylesCuadrado = {
  color: "#ffffff",
  "&.Mui-checked": { color: "#e42078" },
};

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

  let otras_clase = "";

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

// import MenuSuperior from "../components/MenuSuperior";

// import Content01andMenuWithQuestions from "../../componentes/area_superior/Content01andMenuWithQuestions.js";

import { servidor_url } from "../../config";

//----------------------------------------------------------------------------------------------------------
//            Pagina inicial principal
//----------------------------------------------------------------------------------------------------------

export default function Home({ quiz, todas_preguntas }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    titulo,
    number,
    question,
    answers,
    correct_answer,
    next_link,
    prior_link,
  } = quiz;

  const total_preguntas = todas_preguntas.length;

  return (
    <>
      <Head>
        <title>{"Quiz"}</title>
        <meta name="description" content="Quiz" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script async src={`${servidor_url}/js/chat.js`} /> */}
        {/* <script async src={`${servidor_url}/js/menu.js`} /> */}
      </Head>

      {/*Contenedor*/}
<<<<<<< HEAD
      <div id="principal" className="bannermain-quiz-questions">
        <MenuFlotanteBoton />
=======
>>>>>>> 30e0c3c825144ec8060e1cbbb7b11f95607aaecd

      <div class=" d-none  d-md-block">
        <div id="principal" className="bannermain-quiz-questions ">
          <MenuFlotanteBoton />
          <div className="item-logo  d-flex align-items-center justify-content-center">
            <Logo />
          </div>

          <div className="item-menu  d-flex align-items-center justify-content-center">
            <MenuNavBar />
          </div>

          <div className="item-boton d-flex align-items-center justify-content-center">
            <BotonAgileCheck />
          </div>
          {/* </div> */}

          <Content01andMenuWithQuestions
            id={id}
            question={question}
            answers={answers}
            titulo={titulo}
            next_link={next_link}
            total_questions={total_preguntas}
          />
        </div>

        <MenuFlotante />
      </div>

      <div class="  d-md-none">
        <div id="principal" className=" ">
        
          <Content01andMenuWithQuestions
            id={id}
            question={question}
            answers={answers}
            titulo={titulo}
            next_link={next_link}
            total_questions={total_preguntas}
          />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const url = `${servidor_url}/api/quiz/${encodeURIComponent(id)}`;
  const res = await fetch(url);
  const quiz = await res.json();

  const url2 = `${servidor_url}/api/quiz`;
  const res2 = await fetch(url2);

  const todas_preguntas = await res2.json();

  return {
    props: {
      quiz,
      todas_preguntas,
    },
  };
};

function Content01andMenuWithQuestions({
  id,
  question,
  answers,
  titulo,
  next_link,
  total_questions,
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


  const checkboxes=()=>{
    return( <>
    
     <div className="row   d-flex justify-content-start">
                <FormControlLabel
                  className="p-1"
                  sx={styles}
                  control={
                    <Checkbox
                      checked={checked1}
                      value="1"
                      color="primary"
                      onChange={handleChange1}
                      sx={stylesCuadrado}
                    />
                  }
                  label={answers[0].answer}
                />
              </div>
              <div className="row   d-flex justify-content-start">
                <FormControlLabel
                  className="p-1"
                  sx={styles}
                  control={
                    <Checkbox
                      checked={checked2}
                      value="2"
                      color="primary"
                      onChange={handleChange2}
                      sx={stylesCuadrado}
                    />
                  }
                  label={answers[1].answer}
                />
              </div>
              <div className="row  d-flex justify-content-start">
                <FormControlLabel
                  className="p-1"
                  sx={styles}
                  control={
                    <Checkbox
                      checked={checked3}
                      value="3"
                      color="primary"
                      onChange={handleChange3}
                      sx={stylesCuadrado}
                    />
                  }
                  label={answers[2].answer}
                />
              </div>
              <div className="row  d-flex justify-content-start">
                <FormControlLabel
                  className="p-1"
                  sx={styles}
                  control={
                    <Checkbox
                      checked={checked4}
                      value="4"
                      color="primary"
                      onChange={handleChange4}
                      sx={stylesCuadrado}
                    />
                  }
                  label={answers[3].answer}
                />
              </div>
    </>)
  }

  return (
    <>
      {/* -------------- Desktop  ---------------------------------------------------*/}

      <div className="  item-titulo my_quiz d-none  d-md-block ">
        <div className="row  g-0  my_quiz_titulo  ">
          {titulo != undefined && titulo != "" && (
            <div className="row  text-center mt-3  ">
              <h3 className="font_quiz_line1  "> {titulo}</h3>
            </div>
          )}
        </div>

        <div className="row  g-0  my_quiz_pregunta ">
          {question != undefined && question != "" && (
            <div className="row  text-center   ">
              <h6 className="font_second_line3  "> {question}</h6>
            </div>
          )}
        </div>

        <div className="row text-center mt-5 my_quiz_respuestas w-100  ">
          <div id="altcontainer"  className="row   d-flex align-items-start justify-content-center ">
            <div className={ancho_preguntas(answers)}>
             {checkboxes()}
            </div>
          </div>
        </div>

        <div className="row text-center mt-4  d-flex  justify-content-center texto_total_preguntas">
          {id} / {total_questions}
        </div>

        <div className="row text-center mt-3  my_quiz_boton ">
          <div className="row  text-center   d-flex  justify-content-center   ">
            <Link href={`${next_link}`} className=" d-flex align-items-start ">
              <button
                type="button"
                className=" btn  ms-2 me-2 w-25 mb-5    btn-card font-btn-card rounded-pill  ">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* -------------- MOBIL ------------------------------------ */}
      <div class="  d-md-none bannermain-quiz-questions-mobile">
        <div className="  my_quiz_titulo-mobile  ">
          {titulo != undefined && titulo != "" && (
            <h3 className="font_quiz_line1  "> {titulo}</h3>
          )}
        </div>

        <div className=" my_quiz_pregunta-mobile ">
          {question != undefined && question != "" && (          
              <h6 className="font_second_line3 text-center "> {question}</h6>         
          )}
        </div>

        <div className="  my_quiz_respuestas-mobile ">
          {checkboxes()}
        </div> 

         <div className=" text-center texto_total_preguntas my_quiz_total_preguntas-mobile">
          {id} / {total_questions}
        </div>


          <div className=" my_quiz_boton-mobile ">
         
            <Link href={`${next_link}`} className=" d-flex align-items-start ">
              <button
                type="button"
                className=" btn     btn-card font-btn-card rounded-pill  ">
                Next
              </button>
            </Link>
         
        </div>



      </div>
    </>
  );
}


