import { Account, UserAccountArgs } from '@monolith/graphqlTypes';
import accountMapper from '@monolith/service/account.mapper';

// eslint-disable-next-line import/prefer-default-export
export const account = async (
  args: UserAccountArgs,
  context,
): Promise<Account> => {
  const result = await context.dataSources.imgurApi.getAccountBase(args.username);
  return accountMapper.map(result);
};
