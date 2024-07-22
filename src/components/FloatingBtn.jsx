import whatsapp from "@/images/whatsapp.png"
import Image from "next/image"

import "@/app/FloatingBtn.css"

export default function FloatingBtn() {
  return (
    <div>
      <a href="https://wa.link/7ofobc">
        <div className="floating-button bell-animation">
          <Image src={whatsapp} alt="logo de whatsapp" />
        </div>
      </a>
    </div>
  )
}
