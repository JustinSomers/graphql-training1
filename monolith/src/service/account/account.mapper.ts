import Mapper from '@monolith/util/mapper';
import ImgurAccount from '@monolith/dataSources/imgurApi/types/account';
import { Account } from '@monolith/graphqlTypes';

const mapper = new Mapper<ImgurAccount, Account>();
mapper.map = (apiResult: ImgurAccount) => {
  const account: Account = {
    id: apiResult.data.id,
    isBlocked: apiResult.data.is_blocked,
    avatars: {
      current: {
        url: apiResult.data.avatar,
        name: apiResult.data.avatar_name,
      },
    },
    bio: apiResult.data.bio,
    cover: {
      cover: apiResult.data.cover,
      coverName: apiResult.data.cover_name,
    },
    created: apiResult.data.created,
    proExpiration: apiResult.data.pro_expiration,
    reputation: {
      reputation: apiResult.data.reputation,
      reputationName: apiResult.data.reputation_name,
    },
    url: apiResult.data.url,
    userFollow: {
      status: apiResult.data.user_follow.status,
    },
  };
  return account;
};

export default mapper;
