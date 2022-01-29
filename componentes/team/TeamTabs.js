import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ModalForm from '../../components/ModalForm'

import { servidor_url } from '../../config'

export default function TeamTabs({
  texto01,
  texto02,
  texto03,
  texto04,
  texto05,
}) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const styles = {
    // MuiButtonBase-root-MuiTab-root
    '& .MuiButtonBase-root.MuiTab-root': {
      fontSize: 11,
    },
  }

  return (
    <>
      <Box sx={{ width: '95%', height: '90%' }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            className="d-none d-md-block"
            aria-label="basic tabs example"
            centered
            sx={styles}
          >
            <Tab
              label="Selbstorganisation und Selbstverantwortung "
              {...a11yProps(0)}
            />
            <Tab label="Partnerschaftlicher Umgang " {...a11yProps(1)} />
            <Tab label="Empowerment und Entwicklung" {...a11yProps(2)} />
            <Tab label="Transparenz " {...a11yProps(3)} />
            <Tab
              label="Effizienz, Effektivität und Pragmatismus"
              {...a11yProps(4)}
            />
          </Tabs>
          <Tabs
            value={value}
            onChange={handleChange}
            className="d-flex d-md-none"
            variant="scrollable"
            scrollButtons={false}
            aria-label="basic tabs example"
            centered
            sx={styles}
          >
            <Tab
              label="Selbstorganisation und Selbstverantwortung "
              {...a11yProps(0)}
            />
            <Tab label="Partnerschaftlicher Umgang " {...a11yProps(1)} />
            <Tab label="Empowerment und Entwicklung" {...a11yProps(2)} />
            <Tab label="Transparenz " {...a11yProps(3)} />
            <Tab
              label="Effizienz, Effektivität und Pragmatismus"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>

        <OneTab
          indice={0}
          titulo="SELBSTORGANISATION UND SELBSTVERANTWORTUNG"
          texto={texto01}
          value={value}
          setValue={setValue}
        />
        <OneTab
          indice={1}
          titulo="PARTNERSCHAFTLICHER UMGANG"
          texto={texto02}
          value={value}
          setValue={setValue}
        />
        <OneTab
          indice={2}
          titulo="EMPOWERMENT UND ENTWICKLUNG"
          texto={texto03}
          value={value}
          setValue={setValue}
        />
        <OneTab
          indice={3}
          titulo="TRANSPARENZ"
          texto={texto04}
          value={value}
          setValue={setValue}
        />
        <OneTab
          indice={4}
          titulo="EFFIZIENZ, EFFEKTIVITÄT UND PRAGMATISMUS"
          texto={texto05}
          value={value}
          setValue={setValue}
        />
      </Box>
    </>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

function OneTab({ indice, titulo, texto, value, setValue }) {
  const myfuncion = () => {
    let proximo_indice = indice + 1
    if (proximo_indice > 4) {
      proximo_indice = 0
    }

    setValue(proximo_indice)
  }

  const [isShown, setIsShown] = React.useState(false)

  return (
    <>
      <TabPanel value={value} index={indice} className=" alto-tab  ">
        <div className="ps-lg-5 ms-lg-5 col-md-9 col-10">
          <div className="fuente-titulo-team-tab mt-2 mb-4">{titulo}</div>

          {texto != undefined &&
            texto.length > 0 &&
            texto.map((unaLinea, index) => (
              <div className="fuente-texto-cursos" key={index}>
                {unaLinea}
                <p />
              </div>
            ))}
        </div>

        <div onClick={myfuncion} className="ubicacion-boton-team">
          <img
            height={55}
            width={55}
            className="boton_flecha  "
            src={`${servidor_url}/img/leistungen/boton_flecha_magenta.svg`}
            alt=""
          />
        </div>
      </TabPanel>
    </>
  )
}
