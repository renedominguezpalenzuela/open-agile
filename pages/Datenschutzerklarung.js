import Head from "next/head";

import MenuFlotante from "../components/MenuFlotante";
import Footer from "../components/Footer";

import MenuFlotanteBoton from "../components/MenuFlotanteBoton";
// import MenuSuperior from "../components/MenuSuperior";

import AreaSuperior from "../componentes/area_superior/AreaSuperior";

import ModalFormCookie from "../components/ModalFormCookie";

//----------------------------------------------------------------------------------------------------------
//           CRASHKURSE \ CRASHKURS ZUM AGILE COACH
//----------------------------------------------------------------------------------------------------------

export default function Home() {
  // <Head>
  //   <script async src="js/menu.js" />
  // </Head>

  const titulo1 = "Datenschutzerklärung";
  const titulo2 = "DATENSCHUTZERKLÄRUNG";

  return (
    <>
      <Head>
        <title>{titulo2}</title>
        <meta name="description" content={titulo2} />
        <link rel="icon" href="/favicon.ico" />
        <script async src="js/chat.js" />
        <script async src="js/menu.js" />
      </Head>

      {/*Contenedor*/}

      <div id="principal" className="container-fluid g-0">
        <MenuFlotanteBoton />

        <AreaSuperior
          fondo="ajustable"
          texto1={titulo1}
          titulo_muy_largo={true}
          area_gris_nueva={true}
          daten={true}
        />

        <div className="px-5 ms-md-5 mb-md-3">
          <h1 className="title_daten mt-md-5">Datenschutzerklärung</h1>
          <p className="font_daten">
            Wir, die <span className="fw-bold">Open Agile GmbH</span>{" "}
            (nachfolgend „wir“), freuen uns über Ihr Interesse an unserem
            Online-Angebot unter open-agile.de (nachfolgend das
            „Online-Angebot“). Wir nehmen den Schutz Ihrer personenbezogenen
            Daten sehr ernst. Die Verarbeitung Ihrer personenbezogenen Daten
            erfolgt ausschließlich im Rahmen der gesetzlichen Bestimmungen des
            Datenschutzrechts, insbesondere der Datenschutzgrundverordnung
            (nachfolgend „DSGVO“). Mit dieser Datenschutzerklärung informieren
            wir Sie über die Verarbeitung Ihrer personenbezogenen Daten und über
            Ihre Rechte als betroffene Person im Rahmen des Online-Angebots.
            Informationen zur Verarbeitung personenbezogener Daten in anderen
            Bereichen entnehmen Sie bitte der jeweiligen spezifischen
            Datenschutzerklärung.
          </p>
          <p className="font_daten">
            Sofern wir von externen Social-Media-Profilen auf diese
            Datenschutzerklärung verweisen, gelten die folgenden Erläuterungen
            nur insoweit, als die Verarbeitung in unserem Verantwortungsbereich
            erfolgt und soweit keine spezielleren und deshalb vorrangigen
            Hinweise zum Datenschutz im Rahmen solcher Social-Media-Profile zur
            Verfügung gestellt werden. Sofern wir von externen
            Social-Media-Profilen auf diese Datenschutzerklärung verweisen,
            gelten die folgenden Erläuterungen nur insoweit, als die
            Verarbeitung in unserem Verantwortungsbereich erfolgt und soweit
            keine spezielleren und deshalb vorrangigen Hinweise zum Datenschutz
            im Rahmen solcher Social-Media-Profile zur Verfügung gestellt
            werden.
          </p>
          <h2 className="title_daten">1. Verantwortlicher</h2>
          <p className="font_daten">
            Gemeinsame Verantwortliche für die Datenverarbeitung im Sinne der
            Datenschutzgesetze ist die:
          </p>
          <h2 className="title_daten">Open Agile GmbH</h2>
          <p className="font_daten">
            Faulenstr. 67
            <br /> D-28195 Bremen
          </p>
          <p className="font_daten"></p>
          <p className="font_daten">
            Registergericht: Amtsgericht Bremen <br /> HRB-Nr. 37347 <br />
            USt.-Ident.-Nr. DE 60 125 125 36
          </p>
          <p className="font_daten">
            E-Mail: kontakt@open-agile.de <br />
            Telefon: 0421 22347567
          </p>
          <p className="font_daten">
            Vertreten durch die Geschäftsführer: <br />
            Andreas Eilers
            <br />
            Alexander Stange
          </p>
          <p className="font_daten">
            Sollten Sie Fragen oder Anregungen zum Datenschutz haben, können Sie
            sich gerne an uns wenden. Unsere Datenschutzbeauftragten erreichen
            Sie wie folgt:
          </p>
          <h2 className="title_daten">Open Agile GmbH</h2>
          <p className="font_daten">
            Beauftragter für Datenschutz <br /> Faulenstr. 67 <br />
            D-28195 Bremen
          </p>
          <p className="font_daten">Kontakt: kontakt@open-agile.de</p>
          <p className="font_daten">
            In Bezug auf Verarbeitungen im Rahmen des Online-Angebots sind wir
            gemeinsam Verantwortliche, sofern nicht nachfolgend anderweitig
            beschrieben. Wir legen in Bezug auf die gemeinsamen Verarbeitungen
            des Online-Angebots gemeinsam die Zwecke und die Mittel der
            Verarbeitung personenbezogener Daten fest. Wir haben in einer
            Vereinbarung über die gemeinsame Verantwortlichkeit nach Artikel 26
            DSGVO festgelegt, wie die jeweiligen Aufgaben und Zuständigkeiten
            bei der Verarbeitung personenbezogener Daten ausgestaltet sind und
            wer welche datenschutzrechtlichen Verpflichtungen erfüllt. Wir haben
            insbesondere festgelegt, wie ein angemessenes Sicherheitsniveau und
            Ihre Betroffenenrechte sichergestellt werden können, wie wir
            gemeinsam die datenschutzrechtlichen Informationspflichten erfüllen
            und wie wir potentielle Datenschutzvorfälle überwachen können. Dazu
            gehört auch, dass wir die Erfüllung unserer Melde- und
            Benachrichtigungspflichten sicherstellen können. Soweit Sie sich an
            uns wenden, werden wir uns im Sinne der angesprochenen Vereinbarung
            nach Artikel 26 DSGVO abstimmen, um Ihre Anfrage zu beantworten und
            Ihre Betroffenenrechte zu gewährleisten.
          </p>
          <p className="font_daten">
            Der Austausch personenbezogener Daten zwischen den gemeinsam
            Verantwortlichen erfolgt in der Regel auf Basis von Artikel 6 Absatz
            1 Buchstabe b) DSGVO zur Vorbereitung und Durchführung des
            jeweiligen Vertragsverhältnisses mit Ihnen, auf Basis von Artikel 6
            Absatz 1 Buchstabe a) DSGVO, sofern Sie uns eine ausdrückliche
            Einwilligung erteilt haben, sowie im Übrigen auf Basis von Artikel 6
            Absatz 1 Buchstabe f) DSGVO, da wir ein berechtigtes Interesse an
            der wirksamen Durchführung der Verarbeitungen im Rahmen der
            gemeinsamen Verantwortlichkeit haben.
          </p>
          <h2 className="title_daten">2. Gegenstand des Datenschutzes</h2>
          <p className="font_daten">
            Gegenstand des Datenschutzes ist der Schutz personenbezogener Daten.
            Diese sind alle Informationen, die sich auf eine identifizierte oder
            identifizierbare natürliche Person (sog. betroffene Person)
            beziehen. Hierunter fallen Angaben wie z.B. Name, Post-Adresse,
            E-Mail-Adresse oder Telefonnummer, aber auch sonstige Informationen,
            die im Rahmen der Nutzung des Online-Angebots entstehen,
            insbesondere Angaben über Beginn, Ende und Umfang der Nutzung sowie
            die Übermittlung Ihrer IPAdresse.
          </p>
          <h2 className="title_daten">
            3. Zwecke und Rechtsgrundlagen der Datenverarbeitung
          </h2>
          <p className="font_daten">
            Nachfolgend erhalten Sie einen Überblick über Zwecke und
            Rechtsgrundlagen der Datenverarbeitung im Rahmen des OnlineAngebots.
            Wir verarbeiten personenbezogene Daten jedenfalls entsprechend der
            rechtlichen Vorgaben, auch wenn im Einzelfall eine andere
            Rechtsgrundlage einschlägig sein sollte als im Folgenden angegeben.
          </p>
          <p className="font_daten">
            Die Bereitstellung personenbezogener Daten durch Sie kann dabei
            gesetzlich oder vertraglich vorgeschrieben bzw. für einen
            Vertragsabschluss erforderlich sein. Wir weisen Sie gesondert darauf
            hin, wenn Sie verpflichtet sein sollten, personenbezogene Daten
            bereitzustellen und welche möglichen Folgen die Nichtbereitstellung
            dann hätte (z.B. ein Verlust von Ansprüchen oder unser Hinweis, ohne
            Bereitstellung bestimmter Angaben die angeforderte Leistung nicht zu
            erbringen). Die Nutzung des Online-Angebots ist grundsätzlich ohne
            Registrierung möglich. Die Nutzung einzelner Dienste und Funktionen
            kann eine vorherige Registrierung erfordern. Auch wenn Sie unser
            OnlineAngebot ohne Registrierung nutzen, können dennoch
            personenbezogene Daten verarbeitet werden.
          </p>
          <h2 className="title_daten">
            3.1 Erfüllung vertraglicher und vorvertraglicher Pflichten
          </h2>
          <p className="font_daten">
            Wir verarbeiten Ihre personenbezogenen Daten, wenn dies für die
            Durchführung eines Vertrages, dessen Partei Sie sind, bzw. für die
            Durchführung vorvertraglicher Maßnahmen, die auf Ihre Anfrage hin
            erfolgen, erforderlich ist. Die Datenverarbeitung erfolgt auf Basis
            des Artikels 6 Absatz 1 Buchstabe b) DSGVO. Die Zwecke der
            Verarbeitung umfassen die Ermöglichung der Nutzung unserer
            spezifischen Produkte und Dienstleistungen im Rahmen des
            Online-Angebots. Bitte beachten Sie insofern auch die Beschreibungen
            dieser Produkte und Dienstleistungen im Rahmen des Online-Angebots.
            Dies sind im konkreten Fall insbesondere die folgenden Funktionen:
          </p>
          <h2 className="title_daten">Live Chat</h2>
          <p className="font_daten">
            In bestimmten Bereichen des Online-Angebots bieten wir eine
            Kontaktaufnahme und Beratung per Live Chat an. Mit Hilfe des Live
            Chats können Sie mit einem unserer Berater über Textnachrichten
            kommunizieren. Wenn Sie den Live Chat aufrufen und nutzen,
            übermittelt Ihr Browser zu Beginn der Nutzung aus technischen
            Gründen automatisch folgende Daten, die von uns getrennt von anderen
            Daten, die Sie uns unter Umständen übermitteln, gespeichert werden:
            Datum und Uhrzeit des Zugriffs, Dauer des Besuchs unseres
            Online-Angebots, Art des Webbrowsers inklusive Version, verwendetes
            Betriebssystem, Menge der gesendeten Daten, Art des Ereignisses,
            IP-Adresse (gekürzt/verfremdet). Sofern Sie uns darüber hinaus
            weitere personenbezogene Daten mittels des Live Chats mitteilen,
            erfolgt dies auf freiwilliger Basis.
          </p>
          <h2 className="title_daten">
            3.2. Erfüllung rechtlicher Verpflichtungen
          </h2>
          <p className="font_daten">
            Wir verarbeiten Ihre personenbezogenen Daten, um rechtliche
            Verpflichtungen einzuhalten, denen wir unterliegen. Die
            Datenverarbeitung erfolgt auf Basis des Artikels 6 Absatz 1
            Buchstabe c) DSGVO. Die Verpflichtungen können sich z.B. aus dem
            Handels-, Steuer-, Geldwäsche-, Finanz- oder Strafrecht ergeben. Die
            Zwecke der Verarbeitung ergeben sich aus der jeweiligen rechtlichen
            Verpflichtung; die Verarbeitung dient in der Regel dem Zweck,
            staatlichen Kontroll- und Auskunftspflichten nachzukommen.
          </p>
          <h2 className="title_daten">3.3. Wahrung berechtigter Interessen</h2>
          <p className="font_daten">
            Wir verarbeiten Ihre personenbezogenen Daten darüber hinaus zur
            Wahrung berechtigter Interessen von uns oder Dritten, soweit nicht
            Ihre Interessen, die den Schutz Ihrer personenbezogener Daten
            erfordern, überwiegen. Die Datenverarbeitung erfolgt auf Basis des
            Artikels 6 Absatz 1 Buchstabe f) DSGVO. Die Verarbeitung zur Wahrung
            berechtigter Interesse erfolgt zu folgenden Zwecken bzw. zur Wahrung
            folgender Interessen:
          </p>
          <p className="font_daten">
            Weiterentwicklung von Produkten, Diensten, Dienstleistungen und
            Betreuungsangeboten sowie sonstige Maßnahmen zur Steuerung von
            Geschäftsvorfällen und -prozessen; Verbesserung der Produktqualität,
            Beseitigung von Fehlern und Störungen u.a. mithilfe der Analyse von
            Fahrzeugdaten und Kundenrückmeldungen; Verarbeitung von Daten in
            einer zentralen Interessenten- und Kundenbetreuungsplattform sowie
            vorund nachgelagerten Systemen für Kundenbindungs- und
            Vertriebszwecke; Bedarfsanalyse und Kundensegmentierung, z.B.
            Berechnung und Bewertung von Affinitäten, Präferenzen sowie
            Kundenpotenzialen; Bearbeitung von außervertraglichen Anfragen und
            Anliegen; Abwicklung von Garantie- und Kulanzfällen; Risikosteuerung
            sowie Koordination von Rückrufaktionen; Bonitätsprüfung durch
            Datenaustausch mit Auskunfteien (z.B. SCHUFA);Sicherstellung
            rechtskonformen Handelns, Prävention von und Schutz vor
            Rechtsverstößen (insb. Straftaten), Geltendmachung von und
            Verteidigung gegen rechtliche Ansprüche, interne und externe
            ComplianceMaßnahmen; Gewährleistung von Verfügbarkeit, Betrieb und
            Sicherheit technischer Systeme sowie technisches Datenmanagement;
            Beantwortung und Auswertung von Kontaktanfragen und Rückmeldungen.
          </p>
          <p className="font_daten">
            Wenn Sie das Online-Angebot aufrufen, werden Daten in Bezug auf Ihr
            Endgerät und Ihre Nutzung des Online-Angebots verarbeitet und in
            einer sog. Log-Datei gespeichert. Dies betrifft insbesondere
            technische Daten wie Datum und Uhrzeit des Zugriffs, Dauer des
            Besuchs, Art des Endgeräts, verwendetes Betriebssystem, genutzte
            Funktionen, Menge der gesendeten Daten, IP-Adresse und Referrer-URL.
            Diese Daten verarbeiten wir zur Sicherstellung des technischen
            Betriebs sowie zur Ermittlung und Beseitigung von Störungen. Wir
            verfolgen dabei das Interesse, die technische Funktionsfähigkeit
            dauerhaft sicherzustellen. Wir verwenden diese Daten nicht zu dem
            Zweck, Rückschlüsse auf Ihre Person zu ziehen.
          </p>
          <p className="font_daten">
            Wenn wir E-Mails zur Kunden- und Interessentenbetreuung versenden,
            setzen wir ggf. marktübliche Technologien wie Zählpixel oder
            ClickThrough-Links ein. Hiermit können wir analysieren, welche bzw.
            wie viele E-Mails zugestellt und/oder zurückgewiesen und/oder
            geöffnet werden. Letzteres erfolgt insbesondere per Zählpixel. Eine
            Messung der Öffnungsrate unserer E-Mails mittels Zählpixel ist
            beispielsweise nicht vollumfänglich möglich, wenn Sie in Ihrem
            E-Mail-Programm die Anzeige von Bildern deaktiviert haben. In diesem
            Fall wird Ihnen die E-Mail nicht vollständig angezeigt. Es ist uns
            jedoch weiterhin möglich nachzuvollziehen, ob eine E-Mail geöffnet
            wurde, wenn Sie in der E-Mail auf Text- oder Grafik-Links klicken.
            Durch den Einsatz von Click-ThroughLinks können wir analysieren,
            welche Links in unseren E-Mails angeklickt werden und ableiten,
            welches Interesse an bestimmten Themen besteht. Dabei werden Sie
            beim Klick auf den entsprechenden Link vor dem Aufruf der Zielseite
            über unseren separaten Analyseserver geführt. Anhand der
            Analyseergebnisse können wir E-Mails relevanter gestalten,
            zielgerichteter versenden oder den Versand von E-Mails unterbinden.
            Wenn Sie nicht möchten, dass solche Daten erfasst und nachverfolgt
            werden, klicken Sie in E-Mails nicht auf Text- oder Grafik-Links.
            Verantwortlicher für die Verarbeitung Ihrer Daten ist das jeweilige
            in der E-Mail genannte Unternehmen.
          </p>
          <p className="font_daten">
            Im Rahmen der Weiterentwicklung von Produkten, Diensten,
            Dienstleistungen und Betreuungsangeboten können Sie beim Besuch
            unseres Online-Angebots von Zeit zu Zeit dafür ausgewählt werden, an
            einer Umfrage teilzunehmen. Die Teilnahme ist freiwillig. Wir
            verwenden die bei den Befragungen erhobenen Daten nicht zu dem
            Zweck, Rückschlüsse auf Ihre Person bzw. Ihre Identität zu ziehen.
            Direkt mit Ihrer Identität verbundene Daten werden nur dann
            verarbeitet, wenn Sie diese auf freiwilliger Basis im Rahmen der
            Umfrage mitteilen. Verantwortlicher für die Verarbeitung Ihrer Daten
            ist das jeweilige in der Befragung genannte Unternehmen.
          </p>
          <h2 className="title_daten">3.4. Einwilligung</h2>
          <p className="font_daten">
            Wir verarbeiten Ihre personenbezogenen Daten auf Grundlage
            entsprechender Einwilligung. Die Datenverarbeitung erfolgt auf Basis
            des Artikels 6 Absatz 1 Buchstabe a) DSGVO. Sollten Sie eine
            Einwilligung erteilen, ist diese stets zweckgebunden; die Zwecke der
            Verarbeitung ergeben sich jeweils aus dem Inhalt Ihrer
            Einwilligungserklärung. Eine erteilte Einwilligung können Sie
            jederzeit widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der
            Einwilligung bis zum Widerruf erfolgten Verarbeitung hiervon berührt
            wird.
          </p>
          <p className="font_daten">
            Soweit Sie eine entsprechende Einwilligung erteilt haben, können auf
            deren Basis die Unternehmen, die in der Einwilligungserklärung
            aufgeführt werden, die Daten z.B. zur individuellen Kunden- und
            Interessentenbetreuung verwenden und Sie zu diesen Zwecken über die
            von Ihnen gewünschten Kommunikationswege kontaktieren. Ihre Daten
            werden in diesem Rahmen genutzt, um Ihnen ein begeisterndes
            Markenund Betreuungserlebnis zu bieten und die Kommunikation und
            Interaktion mit Ihnen so persönlich und relevant wie möglich zu
            gestalten. Welche Ihrer Daten zur individuellen Kunden- und
            Interessentenbetreuung konkret verwendet werden, hängt insbesondere
            davon ab, welche Daten auf Basis von Aufträgen und Beratungen
            erhoben wurden und welche Daten Sie an den jeweiligen Kontaktpunkten
            zur Verfügung gestellt haben (z.B. Ihre persönlichen Interessen).
          </p>
          <p className="font_daten">
            Wir versenden Newsletter nach entsprechender Anmeldung, d.h. mit
            Ihrer Einwilligung. Sofern im Rahmen einer Anmeldung zum Newsletter
            dessen Inhalte konkret umschrieben werden, sind diese für die
            Reichweite der Einwilligung maßgeblich. Im Übrigen enthalten unsere
            Newsletter Informationen zu unseren Produkten, Angeboten, Aktionen
            und zu unserem Unternehmen. Verantwortlicher für die Verarbeitung
            Ihrer Daten ist das jeweilige im Anmeldeprozess genannte
            Unternehmen. Die Anmeldung erfolgt mittels des sog.
            Double-Opt-In-Verfahrens, d.h. Sie erhalten nach Ihrer Anmeldung
            eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten
            werden, um die missbräuchliche Nutzung Ihrer E-Mail-Adresse zu
            verhindern. Die Anmeldungen zum Newsletter werden von uns
            protokolliert, um den Anmeldeprozess und die darin liegende
            Einwilligung entsprechend den rechtlichen Anforderungen nachweisen
            zu können. Die Protokollierung der Anmeldung und die hierfür
            notwendige Verarbeitung der bei der Anmeldung von Ihnen eingegebenen
            Daten erfolgt dementsprechend auf der Grundlage unserer berechtigten
            Interessen gemäß Artikel 6 Absatz 1 Buchstabe f) DSGVO. Sie können
            Ihre Einwilligung in den Empfang unserer Newsletter jederzeit
            widerrufen, z.B. indem Sie sich vom Newsletter abmelden. Einen
            Abmelde-Link zur Ausübung dieses Rechts finden Sie am Ende eines
            jeden Newsletters.
          </p>
          <h2 className="title_daten">3.5. Zweckänderung</h2>
          <p className="font_daten">
            Soweit wir Ihre personenbezogenen Daten jenseits einer
            entsprechenden Einwilligung oder einer zwingenden Rechtsgrundlage zu
            einem anderen Zweck verarbeiten als zu demjenigen, zu dem die Daten
            erhoben wurden, berücksichtigen wir gemäß Artikel 6 Absatz 4 DSGVO
            die Vereinbarkeit des ursprünglichen und des nunmehr verfolgten
            Zwecks, die Art der personenbezogenen Daten, die möglichen Folgen
            der weiteren Verarbeitung für Sie und die Garantien zum Schutz der
            personenbezogenen Daten.
          </p>
          <h2 className="title_daten">3.6. Profiling</h2>
          <p className="font_daten">
            Wir führen keine automatisierte Entscheidungsfindung bzw. kein
            Profiling gemäß Artikel 22 DSGVO durch. Eine Profilbildung erfolgt
            nur zur Wahrung unserer berechtigten Interessen wie oben
            beschrieben.
          </p>
          <h2 className="title_daten">4. Zugriffsberechtigungen im Endgerät</h2>
          <p className="font_daten">
            Soweit Funktionen unseres Online-Angebots die Erteilung von
            Berechtigungen zum Zugriff auf Ihr Endgerät (z.B. Zugriff auf
            Standortdaten oder Fotos) erfordern, ist die Erteilung der
            Berechtigungen freiwillig. Sollten Sie jedoch die entsprechenden
            Funktionen nutzen wollen, ist die Erteilung der entsprechenden
            Berechtigungen erforderlich, da Sie andernfalls diese Funktionen
            nicht nutzen können. Die Berechtigungen bleiben so lange aktiv, wie
            Sie diese nicht in ihrem Endgerät durch die Deaktivierung der
            jeweiligen Einstellung wieder zurückgesetzt haben.
          </p>
          <h2 className="title_daten">
            5. Cookies und vergleichbare Technologien
          </h2>
          <p className="font_daten">
            Wir verwenden im Rahmen des Online-Angebots Cookies und
            vergleichbare Technologien, die dazu dienen, mit Ihrem Endgerät zu
            kommunizieren und gespeicherte Informationen auszutauschen
            (nachfolgend insgesamt „Cookies“). Diese Cookies dienen in erster
            Linie dazu, die Funktionen des Online-Angebots nutzbar zu machen.
            Allgemeine Beispiele, in denen der Einsatz von Cookies in diesem
            Sinne technisch erforderlich ist, sind die Speicherung einer
            Sprachauswahl, von LoginDaten oder einer Einkaufs- bzw. Merkliste.
            Dementsprechend können technisch erforderliche Cookies von uns
            eingesetzt werden, um die unter Ziffer 3.1 beschriebenen
            Verarbeitungen zu ermöglichen und den ordnungsgemäßen und sicheren
            Betrieb des Online-Angebots zu gewährleisten. Die Datenverarbeitung
            erfolgt dann auf Basis des Artikels 6 Absatz 1 Buchstabe b) und f)
            DSGVO, da sie erforderlich ist, um die von Ihnen gewählten
            Funktionen umzusetzen bzw. um unser berechtigtes Interesse an der
            Funktionsfähigkeit des Online-Angebots zu wahren.
          </p>
          <p className="font_daten">
            Soweit wir darüber hinaus Cookies einsetzen sollten, um die Nutzung
            des Online-Angebots zu analysieren und zielgerichtet auf Ihre
            Interessen ausrichten zu können und ggf. auch, um Ihnen
            interessenbasierte Inhalte und Anzeigen bereitstellen zu können,
            erfolgt dies ausschließlich auf Basis Ihrer freiwilligen
            Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a) DSGVO. Sie haben
            dann die Möglichkeit, über das Einwilligungsmanagement im Rahmen des
            Online-Angebots Ihre entsprechenden Einstellungen vorzunehmen. Sie
            können eine hierüber erteilte Einwilligung jederzeit mit Wirkung für
            die Zukunft widerrufen. Weitere Informationen zu den Cookies und zu
            deren Funktion im Einzelnen sowie zu Einstellungs- und
            Widerrufsmöglichkeiten erhalten Sie direkt in den entsprechenden
            Bereichen des Einwilligungsmanagements. Bitte beachten Sie, dass wir
            das Einwilligungsmanagement im Rahmen des Online-Angebots
            grundsätzlich nur zur Verfügung stellen, wenn über die oben
            genannten technisch erforderlichen Cookies hinaus
            einwilligungsbasiert Cookies eingesetzt werden sollen. Wenn Sie den
            Einsatz von Cookies insgesamt nicht wünschen, können Sie auch deren
            Speicherung ggf. durch entsprechende Einstellungen Ihres Endgeräts
            verhindern. Gespeicherte Cookies können Sie in den
            Systemeinstellungen Ihres Endgeräts jederzeit löschen. Bitte
            beachten Sie, dass die Blockierung bestimmter Arten von Cookies zu
            einer beeinträchtigten Nutzung unseres Online-Angebots führen kann.
          </p>
          <h2 className="title_daten">5.1 Google - Dienste</h2>
          <p className="font_daten">
            (Google - Analytics, Google Universal Analytics und Google
            Doubleclick)
          </p>
          <p className="font_daten">
            <span className="fw-bold">a) </span>Google - Tools zur pseudonymen
            Analyse von Nutzungsverhalten
          </p>
          <p className="font_daten">
            Auf unseren Webseiten benutzen wir die Analyse- und Werbetools
            Google - Analytics (einschließlich der Funktionen von Universal
            Analytics) und Doubleclick by Google, der Fa. Google Inc. 1600
            Amphitheatre Parkway, Mountain View, CA 94043, USA ("Google"), um
            die Nutzung unserer Seiten für unsere Kunden komfortabler zu machen.
          </p>
          <p className="font_daten">
            <span className="fw-bold">b) </span>Wie funktionieren die Tools?
          </p>
          <p className="font_daten">
            Google Analytics verwendet sog. "Cookies" (siehe Ziffer 2, die auf
            Ihrem Computer gespeichert werden, und die uns eine Analyse der
            Benutzung unserer Webseiten durch Sie ermöglichen.
          </p>
          <p className="font_daten">
            Universal Analytics erlaubt es uns, Aktivitäten auf unseren
            Webseiten geräteübergreifend zu analysieren (z.B. bei Zugriff über
            den PC und späterem Zugriff über das Smartphone). Dies geschieht
            mittels einer sog. User-ID, einer individuellen, nicht
            personalisierten Zahlenfolge, die nicht einem bestimmten Endgerät,
            sondern dem Nutzer als Pseudonym persönlich zugewiesen wird. Google
            erhält lediglich die User-ID sowie die mit der User-ID verknüpften
            Nutzungsdaten. Eine Zuordnung der Nutzungsdaten zu einer konkreten
            Person ist hierdurch nicht möglich.
          </p>
          <p className="font_daten">
            Doubleclick by Google verwendet ebenfalls Cookies, um Ihnen
            Werbeanzeigen präsentieren zu können, die für Sie relevant sind.
            Ihrem Browser wird dabei eine pseudonyme Identifikationsnummer (ID)
            zugeordnet, um zu überprüfen, welche Anzeigen in Ihrem Browser
            eingeblendet, und welche Anzeigen aufgerufen wurden. Die Cookies
            enthalten keine personenbezogenen Informationen. Die Verwendung der
            DoubleClick-Cookies ermöglicht Google und seinen Partner-Webseiten
            lediglich, für Sie relevante Anzeigen auf Basis vorheriger Besuche
            auf unserer oder auf anderen Webseiten im Internet zu schalten.
          </p>
          <p className="font_daten">
            <span className="fw-bold">c) </span>Was passiert mit den Daten?
          </p>
          <p className="font_daten">
            Die durch die Anwendungen gewonnenen Analysedaten werden an einen
            Server von Google in den USA übertragen und dort gespeichert. Google
            wird diese Informationen in unserem Auftrag benutzen, um Ihre
            Nutzung der Webseite auszuwerten, um Reports über die
            Webseitenaktivitäten zusammenzustellen und um weitere mit der
            Webseitennutzung und der Internetnutzung verbundene Dienstleistungen
            gegenüber uns als dem Webseitenbetreiber zu erbringen. Die im Rahmen
            der Google - Dienste von Ihrem Browser übermittelten Daten werden
            nicht mit anderen Daten von Google zusammengeführt. Um den Schutz
            Ihrer Daten zu erhöhen, verwenden wir Google Analytics und Universal
            Analytics mit der Erweiterung "_anonymizeIp()". Dadurch werden
            IP-Adressen ausschließlich gekürzt weiterverarbeitet, so dass eine
            direkte Personenbeziehbarkeit ausgeschlossen werden kann.
          </p>
          <p className="font_daten">
            <span className="fw-bold">d)</span> Wie können Sie der Datenerhebung
            und -verarbeitung widersprechen?
          </p>
          <p className="font_daten">
            Für die Erhebung und Verarbeitung von Daten durch Google (Google
            Analytics, Google Universal Analytics und Google Dobbleclick) in der
            zuvor beschriebenen Art und Weise ist ihre ausdrückliche
            Einwilligung erforderlich. Hierzu haben Sie zu Beginn des
            Nutzungsvorgangs die Möglichkeit, über den Cookie-Banner Ihre
            Einwilligung zu verweigern oder zu erteilen und sich über die
            Datenschutzregeln unseres Unternehmens zu informieren. Durch ihre
            Einwilligung erklären Sie sich mit der Verarbeitung zu den genannten
            Zwecken einverstanden.
          </p>
          <p className="font_daten">
            Erteilen Sie Ihre Einwilligung, erfolgt die Datenverarbeitung auf
            Grundlage von Art. 6 Abs. 1 a) DSGVO.
          </p>
          <p className="font_daten">
            Sie haben das Recht, eine von Ihnen erteilte Einwilligung jederzeit
            mit Wirkung für die Zukunft zu widerrufen.
          </p>
          <p className="font_daten">
            Den Widerruf können Sie z.B. dadurch ausüben, dass Sie die
            CookieEinstellungen über den folgenden Link aufrufen und ändern.
          </p>

          <h2 className="title_daten">6. Eingebundene Drittdienste</h2>
          <p className="font_daten">
            Soweit wir im Rahmen unseres Online-Angebots Dienste anderer
            Anbieter einbinden, um Ihnen bestimmte Inhalte oder Funktionen zu
            bieten (z.B. das Abspielen von Videos oder eine Routenplanung) und
            wir dabei personenbezogene Daten verarbeiten, erfolgt dies auf Basis
            des Artikels 6 Absatz 1 Buchstabe b) und f) DSGVO. Denn die
            Datenverarbeitung ist dann erforderlich, um die von Ihnen gewählten
            Funktionen umzusetzen bzw. um unser berechtigtes Interesse an einem
            optimalen Funktionsumfang des Online-Angebots zu wahren. Soweit im
            Rahmen dieser Drittdienste möglicherweise Cookies eingesetzt werden,
            gelten die Ausführungen unter Ziffer 5. Bitte informieren Sie sich
            in Bezug auf die Drittdienste auch über die Datenschutzerklärung des
            jeweiligen Anbieters.
          </p>
          <p className="font_daten">
            Dienste anderer Anbieter, die wir einbinden bzw. auf die von uns
            verwiesen wird, werden von den entsprechenden Dritten
            bereitgestellt. Wir haben grundsätzlich keinen Einfluss auf Inhalt
            und Funktion der Drittdienste und sind für die Verarbeitung Ihrer
            personenbezogenen Daten durch deren Anbieter grundsätzlich nicht
            verantwortlich, soweit die Drittdienste nicht vollständig in unserem
            Auftrag konzipiert und dann von uns in eigener Verantwortlichkeit
            eingebunden werden. Soweit die Einbindung eines Drittdienstes dazu
            führt, dass wir mit dessen Anbieter gemeinsame Prozesse etablieren,
            legen wir mit diesem Anbieter in einer Vereinbarung über die
            gemeinsame Verantwortlichkeit nach Artikel 26 DSGVO fest, wie die
            jeweiligen Aufgaben und Zuständigkeiten bei der Verarbeitung
            personenbezogener Daten ausgestaltet sind und wer welche
            datenschutzrechtlichen Verpflichtungen erfüllt. Soweit Cookies auch
            auf Basis Ihrer Einwilligung gesetzt werden sollen, erhalten Sie
            weitere Informationen zur Verantwortlichkeit für das Setzen dieser
            Cookies bzw. damit ggf. verbundene Drittdienste im entsprechenden
            Bereich des Einwilligungsmanagements.
          </p>
          <p className="font_daten">
            Soweit nicht anders angegeben, werden Profile auf Social Media in
            unserem Online-Angebot grundsätzlich lediglich als Link zu den
            entsprechenden Drittdiensten eingebunden. Nach dem Anklicken des
            eingebundenen Text-/Bild-Links werden Sie auf das Angebot des
            jeweiligen Social-Media-Anbieters weitergeleitet. Nach der
            Weiterleitung werden ggf. personenbezogene Daten direkt durch den
            Drittanbieter erhoben. Sollten Sie währenddessen in Ihrem
            Benutzerkonto des jeweiligen Social-Media-Anbieters eingeloggt sein,
            kann dieser ggf. die gesammelten Informationen des konkreten Besuchs
            dem persönlichen Benutzerkonto zuordnen. Interagieren Sie über einen
            „Teilen“-Button des jeweiligen Social-Media-Anbieters, können diese
            Informationen in dem persönlichen Benutzerkonto gespeichert und ggf.
            veröffentlicht werden. Möchten Sie verhindern, dass die gesammelten
            Informationen unmittelbar Ihrem Benutzerkonto zugeordnet werden,
            müssen Sie sich vor dem Anklicken des eingebundenen Text-/Bild-Links
            ausloggen.
          </p>
          <h2 className="title_daten">7. Empfänger personenbezogener Daten</h2>
          <p className="font_daten">
            Innerhalb unseres Unternehmens haben nur diejenigen Personen Zugriff
            auf Ihre personenbezogenen Daten, die diese für die jeweils
            genannten Zwecke benötigen. An externe Empfänger geben Ihre
            personenbezogenen Daten nur weiter, wenn hierfür eine gesetzliche
            Erlaubnis besteht oder uns Ihre Einwilligung vorliegt.
          </p>
          <h2 className="title_daten">8. Datenverarbeitung in Drittländern</h2>
          <p className="font_daten">
            Findet eine Datenübermittlung an Stellen statt, deren Sitz oder
            deren Ort der Datenverarbeitung nicht in einem Mitgliedstaat der
            Europäischen Union, einem anderen Vertragsstaat des Abkommens über
            den Europäischen Wirtschaftsraum oder einem Staat, für den durch
            einen Beschluss der Europäischen Kommission ein angemessenes
            Datenschutzniveau festgestellt wurde, gelegen ist, stellen wir vor
            der Weitergabe sicher, dass die Datenübermittlung entweder durch
            einen gesetzlichen Erlaubnistatbestand gedeckt ist, Garantien für
            ein angemessenes Datenschutzniveau in Bezug auf die
            Datenübermittlung bestehen (z.B. durch die Vereinbarung
            vertraglicher Gewährleistungen, behördlich anerkannte Regelungen
            oder verbindliche interne Datenschutzvorschriften beim Empfänger)
            oder Sie Ihre Einwilligung in die Datenübermittlung erteilt haben.
          </p>
          <p className="font_daten">
            Soweit die Datenübermittlung auf Grundlage von Artikel 46, 47 oder
            49 Absatz 1 Unterabsatz 2 DSGVO erfolgt, können Sie bei uns eine
            Kopie der Garantien für das Bestehen eines angemessenen
            Datenschutzniveaus in Bezug auf die Datenübermittlung oder einen
            Hinweis auf die Verfügbarkeit einer Kopie der Garantien erhalten.
            Bitte nutzen Sie hierfür die Angaben unter Ziffer 1.
          </p>
          <h2 className="title_daten">9. Speicherdauer, Löschung</h2>
          <p className="font_daten">
            Wir speichern Ihre personenbezogenen Daten, wenn hierfür eine
            gesetzliche Erlaubnis besteht, nur so lange wie zur Erreichung der
            verfolgten Zwecke erforderlich bzw. solange Sie die Einwilligung
            nicht widerrufen haben. Im Falle eines Widerspruchs gegen die
            Verarbeitung löschen wir Ihre personenbezogenen Daten, es sei denn,
            die Weiterverarbeitung ist nach den gesetzlichen Bestimmungen
            weiterhin erlaubt. Wir löschen Ihre personenbezogenen Daten auch
            dann, wenn wir hierzu aus anderen rechtlichen Gründen verpflichtet
            sind. Unter Anwendung dieser allgemeinen Grundsätze löschen wir Ihre
            personenbezogenen Daten in der Regel unverzüglich.
          </p>
          <p className="font_daten">
            Nach Wegfall der rechtlichen Grundlage und sofern keine anderweitige
            Rechtsgrundlage (z.B. handels- und steuerrechtliche
            Aufbewahrungsfristen) eingreift. Falls Letzteres zutrifft, löschen
            wir die Daten nach Wegfall der anderweitigen Rechtsgrundlage; wenn
            Ihre personenbezogenen Daten für die von uns verfolgten Zwecke nicht
            mehr erforderlich sind und keine anderweitige Rechtsgrundlage (z.B.
            handelsund steuerrechtliche Aufbewahrungsfristen) eingreift. Falls
            Letzteres zutrifft, löschen wir die Daten nach Wegfall der
            anderweitigen Rechtsgrundlage.
          </p>
          <h2 className="title_daten">10. Betroffenenrechte</h2>
          <p className="font_daten">
            <span className="fw-bold">Auskunftsrecht: </span>
            Sie haben das Recht, Auskunft über die von uns zu Ihrer Person
            gespeicherten Daten zu erhalten.
          </p>
          <p className="font_daten">
            <span className="fw-bold">Berichtigungs- und Löschungsrecht: </span>
            Sie können von uns die Berichtigung falscher Daten und - soweit die
            gesetzlichen Voraussetzungen erfüllt sind - Löschung Ihrer Daten
            verlangen.
          </p>
          <p className="font_daten">
            <span className="fw-bold">Einschränkung der Verarbeitung: </span>
            Sie können von uns - soweit die gesetzlichen Voraussetzungen erfüllt
            sind - verlangen, dass wir die Verarbeitung Ihrer Daten
            einschränken.
          </p>
          <p className="font_daten">
            <span className="fw-bold">Datenübertragbarkeit: </span>
            Sollten Sie uns Daten auf Basis eines Vertrages oder einer
            Einwilligung bereitgestellt haben, so können Sie bei Vorliegen der
            gesetzlichen Voraussetzungen verlangen, dass Sie die von Ihnen
            bereitgestellten Daten in einem strukturierten, gängigen und
            maschinenlesbaren Format erhalten oder dass wir diese an einen
            anderen Verantwortlichen übermitteln.
          </p>
          <p className="font_daten">
            <span className="fw-bold">Widerspruch: </span>Sie haben das Recht,
            aus Gründen, die sich aus ihrer besonderen Situation ergeben,
            jederzeit der Datenverarbeitung durch uns zu widersprechen, soweit
            diese auf der Wahrung berechtigter Interesse beruht. Sofern Sie von
            Ihrem Widerspruchsrecht Gebrauch machen, werden wir die Verarbeitung
            einstellen, es sei denn, wir können zwingende schutzwürdige Gründe
            für die Weiterverarbeitung nachweisen, welche Ihre Rechte und
            Interessen überwiegen.
          </p>
          <p className="font_daten">
            <span className="fw-bold">Widerspruch gegen Direktwerbung: </span>
            Sofern wir Ihre personenbezogenen Daten verarbeiten, um
            Direktwerbung zu betreiben, haben Sie das Recht, jederzeit der
            Datenverarbeitung durch uns zu diesem Zweck zu widersprechen. Sofern
            Sie von Ihrem Widerspruchsrecht Gebrauch machen, werden wir die
            Verarbeitung zu diesem Zweck einstellen.
          </p>
          <p className="font_daten">
            <span className="fw-bold">Widerruf der Einwilligung: </span>Sofern
            Sie uns eine Einwilligung in die Verarbeitung Ihrer
            personenbezogenen Daten erteilt haben, können Sie diese jederzeit
            mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der
            Verarbeitung Ihrer Daten bis zum Widerruf bleibt hiervon unberührt.
          </p>
          <p className="font_daten">
            <span className="fw-bold">
              Beschwerderecht bei der Aufsichtsbehörde:{" "}
            </span>
            Sie können zudem eine Beschwerde bei der zuständigen
            Aufsichtsbehörde einreichen, wenn Sie der Meinung sind, dass die
            Verarbeitung Ihrer Daten gegen geltendes Recht verstößt. Sie können
            sich hierzu an die Aufsichtsbehörde wenden, die für Ihren Wohnort
            bzw. Ihr Land zuständig ist oder an die für uns zuständige
            Aufsichtsbehörde.
          </p>
          <p className="font_daten">
            <span className="fw-bold">
              Ihr Kontakt zu uns und die Ausübung Ihrer Rechte:{" "}
            </span>
            Des Weiteren können Sie sich bei Fragen zur Verarbeitung Ihrer
            personenbezogenen Daten und zu Ihren Betroffenenrechten
            unentgeltlich mit uns in Verbindung setzen. Wenden Sie sich bitte an
            kontakt@open-agile.de oder postalisch an die oben unter Ziffer 1
            angegebene Anschriften. Bitte stellen Sie dabei sicher, dass uns
            eine eindeutige Identifizierung Ihrer Person möglich ist. Beim
            Widerruf der Einwilligung können Sie alternativ auch den Kontaktweg
            wählen, den Sie bei der Abgabe der Einwilligung verwendet haben.
          </p>
          <h2 className="title_daten">11. Links zu Angeboten Dritter</h2>
          <p className="font_daten">
            Webseiten sowie Dienste anderer Anbieter, auf die von unserem
            OnlineAngebot verlinkt wird, werden von Dritten gestaltet und
            bereitgestellt. Wir haben keinen Einfluss auf Gestaltung, Inhalt und
            Funktion dieser Drittdienste. Wir distanzieren uns ausdrücklich von
            allen Inhalten sämtlicher verlinkter Angebote Dritter. Bitte
            beachten Sie, dass die von unserem Online-Angebot verlinkten
            Angebote Dritter möglicherweise eigene Cookies auf Ihrem Endgerät
            installieren bzw. personenbezogene Daten erheben. Wir haben hierauf
            keinen Einfluss. Bitte informieren Sie sich insoweit gegebenenfalls
            direkt bei den Anbietern dieser verlinkten Drittangebote.
          </p>
          <p className="font_daten">
            Der jeweilige Anbieter und Verantwortliche ist insbesondere über das
            Impressum und die jeweiligen Datenschutzhinweise auf den
            entsprechenden Webseiten ersichtlich.
          </p>
          <h2 className="title_daten">12. Stand</h2>
          <p className="font_daten">
            Es gilt die aktuellste Version dieser Datenschutzerklärung.
          </p>
          <p className="font_daten mb-5">Stand: 26.01.2022</p>
        </div>
        {/*Footer  */}
        <Footer />
      </div>

      {/*Menu Lateral oculto  */}
      <MenuFlotante />
    </>
  );
}
