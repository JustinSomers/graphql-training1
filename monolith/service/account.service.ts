import { Account, Avatar, QueryAccountArgs } from '@monolith/graphqlTypes';

export const account = async (
  args: QueryAccountArgs,
  dataSources,
): Promise<Account> => {
  const result = await dataSources.imgurApi.getAccountBase(args.username);
  return result.data;
};

export const avatar = async (parent): Promise<Avatar> => {
  const avatarSchema = {
    url: parent.avatar,
    avatar_name: parent.avatar_name,
  };
  return avatarSchema;
};
