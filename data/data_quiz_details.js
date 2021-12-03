export const quiz_details = [
  {
    "id": "1",    
    "titulo" : "Organisationsebene:",
    "number" : "1",
    "question": "Wie viele Hierarchiestufen gibt es nach dem Vorstand oder der Geschäftsführung? ",
    "answers" :  [ 
                   { "letter": "a", "answer":  "3"},
                   { "letter": "b", "answer":  "2"},
                   { "letter": "c", "answer":  "1"},
                   { "letter": "d", "answer":  "0"},
                   ],
     "correct_answer" : "d",                   
     "next_link" :"/quiz/2" ,
     "prior_link" :"#"                  
  },

   {
    "id": "2",
    "titulo" : "Organisationsebene:",
    "number" : "2",
    "question": "Welche Führungsstile werden von Führungskräften bevorzugt?  ",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Autoritärer Führungsstil (Entscheidungen werden top-down vorgesetzt)"},
                   { "letter": "b", "answer":  "Laissez-faire Führungsstil (Es werden wenige bis gar keine Entscheidungen getroffen)"},
                   { "letter": "c", "answer":  "Kooperativer Führungsstil (Das Team wird in Entscheidungen eingebunden)"},
                   { "letter": "d", "answer":  "Dienender, lateraler Führungsstil (Das Team entscheidet gemeinsam im Konsent) "},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/3" ,
     "prior_link" :"/quiz/1"                  
  },

  {
    "id": "3",
    "numero" : "3",
    "titulo" : "Organisationsebene:",
    "question": "Wichtige Unternehmenskennzahlen sowie die Vision, Mission, Strategie und alle daraus resultierenden Teamziele…",
    "answers" :  [ 
                   { "letter": "a", "answer":  "kennt nur die Geschäftsleitung"},
                   { "letter": "b", "answer":  "kennt nur die Geschäftsleitung und ein ausgewählter Kreis an Führungskräften"},
                   { "letter": "c", "answer":  "sind transparent für alle Mitarbeitenden einsichtbar und verständlich aufbereitet"},
                   { "letter": "d", "answer":  "sind für alle Mitarbeitenden sowie für alle wesentlichen Stakeholder transparent einsichtbar und verständlich aufbereitet"},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/4" ,
     "prior_link" :"/quiz/2"                  
  },

   {
    "id": "4",
    "titulo" : "Organisationsebene:",
    "numero" : "4",
    "question": "Wie groß ist das Innovationspotential innerhalb Deiner Organisation?",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Neue Ideen, Vorschläge oder Initiativen werden eher als Gefahr gesehen. Es herrscht eine „Das haben wir schon immer so gemacht“- Mentalität."},
                   { "letter": "b", "answer":  "Neue Ideen, Vorschläge und Initiativen gehen ausschließlich von der Unternehmensleitung aus. Der Innnovations-Prozess ist intransparent."},
                   { "letter": "c", "answer":  "Neue Ideen, Vorschläge und Initiativen gehen zum größten von einer Abteilung (Bspw. Forschung- und Entwicklung) aus. Es herrscht Silodenken."},
                   { "letter": "d", "answer":  "Alle Mitarbeitenden haben neben ihrer Kerntätigkeit Raum und Zeit Ideen, Vorschläge und Projekte transparent voranzutreiben, beispielsweise in verschiedenen interdisziplinär besetzten und befristeten Projektteams. Neue Ideen werden als Chance gesehen."},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/5" ,
     "prior_link" :"/quiz/3"                  
  },

  {
    "id": "5",
    "titulo" : "Organisationsebene:",
    "numero" : "5",
    "question": "Wie starr sind Eure Unternehmensstrukturen in Bezug auf wie, wann und wo zusammengearbeitet wird?",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Es gibt keine klaren Strukturen bezogen auf das wie, wann und wo zusammengearbeitet wird."},
                   { "letter": "b", "answer":  "Wie Teams an ihr vorgegebenes Ziel kommen sowie die Arbeitszeit- und der Arbeitsort sind top-down vorgegeben."},
                   { "letter": "c", "answer":  "Nur ein ausgewählter Kreis innerhalb der Organisation darf die Zusammenarbeit sowie Arbeitszeit- und Ort selbst bestimmen."},
                   { "letter": "d", "answer":  "Alle Mitarbeitenden organisieren ihre Zusammenarbeit selbst innerhalb ihrer Teams."},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/6" ,
     "prior_link" :"/quiz/4"                  
  },

   {
    "id": "6",
    "titulo" : "Teamebene:",
    "numero" : "6",
    "question": "Seid Ihr ein echtes Team?",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Das Team hat kein gemeinsames Ziel und ist somit nur eine lose Gruppe"},
                   { "letter": "b", "answer":  "Jedes Teammitglied hat Einzelziele, was Konkurrenzdenken schüren könnten"},
                   { "letter": "c", "answer":  "Teamziele werden top-down vorgesetzt, eine Identifikation mit den Zielen ist nicht möglich"},
                   { "letter": "d", "answer":  "Das Team gibt sich anspruchsvolle Ziele regelmäßig selbst, die sich aus dem Anliegen des Unternehmens ableiten (die Ziele sind SMART: spezifisch, messbar, akzeptiert, realistisch, terminiert)"},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/7" ,
     "prior_link" :"/quiz/5"                  
  },

   {
    "id": "7",
    "titulo" : "Teamebene:",
    "numero" : "7",
    "question": "Wie hoch ist die Performance in Deinem Team? (Team-Uhr nach Tuckman)",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Mein Team befindet sich in der Kennenlernphase (höflich, unpersönlich, gespannt, vorsichtig)"},
                   { "letter": "b", "answer":  "Mein Team befindet sich in der Konfliktphase (unterschwellige Konflikte, Konfrontationen, Cliquenbildung, mühsam)"},
                   { "letter": "c", "answer":  "Wir sind dabei Werte & Normen zu etablieren (neue Umgangsformen und Verhaltensweisen entstehen, konstruktive Kritik, wertvolles Feedback)"},
                   { "letter": "d", "answer":  "Mein Team arbeitet agil zusammen (ideenreich, flexibel, offen, solidarisch, leistungsfähig, hilfsbereit, unternehmensweite Transparenz)"},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/8" ,
     "prior_link" :"/quiz/6"                  
  },

   {
    "id": "8",
    "titulo" : "Teamebene:",
    "numero" : "8",
    "question": "Wie groß ist Dein Team?",
    "answers" :  [ 
                   { "letter": "a", "answer":  "> 20 Teammitglieder"},
                   { "letter": "b", "answer":  "> 10 Teammitglieder "},
                   { "letter": "c", "answer":  "< 4 Teammitglieder"},
                   { "letter": "d", "answer":  "4-10 Teammitglieder "},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/9" ,
     "prior_link" :"/quiz/7"                  
  },

   {
    "id": "9",
    "titulo" : "Teamebene:",
    "numero" : "9",
    "question": "Wie stimmt Ihr euch im Team regelmäßig ab?",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Gar nicht "},
                   { "letter": "b", "answer":  "1 x die Woche in einem längeren „Weekly“ (45 – 90 Minuten)"},
                   { "letter": "c", "answer":  "2 bis 3 x die Woche in einem kurzen „Daily“ (10 – 20 Minuten)"},
                   { "letter": "d", "answer":  "Jeden Werktag in einem kurzen „Daily“ + einmal die Woche in einem „Weekly“ "},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/10" ,
     "prior_link" :"/quiz/8"                  
  },

   {
    "id": "10",
    "titulo" : "Teamebene:",
    "numero" : "10",
    "question": "Wie reflektiert Ihr Eure Zusammenarbeit?",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Gar nicht "},
                   { "letter": "b", "answer":  "Es gibt strukturierte Feedbacks von Führungskräften"},
                   { "letter": "c", "answer":  "Teammitglieder holen sich regelmäßig Feedbacks von denjenigen ein, mit denen sie tatsächlich zusammengearbeitet haben"},
                   { "letter": "d", "answer":  "Neben 1:1 Feedbacks führen wir regelmäßige Retrospektiven durch"},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/11" ,
     "prior_link" :"/quiz/9"                  
  },


  {
    "id": "11",
    "titulo" : "Individualebene:",
    "numero" : "1",
    "question": "Mitarbeitende kennen agile Werte- und Prinzipien (u.a. Selbstorganisation, experimentelles Vorgehen, Pragmatismus) und haben diese verinnerlicht:",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Trifft nicht zu"},
                   { "letter": "b", "answer":  "Trifft teilweise zu"},
                   { "letter": "c", "answer":  "Trifft größtenteils zu"},
                   { "letter": "d", "answer":  "Trifft voll zu"},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/12" ,
     "prior_link" :"/quiz/10"                  
  },



  {
    "id": "12",
    "titulo" : "Individualebene:",
    "numero" : "2",
    "question": "Mitarbeitende kennen agile Methoden- und Prozesse (u.a. Scrum, Kanban, Design-Thinking) und wenden diese an:",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Trifft nicht zu"},
                   { "letter": "b", "answer":  "Trifft teilweise zu"},
                   { "letter": "c", "answer":  "Trifft größtenteils zu"},
                   { "letter": "d", "answer":  "Trifft voll zu"},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/13" ,
     "prior_link" :"/quiz/11"                  
  },


  {
    "id": "13",
    "titulo" : "Individualebene:",
    "numero" : "3",
    "question": "Mitarbeitende pflegen eine vertrauensvolle, zuversichtliche und lernende Kultur:",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Trifft nicht zu"},
                   { "letter": "b", "answer":  "Trifft teilweise zu"},
                   { "letter": "c", "answer":  "Trifft größtenteils zu"},
                   { "letter": "d", "answer":  "Trifft voll zu"},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/14" ,
     "prior_link" :"/quiz/12"                  
  },

   {
    "id": "14",
    "titulo" : "Individualebene:",
    "numero" : "4",
    "question": "Mitarbeitende bilden sich kontinuierlich und eigenständig weiter:",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Trifft nicht zu"},
                   { "letter": "b", "answer":  "Trifft teilweise zu"},
                   { "letter": "c", "answer":  "Trifft größtenteils zu"},
                   { "letter": "d", "answer":  "Trifft voll zu"},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quiz/15" ,
     "prior_link" :"/quiz/13"                  
  },

  {
    "id": "15",
    "titulo" : "Individualebene:",
    "numero" : "5",
    "question": "Alle Mitarbeitenden stellen Nutzerinnen und Nutzer von Dienstleistungen oder Produkten stets in den Mittelpunkt aller Bemühungen:",
    "answers" :  [ 
                   { "letter": "a", "answer":  "Trifft nicht zu"},
                   { "letter": "b", "answer":  "Trifft teilweise zu"},
                   { "letter": "c", "answer":  "Trifft größtenteils zu"},
                   { "letter": "d", "answer":  "Trifft voll zu"},
                   ],
     "correct_answer" : "d",                     
     "next_link" :"/quizresult" ,
     "prior_link" :"/quiz/14"                  
  },





]