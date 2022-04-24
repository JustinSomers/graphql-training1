import { Account, UserAccountArgs } from '@monolith/graphqlTypes';
import accountMapper from '@monolith/service/account/account.mapper';

// eslint-disable-next-line import/prefer-default-export
export const account = async (
  args: UserAccountArgs,
  context,
): Promise<Account> => {
  const result = await context.dataSources.imgurApi.getAccountBase(args.username);
  const mappedAccount = accountMapper.map(result);
  const avatarResult = await context.dataSources.imgurApi.getAvailableAvatars(args.username);
  mappedAccount.avatars.available = [];
  avatarResult.data.available_avatars.forEach((avatar) => {
    mappedAccount.avatars.available.push({
      url: avatar.location,
      name: avatar.name,
    });
  });
  return mappedAccount;
};
