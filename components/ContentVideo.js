
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faVolumeUp } from "@fortawesome/free-solid-svg-icons"; 
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        console.log(windowSize)
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

export default function ContentVideo() {
  const [volumen, setvolumen] = useState(false);
  const botonVolumen = useRef();
  const size = useWindowSize();

  const cambiar_volument = () => {
    setvolumen(!volumen);
    botonVolumen.current.muted = !botonVolumen.current.muted;
  };

  return (
    <div className="mt-20 pt-md-0" style={{
      paddingTop: '120px'
    }}>
      {size.width !== undefined && size.width >= 768 && <div className="text-center contenedor_video">
        <div className="ratio ratio-16x9 ">
          <video autoPlay loop muted playsInline ref={botonVolumen} >
            <source src={`video/Imagefilm_Open_Agile_Low1.mp4`}  type="video/mp4" />
          </video>

            <div className="icono_volumen" onClick={cambiar_volument}>

          
              {volumen ? (
                <FontAwesomeIcon
                  id="boton_volumen"
                   width="55"
                  icon={faVolumeUp}
                  className="volumen_icon_size"
                  color="white"
                />
              ) : (
                <FontAwesomeIcon
                  id="boton_volumen"
                   width="50"
                  icon={faVolumeMute}
                  className="volumen_icon_size"
                  color="white"
                />
              )}
            </div>
        </div>
      </div>}
    </div>
  );
}
