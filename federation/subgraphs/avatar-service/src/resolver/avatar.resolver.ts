import {
  Account,
  Avatar, Avatars, Resolvers,
} from '../typings/graphqlTypes';
import getAvailableAvatars from '../service/avatar.service';
import { Context } from '../context';
// import AvatarsModel from '../models/avatars.model';

const resolver: Resolvers = {
  Account: {
    avatars: async (parent, args, context): Promise<Avatars> => {
      return { };
    }
  },
  Avatars: {
    available: async (parent, args, context): Promise<Avatar[]> => {
    const { username } = context;
    const available =  await getAvailableAvatars(username, context);
    return available;
  }
}
}

export default resolver;
