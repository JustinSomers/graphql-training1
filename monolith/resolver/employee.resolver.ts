import account from '@monolith/service/account.service';

const resolver = {
  Query: {
    account: async (parent, args, context) => account(args, context.dataSources),
  },
};

export default resolver;
