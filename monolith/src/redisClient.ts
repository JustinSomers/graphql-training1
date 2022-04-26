import { createClient } from 'redis';

export type RedisClientType = ReturnType<typeof createClient>

export async function redisClient(): Promise<RedisClientType> {
  const client: RedisClientType = createClient();
  // eslint-disable-next-line no-console
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
  return client;
}
