import { servidor_url } from "../../config";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      <a className="ms-5 " href="/">
        <img className="   " src={`https://storage.googleapis.com/jsopenagile/img/logo/5.svg`} loading="lazy" />
      </a>
    </>
  );
}
