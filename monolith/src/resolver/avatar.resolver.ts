import {
  Avatar, Avatars, Resolvers,
} from '@monolith/graphqlTypes';
import getAvailableAvatars from '@monolith/service/avatar.service';
import { Context } from '@monolith/context';

const resolver: Resolvers = {
  Avatars: {
    available: async (
      _parent: Avatars,
      _args,
      context: Context,
    ): Promise<Avatar[]> => {
      const { username } = context;
      return getAvailableAvatars(username, context);
    },
  },
};

export default resolver;
