import type { Metadata } from 'next'
import './globals.css'
import GridScan from '@/components/GridScan'

export const metadata: Metadata = {
  title: 'Hadi Malik - Frontend Developer',
  description: 'Full-stack developer crafting exceptional digital experiences with modern web technologies',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ background: '#000000' }}>
      <body style={{ margin: 0, padding: 0, background: 'transparent' }}>
        <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
          <GridScan
            sensitivity={0}
            lineThickness={1}
            linesColor="#392e4e"
            scanColor="#00fa2a"
            scanOpacity={0.05}
            gridScale={0.09}
            lineStyle="solid"
            lineJitter={0.2}
            scanDirection="pingpong"
            noiseIntensity={0.01}
            scanGlow={0.5}
            scanSoftness={2}
            scanDuration={2}
            scanDelay={2}
            scanOnClick={false}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}