type Image = {
  id: string
  title: string
  description: string
  datetime: number
  type: string
  animated: boolean
  width: number
  height: number
  size: number
  views: number
  bandwidth: number
  vote: string
  favorite: boolean
  nsfw: boolean
  section: string
  is_ad: boolean
  in_most_viral: boolean
  has_sound: boolean
  tags: string[]
  ad_type: number
  ad_url: string
  edited: string
  in_gallery: boolean
  name: string
  deletehash: string
  link: string
}

type ImagesResponse = {
  data: Image
  success: boolean
  status: number
}

export { ImagesResponse, Image };
