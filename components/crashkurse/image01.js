export default function Image01({image}) {

    let ancho = 70;



  return (
<>

{/* style={{maxWidth: ancho+'px'}}> */}

    <div className="row mt-5 d-flex align-items-center ">
    <div className="col-2">

    </div>
    <div className="col-3">
        <div className="card mb-3" style={{width: ancho+'vw'}}>
            <div className="row no-gutters">
                <div className="col">
                    <img src={`img/${image}`} className="card-img" alt="..."/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-3 ">
    xx
    </div>
</div>

</>
  );
}