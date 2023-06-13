'use client'
import styled from 'styled-components'

export const EmailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .spacing {
    width: 100%;
    height: 42px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  .email-title {
    padding: 8px;
  }

  .email-body {
    display: flex;
    flex: 1;
    width: 100%;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.border};
    margin: 4px;
    margin-bottom: 0;
    padding: 6px;
  }
`
