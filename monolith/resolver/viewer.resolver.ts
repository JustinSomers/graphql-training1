import { Resolvers } from '@monolith/graphqlTypes';
import viewer from '@monolith/service/viewer.service';
import { Context } from '@monolith/context';

const resolver: Resolvers = {
  Query: {
    viewer: (_, __, context: Context) => viewer(context),
  },
};

export default resolver;
