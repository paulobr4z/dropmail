'use client'
import { Copy, ArrowClockwise } from 'phosphor-react'
import {
  EmailContainer,
  EmailContent,
  EmailPreview,
  HomeContainer,
} from './styles'
import { Header } from '@/components/Header'

export default function Home() {
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
