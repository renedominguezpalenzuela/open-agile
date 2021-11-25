export default function FormularioContacto() {


    return (
<>
    <div className="row d-flex mt-5 font_small_letter  justify-content-center">
        Verpasse keine Neuigkeiten rund um Open Agile und abonniere unseren Newsletter. 
        
    </div>


    <div className="row  d-flex  justify-content-center">
        <div className="col-8 color_background p-4 border">
            <div className="row g-2  align-items-center mt-1">
                <div className="col-auto ">
                    <input type="text " className="form-control " placeholder="Vorname"></input>
                </div>
                <div className="col-auto ">
                    <input type="text" className="form-control " placeholder="Nachname"></input>
                </div>
                <div className="col-auto">
                    <input type="text" className="form-control " placeholder="E-Mail-Adresse"></input>
                </div>
            </div>

            <div className="row mt-2 pt-1 ps-1">
                <div className="col-auto    ">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                    <label className="ms-2 form-check-label font_facit_text_very_small">
                         Ja, ich bin einverstanden.*
                    </label>
                </div>
            </div>

            <div className="row  mt-2 ps-1 font_facit_text_very_small">
                <div className="col-auto justificar">
                    <div>* Wir respektieren deine Daten. Mit Klick auf den oben stehenden Button ‘Ja, ich bin einverstanden’ erklärst du dich
                    insbesondere mit dem Punkt 'Kontaktformular' unserer Datenschutzerklärung einverstanden. Weitere Informationen zum
                     Datenschutz findest du in unserer Datenschutzerklärung.</div>
                </div>

            </div>

            <div className="row  mt-3 mb-2 ps-1 font_facit_text_very_small d-flex justify-content-start  ">
         
                    <div className="col-auto ">
                        <button type="button" className="btn boton_card rounded-pill   ">
                            <div className=" font_facit_boton_small "> ANMELDEN</div>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    </>

    )
}