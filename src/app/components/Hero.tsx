import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <section id="hero" className="flex w-screen h-screen">

            
            
            <div id="left-side" className="md:w-3/4 px-12 md:px-48 md:py-8 flex flex-col">

                <h1 className="text-2xl underline md:text-5xl">Garden Grove Montessori Academy</h1>
                <p className="text-lg md:text-xl">is a preschool and kindergarten providing an education and nurturing environment for the developmental needs of 2 years to 6 years old children in the beautiful city of Garden Grove in Orange County, California.</p>

                <Link id="call-to-action" href="#program" className="z-10 px-12 py-2 mt-4 md:w-1/3 text-center font-bold text-lg rounded-full text-yellow-200 leading-loose transition duration-400 bg-blue-600 hover:bg-blue-200 hover:text-blue-700">Learn More</Link>
                <Image src="/preschool_transparent.png" alt="hero-image" layout="object-fit" height={389} width={600} className="absolute w-full mt-96 pt-8 md:-top-12 left-0" />
            </div>
        </section>
    )
}