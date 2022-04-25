import { Context } from '@monolith/context';
import { Account, Avatar, UserAccountArgs } from '@monolith/graphqlTypes';
import accountMapper from '@monolith/service/account/account.mapper';
import getAvailableAvatars from '@monolith/service/avatar.service';
import { AccountBase } from '@monolith/service/account/types';

const account = async (
  args: UserAccountArgs,
  context: Context,
): Promise<Account> => {
  const accountBase: AccountBase = await context.dataSources.imgurApi.getAccountBase(args.username);
  const mappedAccount: Account = accountMapper.map(accountBase);

  const availableAvatars: Avatar[] = await getAvailableAvatars(args.username, context);

  mappedAccount.avatars.available = availableAvatars;
  return mappedAccount;
};

export default account;
