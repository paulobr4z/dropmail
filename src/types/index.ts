export interface IUserSession {
  id: string
  email: string
  expiresAt: Date
}

export interface IEmail {
  toAddr: string
  text: string
  rawSize: number
  html: string | null
  headerSubject: string
  fromAddr: string
  downloadUrl: string
}

export interface ISessions {
  id: string
  expiresAt: string
  mails: IEmail[]
}
