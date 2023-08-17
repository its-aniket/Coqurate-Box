import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Coqurate Box',
  description: 'A gifitng solution company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <Navbar />
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
