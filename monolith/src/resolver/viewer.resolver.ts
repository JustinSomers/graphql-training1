import { Resolvers, User } from '@monolith/graphqlTypes';
import viewer from '@monolith/service/viewer.service';
import { Context } from '@monolith/context';

const resolver: Resolvers = {
  Query: {
    viewer: (_, __, context: Context): User => viewer(context),
  },
};

export default resolver;
