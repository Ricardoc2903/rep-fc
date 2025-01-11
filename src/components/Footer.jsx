import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <div className="footer bg-gray-100 dark:bg-zinc-900">
        <div className="footer-content m-3 flex flex-col sm:flex-row justify-evenly items-center">
          <div className="contacto flex flex-col items-center">
            <h1 className=" text-center text-primary-400 text-xl">Contacto</h1>
            <p>11 3323 5117 / 11 3323 6982</p>
          </div>
          <div className="social flex flex-col items-center">
            <h1 className=" text-center text-primary-400 text-xl">
              Redes Sociales
            </h1>
            <div className="flex flex-row gap-2">
              <div>
                <a className="hover:text-primary-400" href="https://www.facebook.com/fc.refrigeracion.9">
                  <BsFacebook />
                </a>
              </div>
              <div>
                <a className="hover:text-primary-400" href="https://www.instagram.com/fcfreddycoello/">
                  <BsInstagram /> 
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center p-2 bg-primary-400 dark:bg-primary-200 footer-copyright">
          <p>
            © 2023 F&amp;C | Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
