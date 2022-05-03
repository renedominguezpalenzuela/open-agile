import React from "react";
import ReactMarkdown from "react-markdown";

export default function KurseContent01({
  imagen,
  description,
  imagen_botones,
  titulo_botones,
  text_termine,
  link_weitere_infos,
  link_termine,
}) {
  
  return (
    <>
      <div className="row  ">
        {imagen != undefined && imagen != "" && imagen != null && (
          <img className="img-fluid  mb-4" src={`${imagen}`} alt="" loading="lazy" />
        )}
        <ReactMarkdown className="markdowncurso mybullets">
          {description}
        </ReactMarkdown>
      </div>
    </>
  );
}
