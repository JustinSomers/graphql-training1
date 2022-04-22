import { Account,  QueryAccountArgs } from '@monolith/graphqlTypes';

// eslint-disable-next-line import/prefer-default-export
export const account = async (
  args: QueryAccountArgs,
  dataSources,
): Promise<Account> => {
  const result = await dataSources.imgurApi.getAccountBase(args.username);
  return {
    id: result.data.id,
    isBlocked: result.data.is_blocked,
    avatars: {
      current: {
        url: result.data.avatar,
        name: result.data.avatar_name,
      },
    },
    bio: result.data.bio,
    cover: {
      cover: result.data.cover,
      coverName: result.data.cover_name,
    },
    created: result.data.created,
    proExpiration: result.data.pro_expiration,
    reputation: {
      reputation: result.data.reputation,
      reputationName: result.data.reputation_name,
    },
    url: result.data.url,
    userFollow: {
      status: result.data.user_follow.status,
    },
  };
};
