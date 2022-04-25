import { createClient } from 'redis';

type RedisClientType = ReturnType<typeof createClient>

export default async function redisClient(): Promise<RedisClientType> {
  const client: RedisClientType = createClient();
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
  return client;
}
