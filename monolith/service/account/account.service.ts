import { Account, UserAccountArgs } from '@monolith/graphqlTypes';
import accountMapper from '@monolith/service/account/account.mapper';
import { getAvailableAvatars } from '@monolith/service/avatar.service';

// eslint-disable-next-line import/prefer-default-export
export const account = async (
  args: UserAccountArgs,
  context,
): Promise<Account> => {
  const result = await context.dataSources.imgurApi.getAccountBase(args.username);
  const mappedAccount = accountMapper.map(result);
  const availableAvatars = await getAvailableAvatars(args.username, context);
  mappedAccount.avatars.available = availableAvatars;
  return mappedAccount;
};
