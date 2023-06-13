import { NotificationsContainer } from './styles'

export function Notifications() {
  function notifyMe() {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification')
    } else if (Notification.permission === 'granted') {
      const notification = new Notification('Hi there!', {
        body: 'new e-mail',
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
      })
      notification.addEventListener('click', function () {
        notification.close()
      })
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          const notification = new Notification('Hi there!', {
            body: 'new e-mail',
            icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
          })
          notification.addEventListener('click', function () {
            notification.close()
          })
        }
      })
    }
  }

  return (
    <NotificationsContainer>
      <button onClick={notifyMe}>Notify me</button>
    </NotificationsContainer>
  )
}
