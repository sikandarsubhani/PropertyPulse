// app/layout.jsx
import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental property,real estate',
  description: 'Find the Perrfet Rental Property'
}
const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )

}

export default MainLayout