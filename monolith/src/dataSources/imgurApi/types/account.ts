export type AccountData = {
  id: number,
  username: string,
  url: string,
  is_blocked: boolean,
  avatar: string,
  avatar_name: string,
  bio: string,
  cover: string,
  cover_name: string,
  reputation: number,
  reputation_name: string,
  created: number,
  pro_expiration: boolean,
  user_follow: {
    status: boolean
  },
};

export type Account = {
  data: AccountData
}
