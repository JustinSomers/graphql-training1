import { Context } from '@monolith/context';
import { Account } from '@monolith/graphqlTypes';
import accountMapper from '@monolith/service/account/account.mapper';
import { AccountBase } from '@monolith/dataSources/imgurApi/types';

const account = async (
  username: string,
  context: Context,
): Promise<Account> => {
  const accountBase: AccountBase = await context.dataSources.imgurApi.getAccountBase(username);
  const mappedAccount: Account = accountMapper.map(accountBase);

  return mappedAccount;
};

export default account;
