import { v4 as uuidv4 } from "uuid"
import SimpleFooter from "./SimpleFooter"

const contactInfo = {
  Correo: "poesia@uniandes.edu.co",
  Instagram: "@poesiauniandes",
  Facebook: "poesia.uniandes",
  Ubicación: "Viernes a las 5 pm en la Plazoleta del CAI",
  Protocolo: "Código de conducta",
}

const Footer = () => {
  return (
    <div className="bg-extra2 space-y-12 items-center text-center text-white">
      <div className="space-y-12 px-4 pt-12 md:max-w-2xl lg:text-left grow-container">
        <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
          <h5 className="font-sans text-xs font-bold uppercase">Contacto</h5>
          <p className="font-serif text-xl w-full">
            Ya sea para eventos, colaboraciones o simplemente quieres saber más
            de la iniciativa, puedes escribirnos y te responderemos lo más
            pronto posible
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-3 md:space-y-0 md:gap-y-10 lg:flex lg:justify-between  ">
          {Object.entries(contactInfo).map(([subtitle, info]) => (
            <div
              key={uuidv4()}
              className="text-sm space-y-2 max-w-[150px] mx-auto lg:mx-0"
            >
              <h6 className="font-sans font-medium uppercase">{subtitle}</h6>
              <a className="">{info}</a>
            </div>
          ))}
        </div>
      </div>
      <SimpleFooter />
    </div>
  )
}
export default Footer
