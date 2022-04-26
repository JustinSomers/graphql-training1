import {
  Account, UserAccountArgs, Resolvers, User,
} from '@monolith/graphqlTypes';
import account from '@monolith/service/account/account.service';
import { Context } from '@monolith/context';

const resolver: Resolvers = {
  User: {
    account: async (parent: User, args: UserAccountArgs, context: Context): Promise<Account> => (
      account(parent, args, context)
    ),
  },
};

export default resolver;
