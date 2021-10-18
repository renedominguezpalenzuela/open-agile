import Card01 from "./Card01";


export default function Card01Lista({ lista_cards }) {
  return (
<>
  <div className="row  row-cols-1 row-cols-md-4 g-5  justify-content-center">
    <Card01 imagen="card01.jpg" titulo="Selbstorganisation in agilen Teams" texto="Lorem ipsum dolor sit amet" />
    <Card01 imagen="card02.jpg" titulo="Agile Facilitator" texto="Consectetur adipiscing elit, sed do eiusmod tempor" />
    <Card01 imagen="card03.jpg " titulo="Agile Coach" texto="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
    <Card01 imagen="card05.jpg" titulo="Scrum Master" texto="quis nostrud exercitation ullamco laboris" />
  </div>
</>
  );
}
