import { Account, UserAccountArgs } from '@monolith/graphqlTypes';
import accountMapper from '@monolith/service/account/account.mapper';
import { getAvailableAvatars } from '@monolith/service/avatar.service';

const account = async (
  args: UserAccountArgs,
  context,
): Promise<Account> => {
  const accountBase = await context.dataSources.imgurApi.getAccountBase(args.username);
  const mappedAccount = accountMapper.map(accountBase);

  const availableAvatars = await getAvailableAvatars(args.username, context);

  mappedAccount.avatars.available = availableAvatars;
  return mappedAccount;
};

export default account;
