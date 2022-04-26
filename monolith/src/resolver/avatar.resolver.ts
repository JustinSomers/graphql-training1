import {
  Avatar, Avatars, AvatarsAvailableArgs, Resolvers,
} from '@monolith/graphqlTypes';
import getAvailableAvatars from '@monolith/service/avatar.service';
import { Context } from '@monolith/context';

const resolver: Resolvers = {
  Avatars: {
    available: async (
      _parent: Avatars,
      args: AvatarsAvailableArgs,
      context: Context,
    ): Promise<Avatar[]> => getAvailableAvatars(args, context),
  },
};

export default resolver;
