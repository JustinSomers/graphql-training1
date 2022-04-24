import { createClient } from 'redis';
import fetch from 'node-fetch';

const getSession = async () => {
  const client = createClient();
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
  let session = await client.get(process.env.USERNAME);
  session = JSON.parse(session);
  if (!session) {
    const response = await fetch(
      `https://api.imgur.com/3/account/${process.env.USERNAME}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${process.env.CLIENT_ID}`,
        },
      },
    );
    const responseJson = await response.json();
    session = responseJson.data;
    //@ts-ignore
    await client.set(process.env.USERNAME, JSON.stringify(session));
  }
  return session;
};

export default getSession;
