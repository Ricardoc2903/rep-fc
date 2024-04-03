import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer bg-gray-100 dark:bg-zinc-900">
        <div className="footer-content m-3 flex flex-col sm:flex-row justify-evenly items-center">
          <div className="contacto flex flex-col items-center">
            <h1 className=' text-center text-primary-400 text-xl'>Contacto</h1>
            <p>Números: 11 3323 5117 / 11 3323 3322</p>
            {/* <a className=' text-sm text-wrap sm:text-lg hover:text-primary-400' id="mail" href="mailto: fc.refrigeracion.fc@gmail.com">fc.refrigeracion.fc@gmail.com</a> */}
          </div>
          <div className="social flex flex-col items-center">
            <h1 className=' text-center text-primary-400 text-xl'>Redes Sociales</h1>
            <a className='hover:text-primary-400' href="#">Facebook</a>
            <a className='hover:text-primary-400' href="#">Instagram</a>
          </div>
        </div>
        <div className=" text-center p-2 bg-primary-400 dark:bg-primary-200 footer-copyright">
          <p>© 2023 F&amp;C | Todos los derechos reservados / diseñado por Ricardo</p>
        </div>
      </div>
    </div>
  )
}
