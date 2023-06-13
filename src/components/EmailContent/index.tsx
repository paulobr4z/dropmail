import { IEmail } from '@/types'
import { EmailContentContainer } from './styles'
import { useEffect, useState } from 'react'

interface IEmailContent {
  emails: IEmail[]
  emailSelected: number
}

export function EmailContent({ emails, emailSelected }: IEmailContent) {
  const [email, setEmail] = useState(emails[0])

  useEffect(() => {
    setEmail(emails[emailSelected])
  }, [emailSelected])

  return (
    <EmailContentContainer>
      <div className="spacing"></div>
      <div className="email-title">{email?.headerSubject}</div>
      <div
        className="email-body"
        dangerouslySetInnerHTML={{ __html: email?.html || '' }}
      ></div>
    </EmailContentContainer>
  )
}
