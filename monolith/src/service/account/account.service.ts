import { Context } from '@monolith/context';
import {
  Account, Avatar, /* Image, */ User, UserAccountArgs,
} from '@monolith/graphqlTypes';
import accountMapper from '@monolith/service/account/account.mapper';
import getAvailableAvatars from '@monolith/service/avatar.service';
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

  const availableAvatars: Avatar[] = await getAvailableAvatars(username, context);
  if (mappedAccount.avatars) {
    mappedAccount.avatars.available = availableAvatars;
  }

  // const image: Image = await getImage(username, context);
  // mappedAccount.image = image;

  mappedAccount.username = username;

  return mappedAccount;
};

export default account;
