import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ModalFormConfigurator from "../../components/ModalFormConfigurator";
import ReactMarkdown from "react-markdown";
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

export default function LeistungenTabs({
  texto01,
  texto02,
  texto03,
  titulo01,
  titulo02,
  titulo,
}) {
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
      <Box className="" sx={{ width: "100%", height: "90%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            className="d-none d-md-block"
            scrollButtons={true}
            aria-label="basic tabs example"
            centered>
            <Tab label={`01. ${titulo01}`} {...a11yProps(0)} />
            <Tab label={`02. ${titulo02}`} {...a11yProps(1)} />
            <Tab label="03. KONTAKT AUFNEHMEN" {...a11yProps(2)} />
          </Tabs>
          <Tabs
            value={value}
            onChange={handleChange}
            className="d-flex d-md-none"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example">
            <Tab label={`01. ${titulo01}`} {...a11yProps(0)} />
            <Tab label={`02. ${titulo02}`} {...a11yProps(1)} />
            <Tab label="03. KONTAKT AUFNEHMEN" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0} className="alto-tab  ">
          <div className="ps-md-5 ps-2 ms-md-5 ms-2 pe-2 row col col-md-6">
            <div className=" organization-text mt-2 mb-4   text-left">
              {titulo01}
            </div>

            {
              texto01 != undefined && texto01.length > 0 && (
                // texto01.map((unaLinea, index) => (
                <ReactMarkdown className="fuente-texto-cursos  mybullets">
                  {texto01}
                </ReactMarkdown>
              )
              // ))
            }
          </div>

          <div className="ubicacion-boton" onClick={() => myfuncion(1)}>
            <img
              className="boton_flecha "
              width={45}
              height={45}
              src={`https://js-agileweb-files.s3.us-east-2.amazonaws.com/img/leistungen/boton_flecha_magenta.svg`}
              alt=""
              loading="lazy" 
            />
          </div>
        </TabPanel>

        <TabPanel value={value} index={1} className=" alto-tab  ">
          <div className="ps-md-5 ps-2 ms-md-5 ms-2 pe-2 row col col-md-6">
            <div className=" organization-text mt-2 mb-4  text-left ">
              {titulo02}
            </div>
            {
              texto02 != undefined && texto02.length > 0 && (
                // texto02.map((unaLinea, index) => (
                <ReactMarkdown className="fuente-texto-cursos  mybullets">
                  {texto02}
                </ReactMarkdown>
              )
              // ))
            }
          </div>

          <div className="ubicacion-boton " onClick={() => myfuncion(2)}>
            <img
              className="boton_flecha "
              width={45}
              height={45}
              src={`https://js-agileweb-files.s3.us-east-2.amazonaws.com/img/leistungen/boton_flecha_magenta.svg`}
              alt=""
              loading="lazy" 
            />
          </div>
        </TabPanel>

        <TabPanel value={value} index={2} className=" alto-tab">
          <div className="ps-md-5  ms-md-5  row w-100">
            <div className="col-md-5 col-lg-6 fuente-texto-cursos ">
              <div className=" organization-text mt-2 mb-4  text-left">
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

            <div className="col-md-6 col-lg-5 d-flex align-items-start">
              <div className="row ms-md-3 ps-md-3 ms-lg-5 ps-lg-3 ">
                <div className="col-12">
                  <div className=" organization-text mt-2 mb-4 ">&nbsp;</div>

                  <a href="#" className="mx-auto d-flex justify-content-start">
                    {/*  btn-outline-primary font_boton  */}
                    <button
                      type="button"
                      className=" btn-leinstungen rounded-pill "
                      data-bs-toggle="modal"
                      data-bs-target={"#contactForm1"}>
                      KONTAKTFORMULAR
                    </button>
                  </a>
                </div>
                <div className="col-12 mt-4">
                  <a
                    href="tel:+49 (0) 421 22347567"
                    className="mx-auto d-flex  justify-content-start">
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
              className="boton_flecha "
              width={45}
              height={45}
              src={`https://js-agileweb-files.s3.us-east-2.amazonaws.com/img/leistungen/boton_flecha_magenta.svg`}
              alt=""
              loading="lazy" 
            />
          </div>
        </TabPanel>
      </Box>

      <ModalFormConfigurator
        titulo="KONTAKTFORMULAR"
        frase="Jetzt Kontakt aufnehmen!"
        id={1}
      />
    </>
  );
}
