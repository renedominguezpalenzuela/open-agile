//----------------------------------------------------------------------------------------------------------
//            Area superior principal:
//----------------------------------------------------------------------------------------------------------
import Link from 'next/link';
import {useRecoilState} from 'recoil';
import { useRouter } from 'next/router'
import {respuestasState} from './states/state';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextoBloque01 from "./textobloque01";
import MenuNavBar from "./MenuNavBar";
import Respuesta from "./respuesta";


import { servidor_url } from "../config";


import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


function replaceItemAtIndex(arr, index, newValue)   { 
  console.log(index) ;
  console.log(arr);

    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

//Al contar los resultados solo contar la cantidad de puntos posibles
  

export default function Content01andMenuWithQuestions({id, question, answers, titulo}) {


   


  const [respuestas, setRespuestas] = useRecoilState(respuestasState);

  const [checked1, setChecked1] = React.useState(false);

 const cambio_respuesta = (event, id) => {
    let respuesta_usuario = event.target.value;

    // console.log("respuesta antes");
    //          console.log(respuestas);
            

            const newList = replaceItemAtIndex(respuestas, id, respuesta_usuario);
           
          //  console.log("new list");
            setRespuestas(newList);

            // console.log("respuesta despues");
            // console.log(newList);
 };

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

    React.useEffect(() => {

    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    }, [router.asPath]);


    
  return (
<>




  <div id="row03" className="row  menu_superior mt-2 g-0  ">

    <div className="col ms-3  text-center   ">
      <a className="navbar-brand " href="/">
     
        <img className="   " src= {`${servidor_url}/img/logo/5.svg`} />
      </a>
    </div>


    <div className=" col mt-3 text-center   ">
      <div className="row g-0 d-none d-lg-block ">
        <MenuNavBar/>
      </div>

      <div className="row g-0  mt-2 ">
      {titulo!=undefined && titulo!="" &&
          <div className="row  text-center mt-3  ">
          <h3 className="font_second_line1  "> {titulo}</h3>
          </div>
      } 

   
      
        
       
      </div>


        <div className="row g-0  mt-1 ">


      

        {question!=undefined && question!="" &&

       
            <div className="row  text-center mt-1  ">
                 <h6 className="font_second_line3  "> {question}</h6>
            </div>
        } 

    
        </div>

 <div id="altcontainer" className="row notranslate g-0  mt-2 ms-5 ">
    <FormControlLabel className="p-1"
      control={<Checkbox checked={checked1} value="1" onChange={handleChange1} />}
      label={answers[0].answer}
    />

    <FormControlLabel className="p-1"
      control={<Checkbox checked={checked2} value="2" onChange={handleChange2} />}
      label={answers[1].answer}
    />

    <FormControlLabel className="p-1"
      control={<Checkbox checked={checked3} value="3" onChange={handleChange3} />}
      label={answers[2].answer}
    />

    <FormControlLabel className="p-1"
      control={<Checkbox checked={checked4} value="4" onChange={handleChange4} />}
      label={answers[3].answer}
    />

    </div>


     
{/*      
      <div id="altcontainer" className="row notranslate g-0  mt-2 ms-5 text-center">
          <FormControl component="fieldset" >
          <FormLabel component="legend">{respuesta_usuario}</FormLabel>
          <RadioGroup  name="radio-buttons-group"  defaultValue="-1"  onChange={e=>{
            console.log("respuesta antes");
             console.log(respuestas);
            respuesta_usuario = e.target.value;

            const newList = replaceItemAtIndex(respuestas, id, e.target.value);
           
           console.log("new list");
            setRespuestas(newList);

            console.log("respuesta despues");
            console.log(newList);
          }}>
              { answers!=undefined && answers!="" && 
                  answers.map ((unaAnswer, index)=>
                  <FormControlLabel key={index} value={index} control={<Radio   />} label={unaAnswer.answer}  />                               
              )} 

              
          </RadioGroup>
          </FormControl>
      </div>  */}


       
    </div>



    <div className="col mt-4 text-center   ">
       <a href="/quizstart"> 
        <button type="button" className="btn mt-1 btn-outline-primary font_boton  ">Agile Check</button>
       </a>
    </div>




  </div>


  


            </>
  );
}
