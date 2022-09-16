import Mapper from '../util/mapper';
import { Account as ImgurAccount, AccountData } from '@monolith/dataSources/imgurApi/types/account';
import { Account } from '../typings/graphqlTypes';

const mapper = new Mapper<ImgurAccount, Account>();
mapper.map = (apiResult: ImgurAccount) => {
  const accountData: AccountData = apiResult.data;
  const account: Account = {
    id: accountData.id.toString(),
    isBlocked: accountData.is_blocked,
    bio: accountData.bio,
    cover: {
      url: accountData.cover,
      name: accountData.cover_name,
    },
    created: accountData.created,
    proExpiration: accountData.pro_expiration,
    reputation: {
      score: accountData.reputation,
      name: accountData.reputation_name,
    },
    url: accountData.url,
    userFollow: {
      status: accountData.user_follow.status,
    },
  };
  return account;
};

export default mapper;
