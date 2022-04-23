import { Account, UserAccountArgs, Resolvers } from '@monolith/graphqlTypes';
import { account } from '@monolith/service/account.service';

const resolver: Resolvers = {
  User: {
    account: async (_, args: UserAccountArgs, context): Promise<Account> => (
      account(args, context)
    ),
  },
};

export default resolver;
