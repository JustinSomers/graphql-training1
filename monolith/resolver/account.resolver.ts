import { Account, QueryAccountArgs, Resolvers } from '@monolith/graphqlTypes';
import { account, avatar } from '@monolith/service/account.service';

const resolver: Resolvers = {
  Query: {
    account: async (_, args: QueryAccountArgs, { dataSources }): Promise<Account> => (
      account(args, dataSources)
    ),
  },
  Account: {
    avatar: async (parent) => avatar(parent),
  },
};

export default resolver;
