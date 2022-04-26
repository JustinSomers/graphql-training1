import { Context } from '@monolith/context';
import {
  Account, /* Image, */ User, UserAccountArgs,
} from '@monolith/graphqlTypes';
import accountMapper from '@monolith/service/account/account.mapper';
// import getImage from '@monolith/service/image.service';
import { AccountBase } from '@monolith/dataSources/imgurApi/types';

const account = async (
  parent: User,
  args: UserAccountArgs,
  context: Context,
): Promise<Account> => {
  let { username } = args;
  if (!username) {
    username = parent.username;
  }

  const accountBase: AccountBase = await context.dataSources.imgurApi.getAccountBase(username);
  const mappedAccount: Account = accountMapper.map(accountBase);
  mappedAccount.username = username;

  return mappedAccount;
};

export default account;
