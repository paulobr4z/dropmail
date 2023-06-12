'use client'
import { client } from '@/services/client'
import { GlobalStyle } from '@/styles/global'
import { defaultheme } from '@/styles/themes/default'
import { ApolloProvider } from '@apollo/client'
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
        <ApolloProvider client={client}>
          <ThemeProvider theme={defaultheme}>
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}
