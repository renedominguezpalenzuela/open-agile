import styles from "../styles/Home.module.css";
//import Card03 from "./Card03";
import Card03 from "./Card03";

//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Lineas horizontales
//----------------------------------------------------------------------------------------------------------



export default function Content04 ( ) {
  return (
<>


  <section>

    <div className="row justify-content-left font_title mt-5 ms-4">
         Das Wichtigste
    </div>

    <div className="row justify-content-left font_card_texto mt-2 ms-4">
        Rund um die Akademie     
    </div>

   
      <Card03 id="1" titulo="NEW WORK FACILITATOR PROGRAMM" subtitulo="FÜHRUNG IM DIGITALEN ZEITALTER" texto="Das TAM Leadership Programm richtet sich an Geschäftsführer- & InhaberInnen sowie an Team- & AbteilungsleiterInnen, die ihre Führungskompetenz und ihren individuellen Führungsstil weiterentwickeln wollen. Kreiere mit einem agilen Mindset und einem zukunftsorientierten Führungsverständnis einen Mehrwert für deine MitarbeiterInnen, deine Organisation und deine KundInnen. Dieses Programm stattet dich mit allen Tools aus, die moderne Leader beherrschen müssen." imagen="img01.jpg"/>
      <Card03 id="2" titulo="BUSINESS-TRAINER AUSBILDUNG" subtitulo="DEIN ENSTIEG IN DIE WELT DER PROFESSIONELLEN TRAININGS & WORKSHOPS" texto="Die TAM Business Trainer Ausbildung richtet sich an TrainerInnen, BeraterInnen, Coaches, PersonalentwicklerInnen und Führungskräfte, die bereits berufstätig sind, ihre Expertise vertiefen wollen und ein Sprungbrett für Ihre Karriere suchen. Mit uns lernt ihr von der Pike auf, Menschen noch mehr zu begeistern und Lernprozesse anzustoßen. Wir machen die Guten noch besser!" imagen="img02.jpg"/>
   
  </section>

</>
  );
}



