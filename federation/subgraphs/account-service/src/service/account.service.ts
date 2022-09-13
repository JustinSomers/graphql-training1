import { Context } from '../context';
import { Account } from '../typings/graphqlTypes';
import accountMapper from './account.mapper';
import { AccountBase} from 'service-library';

const account = async (
  username: string,
  context: Context,
): Promise<Account> => {
  const accountBase: AccountBase = await context.dataSources.imgurApi.getAccountBase(username);
  const mappedAccount: Account = accountMapper.map(accountBase);

  console.log(mappedAccount);
  return mappedAccount;
};

export default account;
