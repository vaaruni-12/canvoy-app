import './globals.css'; // Add this import

export const metadata = {
  title: 'CanVoy - Cancer Care Companion',
  description: 'Connecting patients, doctors, and AI for better cancer care',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}