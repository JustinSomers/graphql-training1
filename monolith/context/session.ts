import { Session } from '@monolith/context';
import { redisClient, RedisClientType } from '@monolith/redisClient';
import ImgurApi from '@monolith/dataSources/imgurApi/client';
import { AccountBase } from '@monolith/dataSources/imgurApi/types';
import IImgurApi from '@monolith/dataSources/imgurApi/client.interface';

const getSession = async (): Promise<Session> => {
  const client: RedisClientType = await redisClient();

  if (!process.env.USERNAME) throw new Error('No USERNAME env var');

  let cachedSession: string | null = await client.get(process.env.USERNAME);
  if (!cachedSession) {
    const imgurApi: IImgurApi = new ImgurApi();
    const imgurApiSession = await imgurApi.getSession();
    await client.set(process.env.USERNAME, JSON.stringify(imgurApiSession));
  }

  cachedSession = await client.get(process.env.USERNAME);
  if (!cachedSession) throw new Error('session not cached');
  const session: AccountBase = JSON.parse(cachedSession);

  return {
    id: session.data.id,
    username: process.env.USERNAME,
  };
};

export default getSession;
