import {
  Account,
  Avatar, Avatars, Resolvers,
} from '../typings/graphqlTypes';
import getAvailableAvatars from '../service/avatar.service';
import { Context } from '../context';
import AvatarsModel from '../models/avatars.model';

const resolver: Resolvers = {
  Account: {
      // @ts-ignore
    __resolveReference: (async (reference, context): Promise<Avatar[]> => {
      console.log(`reference: ${reference}`);
      return getAvailableAvatars(context.username, context);
    }),
    avatars: async (parent, args, context): Promise<Avatars> => {
      // console.log('parent logged');
      // console.log(_);
      // console.log('args logged');
      // console.log(args);
      // console.log('creating avatar model');
      // const avatars = new AvatarsModel();
      // console.log(avatars);
      // return avatars;
      console.log(parent);
      const { username } = context;
      const available =  await getAvailableAvatars(username, context);
      return {
        available: available
      } as Avatars
    }
  },
  // avatars: {
  //   available: async (
  //     _parent: AvatarsModel,
  //     _args,
  //     context: Context,
  //   ): Promise<Avatar[]> => {
  //     console.log('avatar resolver called')
  //     const { username } = context;
  //     return await getAvailableAvatars(username, context);
  //   },
  //   current: async(_parent: Avatars, _args, context: Context): Promise<Avatar> => {

  //   }
  // },
};

export default resolver;
