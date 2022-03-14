let longitud_linea = 24;

export default function Card05UserBlog({ data, dispositivo_chico }) {
  const titulo = data.attributes.title;
  const titulo2 = data.attributes.subtitle;
  const link = data.attributes.slug;
  return (
    <>
      <div className="card myanimacion sombra_cards redondear-card pb-sm-3  h-100">
        <div className="row   g-0 pb-2">
          <img
            className={`${dispositivo_chico?"imagen-blog-small":"imagen-blog"}`}
            src={data.attributes.img.data.attributes.formats.small.url}
            loading="lazy" 
          />
        </div>

        <div className="row w-100 h-100 g-0size_blog_card d-flex  align-items-start justify-content-center ">
          <div className="col-lg-7   ps-sd-2  h-lg-75 h-50 ">
            {titulo != undefined && titulo != "" && (
              <>
                <div className="ps-1 font1-card-blog ">{titulo}</div>
              </>
            )}
            {titulo2 != undefined && titulo2 != "" && !dispositivo_chico && (
              <>
                <div className="ps-1 font2-card-blog ">{titulo2}</div>
              </>
            )}
          </div>
          <div className="col-lg-5 pt-2  d-flex  align-items-center justify-content-center  h-sd-100 contenedor-boton-blog">
            
            <a href={`${"blog/" + link}`} className=" ">
            
              <button
                type="button"
                className="btn  btn-card-blog-new font-btn-card-blog rounded-pill  ">
                Jetzt lesen...
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
