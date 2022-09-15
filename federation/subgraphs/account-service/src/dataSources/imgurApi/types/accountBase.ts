type UserFollow = {
  status: boolean
}

type AccountBaseData = {
  id: number
  username: string
  url: string
  bio: string
  avatar_name: string
  cover: string
  cover_name: string
  reputation: number
  reputation_name: string
  created: number
  pro_expiration: boolean
  user_follow: UserFollow
  is_blocked: boolean
}

type AccountBase = {
  data: AccountBaseData
  success: boolean
  status: number
}

export default AccountBase;
