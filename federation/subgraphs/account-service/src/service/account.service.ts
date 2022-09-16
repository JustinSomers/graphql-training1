import { Context } from '../context/index';
import { Account } from '../typings/graphqlTypes';
import accountMapper from './account.mapper';
import { AccountBase } from '../dataSources/';

const account = async (
  username: string,
  context: Context,
): Promise<Account> => {
  const accountBase: AccountBase = await context.dataSources.imgurApi.getAccountBase(username);
  const mappedAccount: Account = accountMapper.map(accountBase);

  return mappedAccount;
};

export default account;
