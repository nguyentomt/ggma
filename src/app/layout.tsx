import type { Metadata } from 'next'
import { Tinos } from 'next/font/google'
import './globals.css'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import AltNav from './components/AltNav'


const tinos = Tinos({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Garden Grove Montessori',
  description: 'Garden Grove Montessori Academy is a preschool and kindergarten providing an education and nurturing environment for the developmental needs of 2 years to 6 years old children in the beautiful city of Garden Grove in Orange County, California.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${tinos.className}`}>
        {/* <NavBar /> */}
        <AltNav />
        {children}
        <Footer />
      </body>
      
      
    </html>
  )
}
