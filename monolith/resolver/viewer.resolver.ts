import { Resolvers } from '@monolith/graphqlTypes';
import { viewer } from '@monolith/service/viewer.service';

const resolver: Resolvers = {
  Query: {
    // eslint-disable-next-line arrow-body-style
    viewer: (_, __, context) => {
      return viewer(context);
    },
  },
};

export default resolver;
