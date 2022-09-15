import {
    Account, QueryAccountArgs, Resolvers, User,
  } from '../typings/graphqlTypes';
  import account from '../service/account.service';
  import { Context } from '../context/';
  
  const AccountResolver: Resolvers = {
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
  
  export default AccountResolver;
  