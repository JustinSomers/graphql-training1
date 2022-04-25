type AvailableAvatarsNameAndLocation = {
  name: string
  location: string
}

type AvailableAvatarsData = {
  available_avatars: AvailableAvatarsNameAndLocation[]
  available_avatars_count: number
  avatars_are_default: boolean
}

type AvailableAvatars = {
  data: AvailableAvatarsData
  success: boolean
  status: number
}

export default AvailableAvatars;
