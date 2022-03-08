import { servidor_url } from "../../config";
import Image from "next/image";

export default function IconosTeam({ phone, email, linkedin }) {
  return (
    <>
      {/* <div className="row  g-0 item-iconos-team "> */}
      <div className="ms-4 pb-4">
   

        <a href={phone}>


          <img className=" ms-5 social-img-team "  src={`https://js-agileweb-files.s3.us-east-2.amazonaws.com/img/team/phone.svg`}  loading="lazy"   />

   
        </a>

        <a href={linkedin}>
          <img
            className=" ms-4 social-img-team "
            src={`https://js-agileweb-files.s3.us-east-2.amazonaws.com/img/team/linkedin.svg`}
            loading="lazy" 
          />
        </a>

        <a href={`mailto:${email}`}>
          <img
            className=" ms-4 social-img-team "
            src={`https://js-agileweb-files.s3.us-east-2.amazonaws.com/img/team/email.svg`}
            loading="lazy" 
          />
        </a>
      </div>
    </>
  );
}
