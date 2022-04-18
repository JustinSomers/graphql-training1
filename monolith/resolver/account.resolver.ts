import { account, avatar } from '@monolith/service/account.service';

const resolver = {
  Query: {
    account: async (parent, args, context) => account(args, context.dataSources),
  },
  Account: {
    avatar: async (parent) => avatar(parent),
  },
};

export default resolver;
