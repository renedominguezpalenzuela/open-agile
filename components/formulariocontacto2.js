export default function FormularioContacto2() {


    return (
<>
    {/*    <div className="row d-flex mt-5 font_small_letter  justify-content-center">
        Verpasse keine Neuigkeiten rund um Open Agile und abonniere unseren Newsletter. 
        
    </div> */}

    
               


    <div className="row mt-5  d-flex  justify-content-center">
        <div className="col-8 color_background  ">

            <div className="row d-flex mt-3 font_titulo_formulario justify-content-center">
                    LASS UNS IN KONTAKT BLEIBEN         
            </div>

            <div className="row d-flex mt-1 mb-4 font_subtitulo_formulario justify-content-center">
                     OPEN AGILE NEWSLETTER        
            </div>

            <div className="row  g-0 d-flex align-items-center   justify-content-center mt-1">
                <div className="col-auto   ">
                 
                    <div className="group row">
                        <input className="input-contact-form " type="text" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Name eingeben</label>
                    </div>

                    <div className="group row">
                        <input type="text" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="label-formulario ">E-Mail eingeben</label>
                    </div>

            </div>


            <div className="row g-0  d-flex align-items-center   justify-content-center mt-1 ">
                <div className="inputgrupo   d-flex align-items-center   justify-content-center ">
                    <input className="me-2" type="checkbox" value=""/> 
                         <span className="font_texto_formulario">
                           Ja, ich bin mit dem AGBs des Newsletters einverstanden
                         </span>
                    
                </div>
            </div>
            


            </div>
            <div className="row g-0  d-flex align-items-center   justify-content-center mt-1 ">
          

                    <div className="group w-25 mt-4 mb-4 ">
                        <button type="button" className="btn boton_card  w-100 font_facit_boton_small">
                                    ANMELDEN
                        </button>
                    </div>
             


            </div>

           
</div>
</div>
</>

    )
}