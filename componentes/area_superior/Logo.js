import { servidor_url } from "../../config";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <a className="ms-5 " href="/">
        <img className="   " src={`${servidor_url}/img/logo/5.svg`} />
      </a>
    </>
  );
}
