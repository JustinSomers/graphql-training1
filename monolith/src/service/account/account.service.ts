import { Context } from '@monolith/context';
import { Account, Avatar, UserAccountArgs } from '@monolith/graphqlTypes';
import accountMapper from '@monolith/service/account/account.mapper';
import getAvailableAvatars from '@monolith/service/avatar.service';
import { AccountBase } from '@monolith/dataSources/imgurApi/types';

const account = async (
  args: UserAccountArgs,
  context: Context,
): Promise<Account> => {
  if (!process.env.USERNAME) throw new Error('No username env var');

  let { username } = args;
  if (!username) {
    username = process.env.USERNAME;
  }

  const accountBase: AccountBase = await context.dataSources.imgurApi.getAccountBase(username);
  const mappedAccount: Account = accountMapper.map(accountBase);

  const availableAvatars: Avatar[] = await getAvailableAvatars(username, context);

  if (mappedAccount.avatars) {
    mappedAccount.avatars.available = availableAvatars;
  }
  return mappedAccount;
};

export default account;
