import {
  Resolvers, Comment,
} from '@monolith/graphqlTypes';
import { Context } from '@monolith/context';
import comments from '@monolith/service/comment/comment.service';

const resolver: Resolvers = {
  Account: {
    // eslint-disable-next-line max-len
    comments: async (_parent, _args, context: Context): Promise<Comment[]> => comments(context),
  },
};

export default resolver;
