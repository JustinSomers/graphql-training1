import { Context } from '../context/index';
import { Account } from '../typings/graphqlTypes';
import accountMapper from './account.mapper';
import { AccountBase } from '../dataSources/';

const account = async (
  username: string,
  context: Context,
): Promise<Account> => {
  console.log(context);
  const accountBase: AccountBase = await context.dataSources.imgurApi.getAccountBase(username);
  const mappedAccount: Account = accountMapper.map(accountBase);

  console.log(mappedAccount);
  return mappedAccount;
};

export default account;
