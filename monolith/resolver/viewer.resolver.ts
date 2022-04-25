import { Resolvers } from '@monolith/graphqlTypes';
import { viewer } from '@monolith/service/viewer.service';

const resolver: Resolvers = {
  Query: {
    viewer: (_, __, context) => viewer(context),
  },
};

export default resolver;
