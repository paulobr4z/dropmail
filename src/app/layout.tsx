'use client'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyle } from '@/styles/global'
import { defaultheme } from '@/styles/themes/default'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <ThemeProvider theme={defaultheme}>
          <StyledComponentsRegistry>
            {children}
            <GlobalStyle />
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
