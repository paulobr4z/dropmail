'use client'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.background};

  .wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1440px;

    .logo {
      color: ${({ theme }) => theme.text_primary};
      font-weight: 800;
      font-size: 18px;
    }
  }
`
