import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'See.. Browser',
  description: 'find search See..',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
        {/* footer */}
        <Footer/>
        </body>
    </html>
  )
}
