import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ModalFormConfigurator from "../../components/ModalFormConfigurator";

import { servidor_url } from "../../config";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LeistungenTabs({ texto01, texto02, texto03, titulo }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const myfuncion = (proximo_indice) => {
    setValue(proximo_indice);
  };

  const [isShown, setIsShown] = React.useState(false);

  return (
    <>
      <Box className="" sx={{ width: "100%" , height:"90%"}}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered>
            <Tab label={`01. ${titulo}`} {...a11yProps(0)} />
            <Tab label="02. BEISPIEL VORGEHEN" {...a11yProps(1)} />
            <Tab label="03. KONTAKT AUFNEHMEN" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0} className="alto-tab  ">
          <div className="ps-5 ms-5 row w-50   ">
          <div className=" fuente-titulo-servicios mt-2 mb-4   ">
            {titulo}
          </div>

          {texto01 != undefined &&
            texto01.length > 0 &&
            texto01.map((unaLinea, index) => (
              <div className="fuente-texto-cursos" key={index}>
            

               <p> {unaLinea}</p>
                
              </div>
            ))}

             
        </div>

          <div className="ubicacion-boton" onClick={() => myfuncion(1)}>
            <img
              className="boton_flecha"
              src={`${servidor_url}/img/leistungen/boton_flecha_magenta.svg`}
              alt=""
            />
          </div>
        </TabPanel>

        <TabPanel value={value} index={1} className=" alto-tab  ">
          <div className="ps-5 ms-5  w-50  ">
            <div className=" fuente-titulo-servicios mt-2 mb-4   ">
              BEISPIEL VORGEHEN
            </div>
            <ul>
              {texto02 != undefined &&
                texto02.length > 0 &&
                texto02.map((unaLinea, index) => (
                  <li key={index} className="fuente-texto-cursos mybullets">
                    {" "}
                    {unaLinea}
                  </li>
                ))}
            </ul>
          </div>

          <div className="ubicacion-boton " onClick={() => myfuncion(2)}>
            <img
              className="boton_flecha  "
              src={`${servidor_url}/img/leistungen/boton_flecha_magenta.svg`}
              alt=""
            />
          </div>
        </TabPanel>

        <TabPanel value={value} index={2} className=" alto-tab">
          <div className="ps-5 ms-5 mb-5 row w-100 h-100  ">
            <div className="col-6   fuente-texto-cursos ">
              <div className=" fuente-titulo-servicios mt-2 mb-4   ">
                KONTAKT AUFNEHMEN
              </div>

              <p>
                Interessierst Du dich für einen ersten Austausch, ob eine
                evolutionäre Zusammenarbeit auch für Deine Organisation Sinn
                stiften kann?{" "}
              </p>
              <p>
                Ruf’ uns gerne zu einem kostenlosen Erstgespräch an oder
                schreibe eine Mail. Wir freuen uns auf Dich!
              </p>
            </div>

            <div className="col-5    d-flex  align-items-start">
              <div className="row ms-5 ps-3">
                <div className="col-12  ">
                  <div className=" fuente-titulo-servicios mt-2 mb-4   ">
                    &nbsp;
                  </div>

                  <a href="#">
                    {/*  btn-outline-primary font_boton  */}
                    <button
                      type="button"
                      className=" btn-leinstungen rounded-pill"
                      data-bs-toggle="modal"
                      data-bs-target={"#contactForm1"}>
                      KONTAKTFORMULAR
                    </button>
                  </a>
                </div>
                <div className="col-12 mt-4">
                  <a href="tel:+49 (0) 421 22347567">
                    {/*  btn-outline-primary font_boton  */}
                    <button
                      type="button"
                      className=" btn-leinstungen rounded-pill   ">
                      JETZT ANRUFEN
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="ubicacion-boton" onClick={() => myfuncion(0)}>
            <img
              className="boton_flecha  "
              src={`${servidor_url}/img/leistungen/boton_flecha_magenta.svg`}
              alt=""
            />
          </div>
        </TabPanel>
      </Box>

      <ModalFormConfigurator
        titulo="KONTAKTFORMULAR"
        frase="Jetzt Kontakt aufnehmen!"
        id={1}
      />
      {/* <ModalForm  id={1} quartal={1} titulo={"title"} frase="Jetzt anmelden!" date1={"01.01.2022"} date2={"01.02.2022"} day={""} link={""} /> */}
    </>
  );
}
