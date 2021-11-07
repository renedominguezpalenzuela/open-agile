// Footer

export default function Footer() {
  return (
<>

  <footer id="myfooter" className="mt-5 no-gutter">


    <div id="rowfoot01" className="row  color_background footer_path ps-2  mt-5 pt-5">
     
      <div className="col-auto  ">
        <div className="font_facit_title_small p-3">OPEN AGILE NEWSLETTER</div>
        <div className="font_facit_text_small ps-3">LASS UNS IN KONTAKT BLEIBEN</div>
        {/* <div className="row d-flex align-items-center "> */}
       {/* <div className="pt-4 text-center start-25">

        <img className="img-fluid logo-img-footer2"  src="img/logo/5.svg" />
        </div>
         */}
        {/* </div> */}
         
      </div>

      <div className="col-auto   ps-1 ">
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

        <div className="row  pt-1 ps-1">
          <div className="col-auto    ">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
            <label className="ms-2 form-check-label font_facit_text_very_small">
                         Ja, ich bin einverstanden.*
            </label>
          </div>
        </div>

        <div className="row  mt-2 ps-1 font_facit_text_very_small">
          <div className="col-auto">
            <div>* Wir respektieren deine Daten. Mit Klick auf den oben stehenden Button ‘Ja, ich bin einverstanden’ erklärst du dich</div>
            <div>insbesondere mit dem Punkt 'Kontaktformular' unserer Datenschutzerklärung einverstanden. Weitere Informationen zum</div>
            <div> Datenschutz findest du in unserer Datenschutzerklärung.</div>
          </div>
          
        </div>

          <div className="row  mt-3 mb-5 ps-1 font_facit_text_very_small d-flex align-items-center  ">
          {/* <div className="col-auto me-5 pe-5  mt-4 ms-1 d-flex align-items-center  text-center  "> */}
          <div className="col-auto ">
        <button type="button" className="btn boton_card rounded-pill   ">
          <div className=" font_facit_boton_small "> ANMELDEN</div>
        </button>
        </div>
      {/* </div>  */}
        </div>

      </div>

   

    </div>



{/* 
<div id="rowfoot05a" className="row color_background justify-content-center">

      <div className="col-3 ">
        <img className="img-fluid logo-img navbar-brand"  src="img/logo/5.svg" />
      </div>
      <div className="col-9">
      </div>
   


</div> */}

    <div id="rowfoot05" className="row color_background g-5 ps-5 pe-5">

      <div className="col ">
        <div className="">
          {/* <img className="img-fluid   logo-img-footer" src='img/logo/4.svg' /> */}
              <img className="img-fluid logo-img-footer2"  src="img/logo/5.svg" />
        </div>
        <div className="font_facit_text_very_small mt-1">

           Die Open Agile hilft Unternehmen dabei, ihre MitarbeiterInnen zu entwickeln und Kulturen zu transformieren. Mit über 40 Jahren Erfahrung und über 1000 ausgebildeten Trainerinnen und Trainern zählt sie zu den renommiertesten Akademien Deutschlands.
        </div>

        {/* <div>
          <img className="img-fluid  " src='img/footer-2-1280x318-1-400x223-1-300x167.png' />
        </div> */}

      </div>
      <div className="col ">

      <div className="row ">
        <div className="font_facit_text_very_small mt-3 mb-3">KONTAKT</div>
        </div>


        <div >
          <a className="color_contactos ms-3" href="tel:03012345678">030 12345678</a>
        </div>
        <div >
          <a className="color_contactos ms-3" href="mailto:mail@gmail.de">mail@gmail.de</a>
        </div>


      </div>



      <div className="col">
        <div className="font_facit_text_very_small mt-3">DIE OPEN AGILE</div>
        <div className="font_facit_text_very_very_small_gris mt-3">
          <div >About Open Agile</div>
          <div>Trainings</div>
          <div>Das Team</div>
          <div>Jobs</div>
          <div>Blog</div>
        </div>
      </div>


      <div className="col">
        <div className="font_facit_text_very_small mt-3">AUSBILDUNGEN & PROGRAMME</div>
        <div className="font_facit_text_very_very_small_gris mt-3">
          <div>Business Trainer Ausbildung</div>
          <div>Leadership Programm</div>
          <div>New Work Faciliator</div>
        </div>
      </div>

      <div className="col">
        <div className="font_facit_text_very_small mt-3">TRAININGS</div>
        <div className="font_facit_text_very_very_small_gris mt-3">
          <div>Training as A Service</div>
          <div>Masterclass Organisationscoaching</div>
        </div>
      </div>

    </div>

    <div id="rowfoot06" className="row color_background p-5 font_facit_text_very_very_small_gris">
      <div className="col-4">
      </div>
      <div className="col">
         Kontakt
      </div>
      <div className="col">
         AGB
      </div>
      <div className="col">
        Impressum
      </div>
      <div className="col">
        Datenschutz
      </div>

      <div className="col-4">
      </div>

    </div>

  </footer>
</>
  );
}
