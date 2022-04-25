import { Session } from '@monolith/context';
import redisClient from '@monolith/redisClient';
import ImgurApi from '@monolith/dataSources/imgurApiClient';

const getSession = async (): Promise<Session> => {
  const client = await redisClient();

  let session = await client.get(process.env.USERNAME);
  session = JSON.parse(session);

  if (!session) {
    const imgurApi = new ImgurApi();
    //@ts-ignore
    session = await imgurApi.getSession();
    //@ts-ignore
    await client.set(process.env.USERNAME, JSON.stringify(session.data));
  }

  return {
    //@ts-ignore
    id: session.id,
    //@ts-ignore
    username: session.username,
  };
};

export default getSession;
