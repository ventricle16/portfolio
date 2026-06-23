import './globals.css'

export const metadata = {
  title: 'Niloy Sarkar | Portfolio',
  description: 'Welcome to my portfolio website showcasing my projects, research papers, and expertise.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">
        {children}
      </body>
    </html>
  )
}
