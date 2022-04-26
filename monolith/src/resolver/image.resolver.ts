import { Context } from '@monolith/context';
import {
  AccountImageArgs, Image, Resolvers, Account,
} from '@monolith/graphqlTypes';
import getImage from '@monolith/service/image.service';

const resolver: Resolvers = {
  Account: {
    image: async (
      _parent: Account,
      args: AccountImageArgs,
      context: Context,
    ): Promise<Image> => (
      getImage(args, context)
    ),
  },
};

export default resolver;
