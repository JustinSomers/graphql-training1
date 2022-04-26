import { Avatar, Resolvers } from '@monolith/graphqlTypes';
import { getCurrentAvatar, getAvailableAvatars } from '@monolith/service/avatar.service';
import { Context } from '@monolith/context';

const resolver: Resolvers = {
  Avatars: {
    current: async (
      parent,
      _args,
      context: Context,
    ): Promise<Avatar> => getCurrentAvatar(parent, context),
    available: async (
      parent,
      _args,
      context: Context,
    ): Promise<Avatar[]> => getAvailableAvatars(parent, context),
  },
};

export default resolver;
