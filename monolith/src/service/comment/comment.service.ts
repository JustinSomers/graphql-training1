import { Context } from '@monolith/context';
import {
  Comment,
} from '@monolith/graphqlTypes';
import commentMapper from '@monolith/service/comment/comment.mapper';

const comments = async (
  context: Context,
): Promise<Comment[]> => {
  // eslint-disable-next-line max-len
  const commentsResponse = await context.dataSources.imgurApi.getComments(context.username);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const mappedComments: Comment[] = commentMapper.map(commentsResponse);
  return mappedComments;
};

export default comments;
