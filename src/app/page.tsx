'use client'
import { Copy, ArrowClockwise } from 'phosphor-react'
import { Header } from '@/components/Header'
import { useMutation, useQuery } from '@apollo/client'
import {
  getSessionMails,
  introduceSession,
  getAllSessions,
} from '@/services/querys'
import { useEffect, useState } from 'react'
import { IUserSession } from '@/types'

import {
  EmailContainer,
  EmailContent,
  EmailPreview,
  HomeContainer,
} from './styles'

export default function Home() {
  const [createSession] = useMutation(introduceSession)
  const [userSessionInfo, setUserSessionInfo] = useState<IUserSession>()
  const { data } = useQuery(getSessionMails, {
    variables: { sessionId: userSessionInfo?.id },
  })

  console.log(data)
  console.log(userSessionInfo)

  async function createNewSession() {
    try {
      const { data } = await createSession()

      const userInfo: IUserSession = {
        id: data.introduceSession.id,
        email: data.introduceSession.addresses[0].address,
      }

      setUserSessionInfo(userInfo)
      localStorage.setItem('@maildrop', JSON.stringify(userInfo))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const userInfoLocalStorage = JSON.parse(
      localStorage.getItem('@maildrop') || '',
    )

    createNewSession()

    if (userInfoLocalStorage === '') {
      createNewSession()
    } else {
      setUserSessionInfo(userInfoLocalStorage)
    }
  }, [])

  return (
    <HomeContainer>
      <Header />
      <div className="create-email">
        <div className="content">
          <p>Your temporary email address</p>
          <div className="input-email">
            <input type="text" />
            <div className="copy">
              <Copy size={24} />
              <p>Copy</p>
            </div>
          </div>
          <div className="refresh-email">
            <span>
              <p>Autorefresh in</p>
              <div className="refresh-seconds">
                <p>15</p>
              </div>
            </span>
            <span>
              <ArrowClockwise size={24} />
              <p>Refresh</p>
            </span>
          </div>
        </div>
      </div>
      <EmailContainer>
        <EmailPreview>
          <h4>Inbox</h4>
          <div className="preview">
            <div className="preview-item">
              <div className="subject">Hello</div>
              <div className="title">Welcome</div>
              <div className="text">Your temp e-mail adress is ready...</div>
            </div>
            <div className="preview-item">
              <div className="subject">Hello</div>
              <div className="title">Welcome</div>
              <div className="text">Your temp e-mail adress is ready...</div>
            </div>
          </div>
        </EmailPreview>
        <EmailContent>
          <h5>Welcome</h5>
          <div className="email-body">
            <p>Your temp e-mail adress is ready</p>
          </div>
        </EmailContent>
      </EmailContainer>
    </HomeContainer>
  )
}
