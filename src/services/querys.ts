import { gql } from '@apollo/client'

const introduceSession = gql`
  mutation {
    introduceSession {
      id
      expiresAt
      addresses {
        address
      }
    }
  }
`

const getSessionMails = gql`
  query GetSessionMails($sessionId: ID!) {
    session(id: $sessionId) {
      mails {
        rawSize
        fromAddr
        toAddr
        downloadUrl
        text
        headerSubject
      }
    }
  }
`

const getAllSessions = gql`
  query {
    sessions {
      id
      expiresAt
      mails {
        rawSize
        fromAddr
        toAddr
        downloadUrl
        text
        headerSubject
      }
    }
  }
`

export { introduceSession, getSessionMails, getAllSessions }
