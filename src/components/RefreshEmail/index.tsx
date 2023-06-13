import { ArrowClockwise } from 'phosphor-react'
import { RefreshEmailContainer } from './styles'
import { useEffect, useState } from 'react'

interface IRefreshEmail {
  refreshInbox: () => void
}

export function RefreshEmail({ refreshInbox }: IRefreshEmail) {
  const [time, setTime] = useState(15)

  function updateTime() {
    setTimeout(() => {
      if (time > 1) {
        setTime(time - 1)
      } else {
        setTime(15)
        refreshInbox()
      }
    }, 1000)
  }

  useEffect(() => {
    updateTime()
  }, [])

  return (
    <RefreshEmailContainer>
      <div className="refresh-email">
        <span>
          <p>Autorefresh in</p>
          <div className="refresh-seconds">
            <p>{time}</p>
          </div>
        </span>
        <span>
          <ArrowClockwise size={24} />
          <p>Refresh</p>
        </span>
      </div>
    </RefreshEmailContainer>
  )
}
