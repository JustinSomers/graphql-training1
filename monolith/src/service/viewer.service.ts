import { Context } from '@monolith/context';
import { User } from '@monolith/graphqlTypes';

const viewer = (
  context: Context,
): User => ({
  id: context.session.id,
  username: context.username,
});

export default viewer;
