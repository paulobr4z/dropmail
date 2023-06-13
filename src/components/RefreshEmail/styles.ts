'use client'
import styled from 'styled-components'

export const RefreshEmailContainer = styled.div`
  .refresh-email {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding-top: 16px;

    span {
      display: flex;
      cursor: pointer;
    }

    .refresh-seconds {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.blue};
      width: 24px;
      height: 24px;

      p {
        line-height: 0;
      }
    }
  }
`
