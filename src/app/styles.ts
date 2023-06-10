'use client'

import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};

  h1 {
    color: ${({ theme }) => theme.text_primary};
  }
`
