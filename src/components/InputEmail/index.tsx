import { Copy } from 'phosphor-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { InputEmailContainer } from './styles'

interface IInputEmail {
  email?: string
}

export function InputEmail({ email }: IInputEmail) {
  function copyToClipboard() {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email || '')
      toast.success('E-mail successfully copied')
    }
  }
  return (
    <InputEmailContainer>
      <ToastContainer />
      <div className="input-email">
        <input type="text" defaultValue={email} />
        <div className="copy" onClick={copyToClipboard}>
          <Copy size={24} />
          <p>Copy</p>
        </div>
      </div>
    </InputEmailContainer>
  )
}
