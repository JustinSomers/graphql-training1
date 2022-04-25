import { Context } from '@monolith/context';
import { User } from '@monolith/graphqlTypes';

const viewer = (
  context: Context,
): User => {
  if (!process.env.USERNAME) throw new Error('No USERNAME env var');
  return {
    id: context.session.id,
    username: process.env.USERNAME,
  };
};

export default viewer;
