import redisClient from '@monolith/redisClient';
import ImgurApi from '@monolith/imgurApiClient';

const getSession = async () => {
  const client = await redisClient();

  let session = await client.get(process.env.USERNAME);
  session = JSON.parse(session);

  if (!session) {
    const imgurApi = new ImgurApi();
    session = await imgurApi.getSession();
    await client.set(process.env.USERNAME, JSON.stringify(session));
  }

  return session;
};

export default getSession;
