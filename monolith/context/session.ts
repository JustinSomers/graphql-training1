import { Session } from '@monolith/context';
import { redisClient, RedisClientType } from '@monolith/redisClient';
import ImgurApi from '@monolith/dataSources/imgurApiClient';
import { AccountBase } from '@monolith/service/account/types';
import IImgurApi from '@monolith/dataSources/imgurApiClient.interface';

const getSession = async (): Promise<Session> => {
  const client: RedisClientType = await redisClient();

  const cachedSession: string = await client.get(process.env.USERNAME);
  let session: AccountBase = JSON.parse(cachedSession);

  if (!session) {
    const imgurApi: IImgurApi = new ImgurApi();
    session = await imgurApi.getSession();
    await client.set(process.env.USERNAME, JSON.stringify(session));
  }

  return {
    id: session.data.id,
    username: process.env.USERNAME,
  };
};

export default getSession;
