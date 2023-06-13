'use client'
import styled from 'styled-components'

export const InputEmailContainer = styled.div`
  .input-email {
    display: flex;
    width: 100%;

    input {
      padding: 8px;
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 6px 0 0 6px;
      width: 100%;
      outline: none;
      background-color: ${({ theme }) => theme.background};
    }
  }

  .copy {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 0 6px 6px 0;
    border-left: none;
    cursor: pointer;

    p {
      font-size: 14px;
    }
  }
`
