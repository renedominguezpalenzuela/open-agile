export default function AreaPrincipal({titulo1, titulo2}) {
  return (
<>

    <div className="row d-flex align-items-center justify-content-center ">


        <div className="col-md-9 ms-4 pt-5 mt-2 ">

            <div className="row   mt-3  ">
                <h2>
                    <div className="font_title_secundario font_title_purple">
                        {titulo1}
                    </div>
                </h2>


                <div className="font_title ">
                    <p>{titulo2}</p>
                </div>


            </div>


        </div>


    </div>
</>
  );
}
