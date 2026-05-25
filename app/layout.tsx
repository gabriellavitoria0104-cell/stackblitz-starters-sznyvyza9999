import './globals.css'

export const metadata = {
  titulo: 'VynkWorking',
  description: 'Plataforma profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}