import { Session } from '@monolith/context';
import redisClient from '@monolith/redisClient';
import ImgurApi from '@monolith/imgurApiClient';

const getSession = async (): Promise<Session> => {
  const client = await redisClient();

  let session = await client.get(process.env.USERNAME);
  session = JSON.parse(session);

  if (!session) {
    const imgurApi = new ImgurApi();
    session = await imgurApi.getSession();
    await client.set(process.env.USERNAME, JSON.stringify(session));
  }

  return {
    //@ts-ignore
    id: session.id,
    //@ts-ignore
    username: session.username,
  };
};

export default getSession;
