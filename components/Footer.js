// Footer

export default function Footer() {
  return (
<>

  <footer className="mt-5 ">

    <div id="rowfoot01" className="row color_background footer_path  mt-5 p-5">

      <div id="colfoot01" className="col-4 ">
        <div className="font_facit_title_very_small">TAM NEWSLETTER</div>
        <div className="font_facit_text_small">LASS UNS IN KONTAKT BLEIBEN</div>
      </div>

      <div id="colfoot02" className="col-8 ">

        <div id="rowfoot02" className="row  p-4">

          <div id="colfoot03" className="col-9">
            <div id="rowfoot04" className="row">
              <form>
                <div className="row ">

                  <div className="col">

                    <input type="text" className="form-control" placeholder="Vorname"></input>
                  </div>
                  <div className="col">

                    <input type="text" className="form-control" placeholder="Nachname"></input>
                  </div>
                  <div className="col ">

                    <input type="text" className="form-control" placeholder="E-Mail-Adresse"></input>
                  </div>

                </div>

                <div className="row pt-3">
                  <div className="col">

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                      <label className="form-check-label font_facit_text_very_small" >
                         Ja, ich bin einverstanden.*
                      </label>
                    </div>
                  </div>
                </div>
              </form>

            </div>



          </div>

          <div id="colfoot04" className="col pt-3">
            <button type="button" className="btn boton_card rounded-pill shadow-lg"> <div className=" font_facit_boton_small ms-2 me-2"> ANMELDEN</div> </button>
          </div>

        </div>

        <div id="rowfoot03" className="row font_facit_text_very_small_gris ps-3 ms-5 me-5">
            * Wir respektieren deine Daten. Mit Klick auf den oben stehenden Button ‘Ja, ich bin einverstanden’ erklärst du dich insbesondere mit dem Punkt 'Kontaktformular' unserer Datenschutzerklärung einverstanden. Weitere Informationen zum Datenschutz findest du in unserer Datenschutzerklärung.
        </div>

      </div>




    </div>



    <div id="rowfoot05" className="row color_background g-5 p-5">

      <div className="col">
        <div>
          <img className="img-fluid  " src='img/logo01.png' />
        </div>
        <div className="font_facit_text_very_small">

           Die TAM hilft Unternehmen dabei, ihre MitarbeiterInnen zu entwickeln und Kulturen zu transformieren. Mit über 40 Jahren Erfahrung und über 1000 ausgebildeten Trainerinnen und Trainern zählt sie zu den renommiertesten Akademien Deutschlands.
        </div>

        <div>
          <img className="img-fluid  " src='img/footer-2-1280x318-1-400x223-1-300x167.png' />
        </div>

      </div>
      <div className="col">
        <div className="font_facit_text_very_small mt-3">KONTAKT</div>
      

       <div className="row "> <a className="color_contactos mt-3" href="tel:03012345678">030 12345678</a></div>
       <div className="row "> <a  className="color_contactos" href="mailto:mail@gmail.de">mail@gmail.de</a></div>
      
        {/* <div class="font_facit_text_very_very_small_gris">Mo-Fr. 10-18Uhr</div> */}
      </div>



      <div className="col">
        <div className="font_facit_text_very_small mt-3">DIE TAM</div>
        <div className="font_facit_text_very_very_small_gris mt-3">
        <div >About TAM</div>
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
