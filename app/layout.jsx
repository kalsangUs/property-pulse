import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = { 
    title: 'Property Pulse | Find The Perfect Rental',
    keywords: 'rental, find rentals, find properties', 
    description: 'Find your dream rental property', 
}

const MainLayout = ({ children }) => {
  return ( 
    <html>
        <body>
             <div lang="en">
            {children}
        </div>
        </body>
       
    </html>
  )
}

export default MainLayout