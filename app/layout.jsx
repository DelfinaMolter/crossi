import { Courier_Prime, Anton } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'

const courier = Courier_Prime({ 
  subsets: ['latin'],
  variable: '--font-courier',
  weight: ['400', '700']
})
const anton = Anton({ 
  subsets: ['latin'],
  variable: '--font-anton',
  weight: ['400']
})

export const metadata = {
  title: 'Crossi',
  description: 'Cafe que te inspira.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={courier.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
