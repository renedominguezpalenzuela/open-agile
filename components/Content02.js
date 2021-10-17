import Card01Lista from "./Card01Lista";
import Content02Texto from "./Content02Texto";
import Content02Final from "./Content02Final";

export default function Content02() {
  return (
<>
  <section>
    <div className="row">
      <div className="column">
        <div id="second_line" className="row text-center m-3">
          <h3 className="font_second_line1"> CRASHKURSE</h3>
          <h5 className="font_second_line2">
                Lorem ipsum, dolor sit amet consectetur.
          </h5>
        </div>
      </div>

      <div className="row div_content02 h-100 d-inline-block">
            {/*        <div className="div_content02"></div> */}
        <Card01Lista />
        <div className="row m-4">&nbsp;</div>
        <div className="row m-4">&nbsp;</div>
        <div className="row  m-4 font_title2 justify-content-center">
              Innovation & Tradition
        </div>
        <div className="row  m-4 font_title3 justify-content-center">
              Das macht uns besonders
        </div>

        <Content02Texto />
        <Content02Final />
        <div className="row m-4">&nbsp;</div>
      
      </div>
    </div>
  </section>
</>
  );
}
