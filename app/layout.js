// app/layout.js - CORRECTED VERSION

import { Providers } from './providers' // Import our new providers component
import './globals.css'

export const metadata = {
  title: 'Taodocos Begena | Learn the Divine Harp',
  description: 'Master the art of the Begena with expert-led online lessons. Join our community and explore the spiritual melodies of King Davids Harp.',
}

export default function RootLayout({ children }) {
  return (
    // NOTE: The <html> and <body> tags will be rendered by the nested layout.
    // We are just setting up the Providers here.
    <Providers>
      {children}
    </Providers>
  )
}