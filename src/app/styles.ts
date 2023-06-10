'use client'

import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  padding: 0 8px;

  .create-email {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px 4px 0 0;
    width: 100%;
    padding: 16px 0 48px 0;

    .content {
      width: 100%;
      max-width: 800px;

      p {
        font-size: 12px;
        padding: 4px 8px;
      }

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
    }
  }
`

export const EmailContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
`
export const EmailPreview = styled.aside`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.border};
  border-top: 0;

  h4 {
    padding: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    border-top: 0;
  }

  .preview {
    height: 100%;

    .preview-item {
      padding: 4px;
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
  }
`
export const EmailContent = styled.main``
