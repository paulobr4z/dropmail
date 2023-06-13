'use client'
import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { useMutation, useQuery } from '@apollo/client'
import { InputEmail } from '@/components/InputEmail'
import { RefreshEmail } from '@/components/RefreshEmail'
import { EmailContent } from '@/components/EmailContent'
import { Notifications } from '@/components/Notifications'
import { IEmail, ISessions, IUserSession } from '@/types'
import {
  getAllSessions,
  getSessionEmails,
  introduceSession,
} from '@/services/querys'

import { EmailContainer, EmailPreview, HomeContainer } from './styles'

export default function Home() {
  const [createSession] = useMutation(introduceSession)
  const [userSessionInfo, setUserSessionInfo] = useState<IUserSession>()
  const [emails, setEmails] = useState<IEmail[]>([])
  const [emailSelected, setEmailSelected] = useState(0)
  const [sessions, setSessions] = useState<ISessions[]>([])

  const { refetch } = useQuery(getSessionEmails, {
    variables: { sessionId: userSessionInfo?.id },
    onCompleted(data) {
      // setEmails(data?.session.mails)
    },
  })

  useQuery(getAllSessions, {
    onCompleted(data) {
      setSessions(data.sessions)
    },
  })

  async function createNewSession() {
    try {
      const { data } = await createSession()

      const userInfo: IUserSession = {
        id: data.introduceSession.id,
        email: data.introduceSession.addresses[0].address,
        expiresAt: data.introduceSession.expiresAt,
      }

      setUserSessionInfo(userInfo)
      localStorage.setItem('@maildrop', JSON.stringify(userInfo))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem('@maildrop') || ''

    if (!userInfoLocalStorage) {
      createNewSession()
    } else {
      setUserSessionInfo(JSON.parse(userInfoLocalStorage))
    }
  }, [])

  useEffect(() => {
    const hasSession = sessions.some((item) => item.id === userSessionInfo?.id)

    if (!hasSession) {
      createNewSession()
    }
  }, [sessions])

  return (
    <HomeContainer>
      <Header />
      <div className="create-email">
        <div className="content">
          <p>Your temporary email address</p>
          <InputEmail email={userSessionInfo?.email} />
          <RefreshEmail refreshInbox={() => refetch()} />
        </div>
      </div>
      <EmailContainer>
        <EmailPreview>
          <h4>Inbox</h4>
          <div className="preview">
            {emails.map((email, index) => (
              <div
                className="preview-item"
                key={email.fromAddr + index}
                onClick={() => setEmailSelected(index)}
              >
                <div className="subject">{email.headerSubject}</div>
                <div className="title">{email.fromAddr}</div>
                <div className="text">{email.text}</div>
              </div>
            ))}
          </div>
        </EmailPreview>
        <EmailContent emails={emails} emailSelected={emailSelected} />
      </EmailContainer>
      <Notifications />
    </HomeContainer>
  )
}
