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
  width: 100%;
  max-width: 320px;

  h4 {
    padding: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    border-top: 0;
  }

  .preview {
    height: 100%;
    width: 100%;
    max-width: 320px;

    .preview-item {
      padding: 4px;
      border-bottom: 1px solid ${({ theme }) => theme.border};
      cursor: pointer;
    }
  }
`
