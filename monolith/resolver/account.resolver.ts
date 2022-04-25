import { Account, UserAccountArgs, Resolvers } from '@monolith/graphqlTypes';
import account from '@monolith/service/account/account.service';
import { Context } from '@monolith/context';

const resolver: Resolvers = {
  User: {
    account: async (_, args: UserAccountArgs, context: Context): Promise<Account> => (
      account(args, context)
    ),
  },
};

export default resolver;
