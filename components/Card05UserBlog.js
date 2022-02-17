let longitud_linea = 24;

export default function Card05UserBlog({ data }) {
  const titulo = data.attributes.title;
  const titulo2 = data.attributes.subtitle;
  const link = data.attributes.slug;
  return (
    <>
      <div className="card myanimacion sombra_cards redondear-card pb-1 ">
        <div className="row   g-0 pb-2">
          <img
            className=" imagen-blog "
            src={data.attributes.img.data.attributes.url}
          />
        </div>

        <div className="row w-100  g-0 size_blog_card d-flex  align-items-center justify-content-center ">
          <div className="col-7  ps-2   ">
            {titulo != undefined && titulo != "" && (
              <>
                <div className="ps-1 font1-card-blog ">{titulo}</div>
              </>
            )}
            {titulo2 != undefined && titulo2 != "" && (
              <>
                <div className="ps-1 font2-card-blog ">{titulo2}</div>
              </>
            )}
          </div>
          <div className="col-5   d-flex  align-items-center justify-content-center ">
            <a href={`${"blog/" + link}`}>
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
