import { Resolvers, Identity } from '../typings/graphqlTypes';
import viewer from '../service/viewer.service';
import { Context } from '../context';

const resolver: Resolvers = {
  Query: {
    viewer: (_, __, context: Context): Identity => viewer(context),
  },
};

export default resolver;
