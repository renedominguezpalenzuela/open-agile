import { servidor_url } from "../../config";
import Image from "next/image";

export default function IconosTeam({ phone, email, linkedin }) {
  return (
    <>
      {/* <div className="row  g-0 item-iconos-team "> */}
      <div className="ms-4">
        {/* <a href="https://www.linkedin.com/company/open-agile">
          <i className="ms-5 social-img-team bi-telephone-fill "></i>
        </a>

        <a href="https://www.linkedin.com/company/open-agile">
          <i className="ms-4 social-img-team bi-linkedin "></i>
        </a>

        <a href="https://www.linkedin.com/company/open-agile">
          <i className="ms-4 social-img-team bi-envelope-fill"></i>
        </a> */}

        <a href={phone}>


          <img className=" ms-5 social-img-team "  src={`${servidor_url}/img/team/phone.svg`}    />

   
        </a>

        <a href={linkedin}>
          <img
            className=" ms-4 social-img-team "
            src={`${servidor_url}/img/team/linkedin.svg`}
          />
        </a>

        <a href={`mailto:${email}`}>
          <img
            className=" ms-4 social-img-team "
            src={`${servidor_url}/img/team/email.svg`}
          />
        </a>
      </div>
    </>
  );
}
