'use client'
import { GlobalStyle } from '@/styles/global'
import { defaultheme } from '@/styles/themes/default'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <title>DropMail</title>
      </head>
      <body className={poppins.className}>
        <ThemeProvider theme={defaultheme}>
          {children}
          <GlobalStyle />
        </ThemeProvider>
      </body>
    </html>
  )
}
