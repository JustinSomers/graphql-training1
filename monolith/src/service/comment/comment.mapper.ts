import Mapper from '@monolith/util/mapper';
import { Comment as ImgurComment } from '@monolith/dataSources/imgurApi/types/comment';
import { Comment } from '@monolith/graphqlTypes';

const mapper = new Mapper<ImgurComment[], Comment[]>();
mapper.map = (apiResults: ImgurComment[]) => {
  const comments: Comment[] = [];
  apiResults.forEach((apiResult) => {
    const comment: Comment = {
      author: apiResult.author,
      comment: apiResult.comment,
      id: apiResult.id,
      image_id: apiResult.image_id,
    };
    comments.push(comment);
  });

  return comments;
};

export default mapper;
