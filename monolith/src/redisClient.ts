import { createClient } from 'redis';

export type RedisClientType = ReturnType<typeof createClient>

export async function redisClient(): Promise<RedisClientType> {
  const client: RedisClientType = createClient();
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
  return client;
}
