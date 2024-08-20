import Link from "next/link"

export default function Footer() {
    return (
        <section id="footer" className="w-screen h-36 py-4 bg-yellow-100 flex flex-col md:flex-row justify-around items-center font-bold text-center">
            
              <div className="md:w-1/3">10141 Lampson Ave, Garden Grove, CA 92840</div>

              <div className="md:w-1/3"><a href="tel:7146366300">(714) 636 - 6300</a></div>

              <div className="md:w-1/3">Copyright© GGMA</div>
            
        </section>
    )
}