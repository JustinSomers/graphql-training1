import { Session } from '@monolith/context';
import { redisClient, RedisClientType } from '@monolith/redisClient';
import ImgurApi from '@monolith/dataSources/imgurApi/client';
import { AccountBase } from '@monolith/dataSources/imgurApi/types';
import IImgurApi from '@monolith/dataSources/imgurApi/client.interface';
import errorConstants from '@monolith/util/errorConstants';

const getSession = async (): Promise<Session> => {
  if (!process.env.USERNAME) throw new Error(errorConstants.NO_USERNAME_ENV_VAR);
  const client: RedisClientType = await redisClient();

  let cachedSession: string | null = await client.get(process.env.USERNAME);
  if (!cachedSession) {
    const imgurApi: IImgurApi = new ImgurApi();
    const imgurApiSession = await imgurApi.getSession();
    await client.set(process.env.USERNAME, JSON.stringify(imgurApiSession));
    cachedSession = await client.get(process.env.USERNAME);
  }

  if (!cachedSession) throw new Error(errorConstants.NO_SESSION_CACHED);
  const session: AccountBase = JSON.parse(cachedSession);

  return {
    id: session.data.id,
  };
};

export default getSession;
