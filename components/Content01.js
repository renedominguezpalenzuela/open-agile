import BotonMenuFlotante from "./BotonMenuFlotante";
import MenuSuperior from "./MenuSuperior";
import IconosIzquierda from "./IconosIzquierda";

export default function Content01() {
  return (
<>
      {/*  <div className="container-fluid "> */}
    <section>
      <div id="row01" className="row">
        <div id="col01" className="col-md-1 mt-3 text-center position-relative ">
          <BotonMenuFlotante />
          <IconosIzquierda />
        </div>

        <div id="col02" className="col-md-10 ms-4 ">
          <MenuSuperior />
            {/*                               <!-- Contenido Principal --> */}
          <div className="row ms-3 mt-3">
            <h1 id="title">
              <div className="font_facit_title">
                <p>Dear future,</p>
                <p>we are ready</p>
              </div>
              <span className="font_facit_title font_facit_title_purple">
                  now.
              </span>
            </h1>
            <p className="font_facit_text">
                TRAINING PEOPLE & TRANSFORMING CULTURES
            </p>
          </div>
            {/*          <a className="btn btn-primary">Let's Start Your Journey </a> */}
        </div>
      </div>

        {/* 
    </div> */}
  </section>
</>
  );
}
