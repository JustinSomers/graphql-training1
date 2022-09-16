export type Comment = {
  id: string,
  image_id: string,
  comment: string,
  author: string
};

export type ImgurCommentResponse = {
  data: Comment[],
};
