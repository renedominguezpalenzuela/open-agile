
import TeamCard02 from "./TeamCard02";
import Card01 from "./Card01";



//----------------------------------------------------------------------------------------------------------
//            Area de Contenido: Carousel: BLOG
//----------------------------------------------------------------------------------------------------------
//Contiene: Carrusel
//TODO: pasar como parametros los datos
//Responsivo: ERROR, 
//TODO: Crear reglas para cuando cambia de tamano mostrar cards normales


export default function TeamCarrousel ( ) {



 const datos = [ 
        {
           id:'1',
           image:'/team/andi_Internetseite.png',
           title:'Andreas Eilers',
           motto:'Motto: “Nicht weil es schwer ist, wagen wir es nicht, sondern weil wir es nicht wagen, ist es schwer.” ',
           motto_author:'Lucius Annaeus Seneca',
           text:'Als Experte für agile Organisationsentwicklung und selbstorganisierten Netzwerkorganisationen hat Andreas ein großes Anliegen: Möglichst viele Menschen dabei zu unterstützen, nachhaltige Lösungen für eine stimmige und wertschätzende Zusammenarbeit zu finden. Um in dem Hinblick möglichst effizient vorzugehen, hat Andreas das Buch „Crashkurs Selbstorganisation in agilen Teams“ geschrieben, welches 2021 im Haufe-Verlag veröffentlicht wurde. Andreas liebt nicht nur als Pilot die Sicht aus der Vogelperspektive Als zertifizierter Agile Coach & Scrum Master gibt er wichtige Impulse von außen, immer mit der notwendigen Distanz und viel Empathie. In der Beratung und im Training greift Andreas auf die Erfahrung als Leiter eines agilen Entwicklungslabors zurück sowie auf das Fachwissen als Certified Financial Planner. Durch den Betriebswirt mit den Schwerpunkten Personal- und Finanzmanagement sind ihm auch organisationsstrategische Fragestellungen sehr vertraut.',
           telefono:'Telefon: 0160 979 40004',
           correo: 'E-Mail: andreas.eilers@open-agile.de'
           },

           {
           id:'2',
           image:'/team/alex_Internetseite.png',
           title:'Alexander Stange',
           motto:'Motto: „Einfach machen!“',
           motto_author:'',
           text:'Als leidenschaftlicher Triathlet geht Alexander immer wieder an seine Belastungsgrenze. Das macht ihn zum Experten, wenn es darum geht mit Motivation die Komfortzone zu verlassen. Attraktive Ziele sind dabei entscheidet, die nötige Energie für den langen Weg zu mobilisieren. Diese Erfahrung nimmt Alexander in jeden zu begleitenden Veränderungsprozess mit. Um eine Transformation wirksam begleiten zu können, greift Alexander auf eine Vielzahl an Methoden und Tools zurück. Doch ist das Tool für ihn niemals die Lösung selbst. Sein Ziel ist stets einen messbaren und vor allen Dingen nachhaltigen Wandel zu ermöglichen. Dafür holt Alexander Menschen dort ab, wo sie stehen. Er eröffnet Teams genauso wie Individuen durch professionelle Impulse neue Lösungsräume und inspiriert sie mit positiven Gedanken Veränderungen mitzugehen. Dabei greift Alexander einerseits auf seine langjährigen Erfahrungen als Trainer & Berater zurück und anderseits nutzt er sein Know-how als zertifizierter Agile Coach & Scrum Master. Insbesondere in schwierigen Situationen besinnt sich Alexander immer wieder auf seine wichtigsten Werte: Mut, Transparenz und Humor. Für viele ist die individuelle Veränderung ein langer Weg mit vielen Meilensteinen. Dabei ist für Alexander viel Verständnis, Geduld und gegenseitige Rücksichtnahme entscheidend.',
           telefono:'Telefon: 0160 979 40004',
           correo: 'E-Mail: andreas.eilers@open-agile.de'

           }
       
]


  



  return (
<>


    <div id="MyCarouselTitle" className="color_carrusel pb-1 ">

        <div className=" row justify-content-center font_title_seccion  mt-2  pt-5"> DAS TEAM</div>
        {/* <div className=" row justify-content-center font_card_texto mt-2 "> Rund um die Akademie</div> */}


    <div className=" row justify-content-center">

    {/* slide*/}
        <div id="MyCarousel" className=" carousel  " data-bs-ride="carousel" data-mdb-touch="true">


            <div className="carousel-indicators">
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#MyCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
             </div>


            <div className="carousel-inner  alto_carrusel    ">

            {datos.map ((unDato, index)=>
         
            <div  key={index}   className= { unDato.id==1?" carousel-item active":"carousel-item"} >

                    {/* <div className="d-xl-none  ">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <Card01 imagen={unDato.image} titulo={unDato.title} texto={unDato.text} />
                            </div>
                        </div>
                    </div> */}


                    <div  className="d-none d-xl-block  ">
                        <TeamCard02 imagen={unDato.image} titulo={unDato.title} texto={unDato.text} motto={unDato.motto} motto_author={unDato.motto_author} telefono={unDato.telefono} correo={unDato.correo}/>
                    </div>

                </div>


            )
           

            }


            


                

               


            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#MyCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#MyCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>

        </div>
    </div>





</>
  );
}