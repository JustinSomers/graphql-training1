import { Account, QueryAccountArgs, Resolvers } from '@monolith/graphqlTypes';
import { account } from '@monolith/service/account.service';

const resolver: Resolvers = {
  Query: {
    account: async (_, args: QueryAccountArgs, { dataSources }): Promise<Account> => (
      account(args, dataSources)
    ),
  },
};

export default resolver;
