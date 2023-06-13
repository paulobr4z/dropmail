'use client'
import styled from 'styled-components'

export const NotificationsContainer = styled.div`
  position: absolute;
  bottom: 32px;
  right: 16px;

  button {
    padding: 8px 16px;
    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.border};
    font-size: 14px;
  }
`
