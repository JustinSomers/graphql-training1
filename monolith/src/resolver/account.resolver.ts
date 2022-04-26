import {
  Account, QueryAccountArgs, Resolvers, User,
} from '@monolith/graphqlTypes';
import account from '@monolith/service/account/account.service';
import { Context } from '@monolith/context';

const resolver: Resolvers = {
  User: {
    account: async (parent: User, _args, context: Context): Promise<Account> => {
      context.username = parent.username;
      return account(context.username, context);
    },
  },
  Query: {
    account: async (_parent, args: QueryAccountArgs, context: Context): Promise<Account> => {
      context.username = args.username;
      return account(context.username, context);
    },
  },
};

export default resolver;
